import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  textStyles: {
    h1: {
      fontSize: ["148px", "172px"],
      fontWeight: "bold",
      lineHeight: "110%",
      letterSpacing: "-2%",
    },
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  semanticTokens: {
    colors: {
      error: "red.500",
      success: "green.500",
      primary: {
        default: "red.500",
        _dark: "red.400",
      },
      secondary: {
        default: "red.800",
        _dark: "red.700",
      },
    },
  },
});

export default theme;
