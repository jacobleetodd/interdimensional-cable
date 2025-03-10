import { alpha, ThemeOptions } from "@mui/material";
import { paletteTheme } from "../general/palette.theme";

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    inverted: true;
    neutral: true;
  }
}

export const muiButtonTheme: ThemeOptions = {
  palette: paletteTheme.palette,
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        variant: "contained",
      },
    },
  },
};
