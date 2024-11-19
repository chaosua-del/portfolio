import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface TabLinksProps {
  links: {
    name: string;
    href: string;
  }[];
  linkClassName?: string;
  className?: string;
}

export const TabLinks = ({
  links,
  className,
  linkClassName,
}: TabLinksProps) => {
  return (
    <div
      className={cn(
        'flex bg-gray-100 p-1 rounded-xl min-h-10 w-fit font-semibold text-center flex-wrap',
        className,
      )}
    >
      {links.map((el) => (
        <NavLink
          to={el.href}
          key={el.href}
          className={({ isActive }) =>
            cn(
              'rounded-lg bg-transparent h-full flex items-center justify-center py-2',
              isActive && 'bg-white',
              linkClassName,
            )
          }
        >
          {el.name}
        </NavLink>
      ))}
    </div>
  );
};
