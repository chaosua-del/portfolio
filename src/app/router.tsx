import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './layouts/root-layout';
import { HomePage } from '@/features/home/home-page';

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
]);
