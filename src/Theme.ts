import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeTypes } from "./types";

export enum LightTheme {
  primaryText = "#5f6368",
  primary = "#ffffff",
  secondary = "#feefc3",
  border = "#DADCE0",
  textboxBackground = "#F1F3F4",
  icons = "#757575",
  noteShadow = "#C0C1C2",
  noteBorder = "#E0E0E0",
}

export enum DarkTheme {
  primaryText = "#E3E3E3",
  primary = "#202124",
  border = "#5F6368",
  secondary = "#41331C",
  textboxBackground = "#535456",
  icons = "#98989A",
  noteBorder = "#5F6368",
}

export enum FontSize {
  heading = "22px",
  label = "16px",
  body = "14px",
}

export const setTheme = (type: ThemeTypes) =>
  createMuiTheme({
    palette: {
      type,
      text: {
        primary:
          type === ThemeTypes.light
            ? LightTheme.primaryText
            : DarkTheme.primaryText,
      },
      primary: {
        main:
          type === ThemeTypes.light ? LightTheme.primary : DarkTheme.primary,
      },
      secondary: {
        main: LightTheme.secondary,
      },
      background: {
        default:
          type === ThemeTypes.light ? LightTheme.primary : DarkTheme.primary,
      },
    },

    typography: {
      h2: {
        fontSize: FontSize.heading,
      },
      h3: {
        fontSize: FontSize.label,
        fontWeight: 500,
      },
      body1: {
        fontSize: FontSize.body,
        fontWeight: 400,
      },
    },
  });
