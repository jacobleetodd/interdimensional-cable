import { createTheme, ThemeOptions } from "@mui/material";
import { muiButtonTheme } from "./components/muiButton.theme";
import { paletteTheme } from "./general/palette.theme";
import { typographyTheme } from "./general/typography.theme";

export const themeOptions: ThemeOptions[] = [muiButtonTheme, paletteTheme, typographyTheme];
export const theme = createTheme(...themeOptions);
