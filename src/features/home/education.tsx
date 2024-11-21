import { MapPin, School } from 'lucide-react';

export const Education = () => {
  return (
    <div id="other-info">
      <div className="flex gap-4 items-center mb-4">
        <h2 className="font-semibold text-2xl">Contact & Other Info</h2>
      </div>
      <div className="flex flex-col gap-4 text-neutral-300">
        <div className="flex items-center gap-3">
          <MapPin />
          <span className="hover:underline">Warsaw, Mazowieckie. Poland</span>
        </div>
        <div className="flex items-center gap-3">
          <School />
          <span className="hover:underline">
            Bachelor of Computer Engineering Lviv Polytechnic University, <br />
            Department of Automation And Computer-Integrated Technologies,{' '}
            <br />
            Ukraine, Lviv June 2017 - June 2021
          </span>
        </div>
        <div className="flex gap-3 flex-col text-left">
          <span className="hover:underline">Citizenship: Ukrainian</span>
          <span className="hover:underline">
            Elligible to work in Poland and other EU countries
          </span>
        </div>
      </div>
    </div>
  );
};
