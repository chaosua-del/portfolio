const fs = require("fs");
const { component, types, barrel } = require("./templates.js");

// grab component name from terminal argument
const [name] = process.argv.slice(2);
if (!name) throw new Error("You must include a component name.");

const dir = `./src/ui/${name}/`;

// throw an error if the file already exists
if (fs.existsSync(dir))
  throw new Error("A component with that name already exists.");

// create the folder
fs.mkdirSync(dir);

function writeFileErrorHandler(err) {
  if (err) throw err;
}

// component.tsx
fs.writeFile(`${dir}/${name}.tsx`, component(name), writeFileErrorHandler);
// types.ts
fs.writeFile(`${dir}/${name}.types.ts`, types(name), writeFileErrorHandler);
// index.tsx
fs.writeFile(`${dir}/index.ts`, barrel(name), writeFileErrorHandler);
