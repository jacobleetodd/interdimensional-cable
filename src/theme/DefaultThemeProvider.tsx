import { CssBaseline, ThemeProvider } from "@mui/material";
import { FC } from "react";
import { theme } from "./theme";

export const DefaultThemeProvider: FC<React.PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline enableColorScheme />
    {children}
  </ThemeProvider>
);

export default DefaultThemeProvider;
