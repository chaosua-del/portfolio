import { defineStyleConfig } from "@chakra-ui/react";

export const ButtonTheme = defineStyleConfig({
  baseStyle: {
    fontWeight: "bold",
    borderRadius: "12px"
  },

  sizes: {
    xl: {
      minWidth: "none",
      height: "56px",
      paddingX: "24px",
      fontSize: "16px"
    },

    lg: {
      minWidth: "none",
      height: "48px",
      paddingX: "20px",
      fontSize: "16px"
    },

    md: {
      minWidth: "none",
      height: "40px",
      paddingX: "16px",
      fontSize: "14px"
    },

    sm: {
      minWidth: "none",
      height: "32px",
      paddingX: "8px",
      fontSize: "12px",
      borderRadius: "8px"
    }
  },
  variants: {
    primary: {
      bgGradient: "linear(to-r, teal, mintGreen)",
      color: "white",

      _hover: {
        bgGradient: "linear(to-r, lightTeal, lightMintGreen)"
      }
    },

    default: {
      background: "white",
      color: "primary.text",

      _hover: {
        color: "secondary.text"
      }
    },

    outline: {
      background: "transparent",
      color: "primary.text",
      borderColor: "gray",

      _hover: {
        background: "sectionBackground",
        color: "secondary.text",

        _disabled: {
          background: "transparent",
          color: "gray"
        }
      },

      _disabled: {
        background: "transparent",
        color: "gray"
      }
    },

    transparent: {
      background: "transparent",
      color: "primary.text",
      border: "none",

      _hover: {
        color: "secondary.text",

        _disabled: {
          background: "transparent",
          color: "gray"
        }
      },

      _disabled: {
        background: "transparent",
        color: "gray"
      }
    }
  }
});
