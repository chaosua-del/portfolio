import { differenceInMonths, differenceInYears } from 'date-fns';
import { Project } from './components/project';
import type { Project as ProjectType } from '@/constants/work-history';
import { workHistory } from '@/constants/work-history';

const getEmployementPeriod = (projects: ProjectType[]) => {
  const startDate = projects[projects.length - 1].startDate;
  const endDate = projects[0].endDate || new Date();

  if (!startDate) {
    return '';
  }

  const years = differenceInYears(endDate, startDate);
  const months = differenceInMonths(endDate, startDate) - years * 12;

  const parts = [];
  if (years > 0) parts.push(`${years} year${years > 1 ? 's' : ''}`);
  if (months > 0) parts.push(`${months} month${months > 1 ? 's' : ''}`);

  return `(${parts.join(', ')})`;
};

export const WorkHistory = () => {
  const titles = Object.keys(workHistory);

  return (
    <div className="mt-10" id="work-history">
      <h2 className="font-semibold mb-6 text-2xl">Employment History</h2>

      <div className="flex flex-col gap-4">
        {titles.map((key) => (
          <div key={key} className="mb-5">
            <h4 className="text-neutral-200 mb-3 text-xl">
              {key} <span>{getEmployementPeriod(workHistory[key])}</span>
            </h4>
            <div className="pl-6 text-neutral-400">
              {workHistory[key].map((project) => (
                <Project project={project} key={project.id} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
