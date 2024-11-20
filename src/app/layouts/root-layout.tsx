import { Outlet } from 'react-router-dom';

import { Navbar } from '@/components/navbar';
import { ContactMe } from '@/features/home/contact-me';

export default function RootLayout() {
  return (
    <div className="max-w-[1100px] mx-auto">
      <Navbar />
      <div className="w-full px-8">
        <Outlet />
      </div>
      <ContactMe />
    </div>
  );
}
