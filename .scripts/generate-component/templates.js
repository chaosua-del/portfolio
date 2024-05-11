// component.tsx
exports.component = (
  name
) => `import type { ${name}Props } from "./${name}.types";

export const ${name} = ({}: ${name}Props) => {
  return <div>Hello 👋, I am a ${name} component.</div>;
};
`;

// component.types.ts
exports.types = (name) => `export interface ${name}Props {}
`;

// index.ts
exports.barrel = (name) => `export { ${name} } from "./${name}";
`;
