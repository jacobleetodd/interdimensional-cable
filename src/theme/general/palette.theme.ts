import { alpha, PaletteColorOptions, ThemeOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    inverted: PaletteColor;
    neutral: PaletteColor;
  }
  interface PaletteColor {
    lighter?: string;
  }

  interface PaletteOptions {
    inverted?: PaletteColorOptions;
    neutral?: PaletteColorOptions;
  }

  interface SimplePaletteColorOptions {
    lighter?: string;
  }
}

export const paletteTheme: ThemeOptions = {
  palette: {
    primary: {
      lighter: alpha("#3B75D1", 0.08),
      light: "#91B3EB",
      main: "#3B75D1",
      dark: "#1E4C94",
    },
    secondary: {
      light: "#60D1D1",
      main: "#0B8484",
      dark: "#045C5C",
    },
    text: {
      disabled: alpha("#000000", 0.26),
    },
    error: {
      light: "#F07D88",
      main: "#D5172A",
      dark: "#990C1B",
    },
    warning: {
      light: "#FDC879",
      main: "#FAA628",
      dark: "#CC6A14",
      contrastText: alpha("#000000", 0.87),
    },
    info: {
      light: "#659CC2",
      main: "#14517A",
      dark: "#093657",
    },
    success: {
      light: "#72D66F",
      main: "#20891C",
      dark: "#10610E",
    },
    inverted: {
      light: "#FFFFFF",
      main: "#FFFFFF",
      dark: "#D9D9D9",
      contrastText: alpha("#000000", 0.87),
    },
    neutral: {
      light: "#939393",
      main: "#4F4F4F",
      dark: "#292929",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#F6F6F6",
    },
  },
};
