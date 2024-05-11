import { InputGroupProps } from "@chakra-ui/react";

export interface SeachBarProps extends InputGroupProps {
  placeholder: string;
  value: string;
  handleChange: (value: string) => void;
}
