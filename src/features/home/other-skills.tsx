import { useState } from 'react';
import { otherSkills } from '@/constants/skills';
import { Input } from '@/components/ui/input';
import { allProjects, type Project } from '@/constants/work-history';

interface Props {
  setRelatedProjects: (projects: Project[]) => void;
  openRelatedProjectsDialog: VoidFunction;
}

export const OtherSkills = ({
  setRelatedProjects,
  openRelatedProjectsDialog,
}: Props) => {
  const titles = Object.keys(otherSkills);

  const [search, setSearch] = useState('');

  const filteredTitles = search
    ? titles.filter(
        (key) =>
          otherSkills[key].filter((el) =>
            el.title.toLowerCase().includes(search.toLowerCase()),
          ).length > 0,
      )
    : titles;

  const handleRelatedProjectsClick = (relatedProjects: string[]) => {
    setRelatedProjects(
      allProjects.filter(
        (project) =>
          relatedProjects.includes('all') ||
          relatedProjects.includes(project.id),
      ),
    );
    openRelatedProjectsDialog();
  };

  return (
    <div id="other-skills" className="mt-10 min-h-[500px]">
      <div className="flex gap-4 items-center mb-1">
        <h2 className="font-semibold text-2xl">Other Skills</h2>
        <Input
          className="max-w-[200px] no-print"
          value={search}
          placeholder="Search for skills"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <p className="text-neutral-400 mb-6 text-sm no-print">
        Click on the skill to see related projects
      </p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
        {filteredTitles.map((key) => (
          <div key={key}>
            <h4 className="text-neutral-200 mb-2">{key}</h4>
            <ul className="list-disc pl-6 text-neutral-500">
              {otherSkills[key]
                .filter((item) =>
                  item.title.toLocaleLowerCase().includes(search),
                )
                .map((skill) => (
                  <li
                    onClick={() => handleRelatedProjectsClick(skill.relation)}
                    className="hover:underline cursor-pointer"
                    key={skill.title}
                  >
                    {skill.title}
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
