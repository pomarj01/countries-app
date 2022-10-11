import { extendTheme } from "@chakra-ui/react";

const theme = {
  colors: {
    dark_mode_darkBlue_elements: "hsl(209, 23%, 22%)",
    dark_mode_veryDarkBlue_background: "hsl(207, 26%, 17%)",
    light_mode_veryDarkBlue_text: "hsl(200, 15%, 8%)",
    light_mode_darkGray_input: "hsl(0, 0%, 52%)",
    light_mode_veryLightGray_background: "hsl(0, 0%, 98%)",
    white_elements: "hsl(0, 0%, 100%)",
  },
};

const defaultTheme = extendTheme(theme);

export { theme, defaultTheme };
