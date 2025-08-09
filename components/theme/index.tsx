import { createTheme, colorsTuple } from "@mantine/core";

export const theme = createTheme({
  fontFamily: "Fredoka, sans-serif",
  headings: {
    fontFamily: "Fredoka, sans-serif",
    fontWeight: "500",
  },
  colors: {
    primary: colorsTuple("#1d6731"),
    accent: colorsTuple("#00cfc0"),
    dark: colorsTuple("#0a0d14"),
    teal: colorsTuple("#00cfc0"),
  },
  primaryColor: "primary",
  white: "#ffffff",
  black: "#0a0d14",
});