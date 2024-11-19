import { ChevronDown, ChevronUp } from 'lucide-react';
import type { Column } from '@tanstack/react-table';
import { Button } from './button';

interface TableSortingHeaderProps<TData> {
  column: Column<TData, unknown>;
  title: string;
}

export default function TableSortingHeader<TData>({
  title,
  column,
}: TableSortingHeaderProps<TData>) {
  const isSorted = column.getIsSorted();

  let Icon = undefined;

  if (isSorted === 'desc') {
    Icon = ChevronUp;
  } else if (isSorted === 'asc') {
    Icon = ChevronDown;
  }

  return (
    <div className="3xl:px-1.5">
      <Button
        variant="ghost"
        onClick={column.getToggleSortingHandler()}
        className="text-black [font-size:inherit] [font-weight:inherit]"
        size="sm"
      >
        {title}
        {Icon && <Icon className="size-4 ml-2" />}
      </Button>
    </div>
  );
}
