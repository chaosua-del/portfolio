import { Button } from '@/components/ui/button';
import { Divider } from '@/components/ui/divider';

export const Hero = () => {
  return (
    <div
      id="about-me"
      className="flex items-center justify-center gap-8 mt-10 flex-wrap md:flex-nowrap"
    >
      <div className="flex flex-col gap-5">
        <div className="flex flex-col text-4xl font-bold w-max gap-1">
          <h1 className="text-xl md:text-3xl">Dmytro Yukhymenko</h1>
          <Divider className="w-full" variant="horizontal" />
          <h1 className="text-xl md:text-2xl">Senior Full Stack Engineer</h1>
        </div>
        <p className="text-neutral-500">
          Senior Fullstack Engineer with over 5 years of commercial experience,
          working predominantly with React, NextJS, and React Native frameworks
          on the front-end and Nest js and Express on the backend. Skilled at
          developing the frontend and backend elements for diverse projects,
          participating in UI/UX developments, and problem-solving. Can
          effectively self-manage during individual projects while also
          excelling in a collaborative team setting
        </p>
        <Button size="lg" className="self-start">
          Let&apos;s Get in Touch
        </Button>
      </div>
      <img
        src="/me.jpg"
        className="-order-1 md:order-1 rounded-full w-[250px] h-[250px] md:w-[350px] md:h-[350px]"
      />
    </div>
  );
};
