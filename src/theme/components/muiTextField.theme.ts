import { ThemeOptions } from "@mui/material";

export const muiTextFieldTheme: ThemeOptions = {
  components: {
    MuiTextField: {
      defaultProps: {
        size: "small",
      },
    },
  },
};
