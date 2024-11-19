import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Input, type InputProps } from './ui/input';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

type PasswordInputProps = Omit<InputProps, 'type'>;

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, ...props }, ref) => {
    const [isVisible, setIsVisible] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle<HTMLInputElement | null, HTMLInputElement | null>(
      ref,
      () => inputRef.current,
    );

    const toggleVisibility = () => {
      setIsVisible((prev) => !prev);
      inputRef.current?.focus();
    };

    const IconComponent = isVisible ? EyeOff : Eye;

    return (
      <div className={cn('relative', className)}>
        <Input
          ref={inputRef}
          type={isVisible ? 'test' : 'password'}
          className="pr-12"
          {...props}
        />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label={isVisible ? 'Hide password' : 'Show password'}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground rounded-full size-8"
          onClick={toggleVisibility}
        >
          <IconComponent className="size-4" />
        </Button>
      </div>
    );
  },
);

PasswordInput.displayName = 'PasswordInput';

export default PasswordInput;
