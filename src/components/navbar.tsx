import useDetectScroll, {
  Axis,
  Direction,
} from '@smakss/react-scroll-direction';
import { useEffect, useRef, useState } from 'react';
import { Menu } from 'lucide-react';
import { useMediaQuery } from '@react-hook/media-query';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from './ui/sheet';
import { ContactMe } from '@/features/home/contact-me';

const links = [
  {
    title: 'About me',
    href: '#about-me',
  },
  {
    title: 'Skills',
    href: '#skills',
  },
  {
    title: 'Work history',
    href: '#work-history',
  },
  {
    title: 'Other Skills',
    href: '#other-skills',
  },
  {
    title: 'Contact & Other Info',
    href: '#other-info',
  },
];

export const Navbar = () => {
  const { scrollDir } = useDetectScroll({
    axis: Axis.Y,
    thr: 50,
  });

  const navbarRef = useRef<HTMLDivElement>(null);

  const [sheetOpen, setSheetOpen] = useState(false);

  const [navbarPosition, setNavbarPosition] = useState(0);

  const matches = useMediaQuery('only screen and (min-width: 768px)');

  useEffect(() => {
    if (matches) {
      setSheetOpen(false);
    }
  }, [matches]);

  useEffect(() => {
    const hideNavbar = scrollDir === Direction.Down && navbarRef.current;

    if (hideNavbar && navbarRef.current) {
      setNavbarPosition(-navbarRef.current.clientHeight);
    } else {
      setNavbarPosition(0);
    }
  }, [scrollDir]);

  return (
    <nav
      ref={navbarRef}
      style={{
        top: navbarPosition,
      }}
      className="max-w-[1100px] transition-all w-full flex items-center px-6 bg-neutral-900 text-neutral-500 rounded-b-lg top-0 h-16 sticky"
    >
      <div className="hidden md:flex h-full z-10 w-full mx-auto md:px-20 items-center shadow-md justify-between ">
        {links.map((link) => (
          <button
            type="button"
            key={link.title}
            onClick={() => {
              const element = document.querySelector(link.href);
              if (element) {
                const y =
                  element.getBoundingClientRect().top + window.scrollY - 90;

                window.scrollTo({
                  behavior: 'smooth',
                  top: y,
                });
              }
            }}
            className="hover:text-neutral-50"
          >
            {link.title}
          </button>
        ))}
      </div>
      <div className="flex md:hidden justify-between w-full">
        <button type="button" onClick={() => setSheetOpen(true)}>
          <Menu />
        </button>
        <a href="/" className="text-xl">
          DY
        </a>
      </div>
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle className="text-left">Navigation</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col h-full">
            <ul className="list-disc flex flex-col gap-4 mt-5 text-lg text-left pl-8">
              {links.map((link) => (
                <li
                  key={link.title}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    if (element) {
                      const y =
                        element.getBoundingClientRect().top +
                        window.scrollY -
                        90;

                      window.scrollTo({
                        behavior: 'smooth',
                        top: y,
                      });

                      setSheetOpen(false);
                    }
                  }}
                  className="underline text-left cursor-pointer"
                >
                  {link.title}
                </li>
              ))}
            </ul>
            <ContactMe className="mt-auto mb-5" />
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};
