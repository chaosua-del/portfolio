import { cn } from '@/lib/utils';

interface DividerProps {
  className?: string;
  variant?: 'horizontal' | 'vertical';
}

export const Divider = ({ className, variant = 'vertical' }: DividerProps) => {
  const classes = cn(
    'bg-lightGray',
    variant === 'horizontal' && `w-4 h-[1.5px]`,
    variant === 'vertical' && `w-[1.5px] h-4`,
    className,
  );

  return <div className={classes} />;
};
