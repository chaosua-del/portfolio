import { languages } from '@/constants/languages';

export const Languages = () => {
  return (
    <div id="languages" className="mt-10">
      <div className="flex gap-4 items-center mb-4">
        <h2 className="font-semibold text-2xl">Languages</h2>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-4">
        {languages.map((lang) => (
          <div key={lang.title}>
            <h4>{lang.title}</h4>
            <span className="text-neutral-400 text-sm">{lang.level}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
