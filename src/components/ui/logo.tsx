import type { LinkProps } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LogoIcon from '@/assets/logo.svg';
import { cn } from '@/lib/utils';
import { getHomePath } from '@/constants/router-paths';

interface LogoProps extends Omit<LinkProps, 'to'> {
  className?: string;
}

export const Logo = ({ className, ...props }: LogoProps) => {
  return (
    <Link
      {...props}
      to={getHomePath()}
      className={cn('flex items-center uppercase 3xl:text-xl gap-2', className)}
    >
      <img
        src={LogoIcon}
        className="mx-auto size-12 object-contain object-center"
      />
      <strong className="animate-logo-animation opacity-0 block sm:hidden lg:block">
        Stake bank
      </strong>
    </Link>
  );
};
