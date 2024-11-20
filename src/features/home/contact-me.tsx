import { Github, Linkedin, Mail, Phone, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

export const ContactMe = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        'w-full bg-neutral-900 p-5 text-neutral-400 mt-10  flex justify-between items-center flex-wrap gap-5',
        className,
      )}
    >
      <div className="flex items-center gap-2">
        <Phone />
        <a
          className="transition-all hover:underline hover:text-white"
          href="tel:+48698052345"
        >
          +48 698 052 345
        </a>
      </div>
      <div className="flex items-center gap-2">
        <Mail />
        <a
          href="mailto:d.yuhymenko@gmail.com"
          className="transition-all hover:underline hover:text-white"
        >
          d.yuhymenko@gmail.com
        </a>
      </div>
      <div className="flex gap-4 items-center">
        <a
          className="border rounded-md p-2 hover:text-white transition-all hover:border-white"
          target="_blank"
          href="https://www.linkedin.com/in/dmytro-yukhymenko-7bb869196/"
          rel="noreferrer"
        >
          <Linkedin />
        </a>
        <a
          className="border rounded-md p-2 hover:text-white transition-all hover:border-white"
          target="_blank"
          href="https://github.com/chaosua-del"
          rel="noreferrer"
        >
          <Github />
        </a>
        <a
          className="border rounded-md p-2 hover:text-white transition-all hover:border-white"
          target="_blank"
          href="https://t.me/DmytroYuhymenko"
          rel="noreferrer"
        >
          <Send />
        </a>
      </div>
    </div>
  );
};
