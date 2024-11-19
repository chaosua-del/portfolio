import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProgressProps {
  values: Array<{
    title: string;
    active: boolean;
  }>;
  className?: string;
}

export const Progress = ({ values, className }: ProgressProps) => {
  return (
    <div
      className={cn(
        `w-full grid md:grid-flow-col sm:grid-flow-row md:gap-0 gap-2`,
        className,
      )}
    >
      {values.map(({ title, active }) => (
        <div className="flex flex-col" key={title}>
          <span className="text-success mb-2">{title}</span>
          {active ? (
            <div className="flex items-center">
              <div className="rounded-full size-6 bg-success flex items-center justify-center">
                <Check color="white" size={15} />
              </div>
              <div className="h-1 flex-grow bg-success" />
            </div>
          ) : (
            <div className="flex items-center">
              <div className="rounded-full size-6 border-4 border-lightGray  flex items-center justify-center">
                <div className="size-2 bg-success rounded-full" />
              </div>
              <div className="h-1 flex-grow bg-lightGray" />
            </div>
          )}
          <div />
        </div>
      ))}
    </div>
  );
};
