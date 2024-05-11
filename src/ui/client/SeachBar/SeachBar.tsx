import { Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

import { SearchIcon } from "@/assets";

import type { SeachBarProps } from "./SeachBar.types";

export const SeachBar = ({
  placeholder,
  value,
  handleChange,
  ...props
}: SeachBarProps) => {
  return (
    <InputGroup boxShadow="dark.small" borderRadius="12px" height="56px">
      <InputLeftElement pointerEvents="none" height="100%">
        <Icon
          width="15px"
          height="15px"
          color="secondary.text"
          as={SearchIcon}
        />
      </InputLeftElement>
      <Input
        height="100%"
        focusBorderColor="lightGray"
        _focus={{ border: "none" }}
        border="none"
        placeholder={placeholder}
        color="primary.text"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
    </InputGroup>
  );
};
