import { format } from 'date-fns';
import type { Project as ProjectType } from '@/constants/work-history';
import { cn } from '@/lib/utils';

export const Project = ({
  project,
  className,
}: {
  project: ProjectType;
  className?: string;
}) => {
  return (
    <div
      data-id={project.id}
      key={project.projectName}
      className={cn('flex mb-4 flex-col gap-2 border-l p-4', className)}
    >
      <h5 className="font-semibold text-lg text-neutral-200">
        {project.jobTitle}{' '}
      </h5>
      <span className="font-normal text-neutral-300">
        {project.location}

        {project.startDate && (
          <span>
            {' | '}
            {format(project.startDate, 'LLLL, yyyy')} -{' '}
            {project.endDate
              ? format(project.endDate, 'LLLL, yyyy')
              : 'Present'}
          </span>
        )}
      </span>
      <div>Project: {project.projectName}</div>
      <div>Domain: {project.domain}</div>
      <div>Description: {project.description}</div>
      {project.sourceCodeLink && (
        <div>Source Code: {project.sourceCodeLink}</div>
      )}
      {project.projectLinks && (
        <div>
          Project Links:{' '}
          {project.projectLinks.map((link, i) => (
            <a
              href={link}
              target="_blank"
              className="underline cursor-pointer text-blue-600 mr-2"
              key={link}
              rel="noreferrer"
            >
              Link {i + 1}
            </a>
          ))}
        </div>
      )}
      <div>
        <h5 className="mb-2">Technologies: </h5>
        <ul className="list-disc flex gap-4 flex-wrap">
          {project.technologies.map((el) => (
            <li
              className="ml-8 text-orange-300 hover:underline cursor-pointer"
              key={el}
            >
              {el}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="mb-2">Achievements: </h4>
        <ul className="list-disc flex flex-col gap-2 flex-wrap">
          {project.achievements.map((el) => (
            <li className="ml-8 text-purple-300" key={el}>
              {el}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
