import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface InfoTooltipProps extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
}

export const InfoTooltip = ({ text, className }: InfoTooltipProps) => {
  return (
    <Tooltip defaultOpen={false}>
      <TooltipTrigger type="button" className={className}>
        <img src="/info.svg" width={15} height={15} />
      </TooltipTrigger>
      <TooltipContent>
        <p className="max-w-[200px]">{text}</p>
      </TooltipContent>
    </Tooltip>
  );
};
