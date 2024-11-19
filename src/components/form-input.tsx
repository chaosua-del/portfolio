import type {
  ControllerProps,
  ControllerRenderProps,
  FieldPath,
  FieldValues,
} from 'react-hook-form';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from './ui/form';
import type { InputProps } from './ui/input';
import { Input } from './ui/input';

type FormControllerProps<
  Values extends FieldValues,
  Path extends FieldPath<Values>,
> = Omit<ControllerProps<Values, Path>, 'render'>;

type FormInputElemProps = Omit<
  InputProps,
  'value' | 'onChange' | 'onBlur' | 'name' | 'disabled'
>;

type FormInputRender<
  Values extends FieldValues,
  Path extends FieldPath<Values>,
> = (field: ControllerRenderProps<Values, Path>) => React.ReactNode;

interface FormInputProps<
  Values extends FieldValues,
  Path extends FieldPath<Values>,
> extends FormControllerProps<Values, Path> {
  label?: string;
  description?: string;
  inputProps?: FormInputElemProps;
  render?: FormInputRender<Values, Path>;
}

export default function FormInput<
  Values extends FieldValues = FieldValues,
  Path extends FieldPath<Values> = FieldPath<Values>,
>({
  label,
  description,
  inputProps,
  render,
  ...formFieldProps
}: FormInputProps<Values, Path>) {
  return (
    <FormField
      {...formFieldProps}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            {render ? render(field) : <Input {...inputProps} {...field} />}
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
