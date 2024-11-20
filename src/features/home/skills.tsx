import {
  differenceInDays,
  differenceInMonths,
  differenceInYears,
  parse,
} from 'date-fns';
import { Divider } from '@/components/ui/divider';
import { skills } from '@/constants/skills';
import {
  allProjects,
  type Project as ProjectType,
} from '@/constants/work-history';
import { Button } from '@/components/ui/button';

function formatDateDifference(dateString: string) {
  const startDate = parse(dateString, 'yyyy-MM-dd', new Date());
  const endDate = new Date();

  const years = differenceInYears(endDate, startDate);
  const months = differenceInMonths(endDate, startDate) - years * 12;

  const parts = [];
  if (years > 0) parts.push(`${years} year${years > 1 ? 's' : ''}`);
  if (months > 0) parts.push(`${months} month${months > 1 ? 's' : ''}`);

  return parts.join(', ');
}

interface Props {
  setRelatedProjects: (projects: ProjectType[]) => void;
  openRelatedProjectsDialog: VoidFunction;
}

export const Skills = ({
  openRelatedProjectsDialog,
  setRelatedProjects,
}: Props) => {
  const handleRelatedProjectsClick = (relatedProjects?: string[]) => {
    if (relatedProjects) {
      setRelatedProjects(
        allProjects.filter(
          (project) =>
            relatedProjects.includes('all') ||
            relatedProjects.includes(project.id),
        ),
      );
    } else {
      setRelatedProjects([]);
    }
    openRelatedProjectsDialog();
  };

  return (
    <div id="skills" className="mt-10">
      <div className="mb-5">
        <h2 className="font-semibold text-2xl mb-1">Main Skills</h2>
        <p className="text-neutral-400 text-sm">
          Click on the skill to see related projects
        </p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 w-full">
        {skills
          .sort((a, b) => differenceInDays(a.startDate, b.startDate))
          .map((item) => (
            <div key={item.title}>
              <Button
                variant="ghost"
                className="flex gap-2 items-center text-left h-auto py-2 px-4"
                onClick={() => handleRelatedProjectsClick(item.relatedProjects)}
              >
                <img className="size-8" src={`/assets/icons/${item.icon}`} />
                <div className="text-sm">
                  <span>{item.title}</span>
                  <Divider variant="horizontal" className="w-full" />
                  <span>{formatDateDifference(item.startDate)}</span>
                </div>
              </Button>
            </div>
          ))}
      </div>
    </div>
  );
};
