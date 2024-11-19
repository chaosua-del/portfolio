/* eslint-disable react-refresh/only-export-components */
import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-lg border px-2 py-0.5 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive/10 text-destructive hover:bg-destructive/20',
        success:
          'border-transparent bg-success/10 text-success hover:bg-success/20',
        warn: 'border-transparent bg-warn/10 text-warn hover:bg-warn/20',
        outline: 'text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  text: string;
}

function Badge({ className, variant, text, ...props }: BadgeProps) {
  const { t } = useTranslation('', { keyPrefix: 'common.badgeStatus' });

  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      <span>{t(text)}</span>
    </div>
  );
}

export { Badge, badgeVariants };
