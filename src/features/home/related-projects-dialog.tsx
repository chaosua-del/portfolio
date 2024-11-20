import { Project } from './components/project';
import { Alert } from '@/components/ui/alert';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import type { Project as ProjectType } from '@/constants/work-history';

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  relatedProjects: ProjectType[];
}

export const RelatedProjectsDialog = ({
  onOpenChange,
  open,
  relatedProjects,
}: Props) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="my-5 w-[1000px] max-w-full">
        <DialogHeader>
          <DialogTitle>Related Projects</DialogTitle>
        </DialogHeader>
        {!relatedProjects.length && open && (
          <Alert className="mt-5 block bg-neutral-300">
            No related Projects. I Just know it!
          </Alert>
        )}
        <div className="flex flex-wrap gap-4 mt-3">
          {relatedProjects.map((project) => (
            <Project
              className="border-l-0 border-b pb-8 w-full"
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};
