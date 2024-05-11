/* eslint-disable @typescript-eslint/unbound-method */

import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = definePartsStyle({
  field: {
    borderRadius: "12px",
    fontWeight: "normal",
    fontSize: "14px",
    color: "primary.text",
    caretColor: "#15C0AC",

    _placeholder: {
      color: "darkGray.300"
    },

    _invalid: {
      caretColor: "#EE3148"
    }
  },
  element: {
    height: "100%"
  }
});

const variantOutline = definePartsStyle({
  field: {
    bg: "transparent",
    borderColor: "gray",

    _focus: {
      borderColor: "tealGreen",
      boxShadow: "0px 0px 0px 3px rgba(21, 192, 172, 0.20)"
    },

    _invalid: {
      borderColor: "red",
      boxShadow: "none",

      _hover: {
        borderColor: "red"
      },

      _focus: {
        borderColor: "red",
        boxShadow: "0px 0px 0px 3px rgba(239, 47, 50, 0.20)"
      },

      _disabled: {
        borderColor: "gray"
      }
    },

    _disabled: {
      bg: "sectionBackground",
      opacity: 1,
      color: "darkGray.200",

      _hover: {
        borderColor: "gray"
      }
    }
  }
});

export const InputTheme = defineMultiStyleConfig({
  baseStyle,
  variants: {
    outline: variantOutline
  },
  sizes: {
    lg: {
      field: {
        height: "48px",
        paddingX: "16px"
      }
    },
    md: {
      field: {
        height: "40px",
        paddingX: "12px"
      }
    }
  },
  defaultProps: {
    variant: "outline"
  }
});
