import type { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { FormDescription, FormItem, FormLabel } from './ui/form';

interface Props extends PropsWithChildren {
  label: string;
  isOptional?: boolean;
  error?: string;
}

export default function FormGroup({
  label,
  children,
  isOptional,
  error,
}: Props) {
  const { t } = useTranslation('', { keyPrefix: 'common' });

  return (
    <FormItem>
      <FormLabel>
        {label}{' '}
        <span className="text-gray-300">
          {isOptional ? `(${t('optional')})` : ''}
        </span>
      </FormLabel>

      {children}

      {error && (
        <FormDescription className="text-xs text-red-500">
          {error}
        </FormDescription>
      )}
    </FormItem>
  );
}
