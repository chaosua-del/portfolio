import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { ButtonProps } from './ui/button';
import { Button } from './ui/button';

interface TimerButtonProps extends ButtonProps {
  initialCount?: number;
  onClick?: VoidFunction;
}

export const TimerButton = ({
  initialCount = 30,
  onClick,
  ...props
}: TimerButtonProps) => {
  const [count, setCount] = useState(initialCount);
  const [disabled, setDisabled] = useState(true);

  const intervalRef = useRef<NodeJS.Timeout>();

  const { t } = useTranslation('', { keyPrefix: 'common' });

  const handleClick = () => {
    setCount(initialCount);
    setDisabled(true);
    onClick?.();
  };

  useEffect(() => {
    if (count <= 0) {
      setDisabled(false);
      setCount(initialCount);
      clearInterval(intervalRef.current);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  useEffect(() => {
    if (disabled) {
      intervalRef.current = setInterval(() => {
        setCount((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [disabled]);

  return (
    <Button
      className="mt-auto w-full"
      disabled={disabled}
      onClick={handleClick}
      {...props}
    >
      {t('resend')}
      {disabled ? ` (${count})` : ''}
    </Button>
  );
};
