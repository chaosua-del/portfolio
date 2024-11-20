export const skills: {
  icon: string;
  title: string;
  startDate: string;
  relatedProjects?: string[];
}[] = [
  {
    icon: 'React-Light.svg',
    title: 'React',
    startDate: '2020-01-01',
    relatedProjects: ['all'],
  },
  {
    icon: 'JavaScript.svg',
    title: 'Java Script',
    startDate: '2019-01-01',
    relatedProjects: ['all'],
  },
  {
    icon: 'TypeScript.svg',
    title: 'TypeScript',
    startDate: '2021-01-01',
    relatedProjects: ['all'],
  },
  {
    icon: 'HTML.svg',
    title: 'HTML',
    startDate: '2019-01-01',
    relatedProjects: ['all'],
  },
  {
    icon: 'CSS.svg',
    title: 'CSS',
    startDate: '2019-01-01',
    relatedProjects: ['all'],
  },
  {
    icon: 'NextJS-Light.svg',
    title: 'Next JS',
    startDate: '2022-01-01',
    relatedProjects: ['epam-birds', 'leadtower'],
  },
  {
    icon: 'React-Light.svg',
    title: 'React Native',
    startDate: '2021-01-01',
    relatedProjects: ['compassly', 'restaurant-app'],
  },
  {
    icon: 'NodeJS-Light.svg',
    title: 'Node JS',
    startDate: '2022-01-01',
    relatedProjects: ['epam-ecommerce', 'staking-app'],
  },
  {
    icon: 'ExpressJS-Light.svg',
    title: 'Express JS',
    startDate: '2022-01-01',
    relatedProjects: ['staking-app'],
  },
  {
    icon: 'NestJS-Light.svg',
    title: 'Nest JS',
    startDate: '2023-01-01',
  },
];

export const otherSkills: Record<
  string,
  { title: string; relation: string[] }[]
> = {
  Frontend: [
    { title: 'SCSS/SASS', relation: [] },
    { title: 'Bootstrap', relation: ['testigram'] },
    { title: 'MUI', relation: [] },
    { title: 'Tailwind CSS', relation: ['erp', 'staking-app'] },
    { title: 'ShadCN', relation: ['erp', 'staking-app'] },
    { title: 'Styled components', relation: [] },
    { title: 'CSS modules', relation: [] },
    { title: 'Framer motion', relation: ['leadtower'] },
    { title: 'Next.JS auth', relation: [] },
    { title: 'Chakra UI', relation: ['leadtower'] },
  ],
  'State Management': [
    {
      title: 'Redux',
      relation: ['testigram', 'epam-ecommerce', 'epam-birds', 'compassly'],
    },
    { title: 'Redux Saga', relation: ['epam-ecommerce'] },
    {
      title: 'Redux toolkit',
      relation: ['testigram', 'epam-ecommerce', 'compassly'],
    },
    { title: 'Tanstack query', relation: ['erp', 'staking-app'] },
    { title: 'Zustand', relation: ['erp', 'staking-app'] },
  ],
  'React Native': [
    { title: 'React Native', relation: ['compassly', 'restaurant-app'] },
    { title: 'React native cli', relation: ['compassly', 'restaurant-app'] },
    { title: 'EXPO', relation: [] },
    {
      title: 'React native elements',
      relation: ['compassly', 'restaurant-app'],
    },
    {
      title: 'React-native-reanimated',
      relation: ['compassly', 'restaurant-app'],
    },
    {
      title: 'React-native-gesture-handler',
      relation: ['compassly', 'restaurant-app'],
    },
    { title: 'React-native-maps', relation: ['restaurant-app'] },
  ],
  Backend: [
    { title: 'Node.js', relation: ['epam-ecommerce', 'staking-app'] },
    { title: 'Express', relation: ['staking-app'] },
    { title: 'NestJS', relation: [] },
    { title: 'REST API', relation: ['all'] },
    { title: 'GraphQL', relation: ['epam-ecommerce', 'epam-birds'] },
    { title: 'WebSockets', relation: ['restaurant-app'] },
  ],
  'Version Control and CI/CD': [
    { title: 'Git Version Control', relation: ['all'] },
    { title: 'Git actions', relation: ['all'] },
  ],
  'Project Management': [
    { title: 'Jira', relation: ['all'] },
    { title: 'Linear', relation: [] },
  ],
  'Cloud Services': [
    { title: 'AWS console', relation: ['epam-birds'] },
    { title: 'AWS Amplify', relation: ['epam-birds'] },
    { title: 'AWS CLI', relation: ['epam-birds'] },
    { title: 'Google Cloud Console', relation: [] },
    { title: 'Firebase', relation: ['resttaurant-app'] },
    { title: 'Airtable', relation: ['leadtower'] },
  ],
  'Development Tools': [
    { title: 'Xcode', relation: ['compassly'] },
    { title: 'Android Studio', relation: ['compassly'] },
    { title: 'Browser dev tools', relation: [] },
    { title: 'React Developer Tools', relation: [] },
  ],
  Databases: [
    { title: 'MongoDB', relation: ['vidbil-bot'] },
    { title: 'DynamoDB', relation: ['epam-birds'] },
    { title: 'MySQL', relation: [] },
    { title: 'PostgreSQL', relation: ['staking-app'] },
  ],
  Architecture: [
    { title: 'Microfrontend', relation: ['epam-ecommerce'] },
    { title: 'BFF architecture', relation: ['epam-ecommerce'] },
  ],
  Storage: [
    { title: 'Session storage', relation: ['all'] },
    { title: 'Local storage', relation: ['all'] },
    { title: 'Browser Cookies', relation: ['all'] },
    { title: 'Async storage', relation: ['compassly'] },
  ],
  Monitoring: [{ title: 'New Relic Analytics', relation: ['epam-ecommerce'] }],
  Authentication: [
    { title: 'Single Sign-On', relation: ['epam-business-model'] },
    { title: 'Biometric auth', relation: ['compassly'] },
    { title: 'OAuth', relation: ['epam-business-model'] },
    {
      title: 'JWT',
      relation: ['staking-app', 'erp', 'testigram', 'epam-birds'],
    },
  ],
  'Form Handling': [
    { title: 'Formik', relation: ['testigram'] },
    { title: 'React hook forms', relation: ['staking-app', 'erp'] },
  ],
  'ORM/ODM': [
    { title: 'Mongoose', relation: ['vidbil-bot'] },
    { title: 'Prisma', relation: [] },
    { title: 'TypeORM', relation: [] },
    { title: 'DrizzleORM', relation: ['staking-app'] },
  ],
};
