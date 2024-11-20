import { useState } from 'react';
import { Hero } from './hero';
import { OtherSkills } from './other-skills';
import { RelatedProjectsDialog } from './related-projects-dialog';
import { Skills } from './skills';
import { WorkHistory } from './work-history';
import { Languages } from './languages';
import { Education } from './education';
import type { Project } from '@/constants/work-history';

export const HomePage = () => {
  const [relatedProjectsDialogOpen, setRelatedProjectsDialogOpen] =
    useState(false);
  const [relatedProjects, setRelatedProjects] = useState<Project[]>([]);

  const handleSetRelatedProjects = (projects: Project[]) => {
    setRelatedProjects(projects);
  };

  return (
    <div className="flex flex-col gap-8">
      <Hero />
      <Languages />
      <Skills
        setRelatedProjects={handleSetRelatedProjects}
        openRelatedProjectsDialog={() => setRelatedProjectsDialogOpen(true)}
      />
      <WorkHistory />
      <OtherSkills
        setRelatedProjects={handleSetRelatedProjects}
        openRelatedProjectsDialog={() => setRelatedProjectsDialogOpen(true)}
      />
      <RelatedProjectsDialog
        open={relatedProjectsDialogOpen}
        onOpenChange={setRelatedProjectsDialogOpen}
        relatedProjects={relatedProjects}
      />
      <Education />
    </div>
  );
};
