import { ThemeOptions } from "@mui/material";
import { paletteTheme } from "../general/palette.theme";

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
