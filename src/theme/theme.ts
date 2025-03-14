import { createTheme, ThemeOptions } from "@mui/material";
import { muiButtonTheme } from "./components/muiButton.theme";
import { muiTextFieldTheme } from "./components/muiTextField.theme";
import { paletteTheme } from "./general/palette.theme";
import { typographyTheme } from "./general/typography.theme";

export const themeOptions: ThemeOptions[] = [muiButtonTheme, muiTextFieldTheme, paletteTheme, typographyTheme];
export const theme = createTheme(...themeOptions);
