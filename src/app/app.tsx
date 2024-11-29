import ReactGA from 'react-ga';
import AppProvider from './app-provider';
import { env } from '@/utils/env';

ReactGA.initialize(env.VITE_GOOGLE_TRACKING_ID);

export default function App() {
  return <AppProvider />;
}
