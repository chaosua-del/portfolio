/* eslint-disable */
import * as deepl from 'deepl-node';
import { config } from 'dotenv';
import fs from 'fs/promises';
import path from 'path';

config({ path: path.join(process.cwd(), '.env.local') });

const dictionariesPath = 'src/lib/i18n/dictionaries';
const sourcePath = path.join(process.cwd(), dictionariesPath, 'en.json');
const outputPath = path.join(process.cwd(), dictionariesPath, 'ru.json');

const authKey = process.env.DEEPL_KEY;
if (!authKey) {
  throw new Error('DEEPL_KEY is required');
}
const translator = new deepl.Translator(authKey);

type TranslationData = Record<string, any>;

(async () => {
  const sourceFile = await fs.readFile(sourcePath);
  const source = JSON.parse(sourceFile.toString());

  const outputFile = await fs.readFile(outputPath);
  const output = JSON.parse(outputFile.toString());

  async function translate(
    sourceObject: TranslationData,
    outputObject: TranslationData,
    baseKey = '',
  ) {
    for (const key of Object.keys(sourceObject)) {
      const value = sourceObject[key];
      if (typeof value === 'object') {
        outputObject[key] = {
          ...outputObject[key],
        };
        await translate(value, outputObject[key], [baseKey, key].join('.'));
      } else if (outputObject[key] === undefined) {
        console.log(`Translating ${[baseKey, key].join('.')}`);
        const translation = await translator.translateText(
          sourceObject[key],
          'en',
          'ru',
        );
        if (!Array.isArray(translation)) {
          outputObject[key] = translation.text;
        } else {
          console.log(`Unsupported format\n${translation}`);
        }
      } else {
        console.log(`Skipping ${[baseKey, key].join('.').slice(1)}`);
      }
    }
  }

  await translate(source, output);
  await fs.writeFile(outputPath, JSON.stringify(output, null, 2));
})();
