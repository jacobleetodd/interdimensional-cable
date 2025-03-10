import { ThemeOptions } from "@mui/material";

export const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 600,
};

export const typographyTheme: ThemeOptions = {
  typography: {
    fontFamily: ["Helvetica Neue", "Arial", "sans-serif"].join(","),
    fontWeightBold: fontWeights.bold,
    fontWeightLight: fontWeights.light,
    fontWeightMedium: fontWeights.medium,
    fontWeightRegular: fontWeights.regular,
  },
};
