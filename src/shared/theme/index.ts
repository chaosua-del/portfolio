"use client";

import { extendTheme } from "@chakra-ui/react";

import { breakpoints } from "./breakpoints";
import { colors } from "./colors";
import { components } from "./components";
import { fonts } from "./fonts";
import { shadows } from "./shadows";
import { styles } from "./styles";

export const theme = extendTheme({
  fonts,
  semanticTokens: {
    colors
  },
  components,
  styles,
  shadows,
  breakpoints
});
