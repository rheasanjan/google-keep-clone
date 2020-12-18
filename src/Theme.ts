import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeTypes } from "./types";

export enum LightTheme {
  PrimaryText = "#5f6368",
  Primary = "#ffffff",
  Secondary = "#feefc3",
  Border = "#DADCE0",
  TextboxBackground = "#F1F3F4",
  Icons = "#757575",
  NoteShadow = "#C0C1C2",
  NoteBorder = "#E0E0E0",
}

export enum DarkTheme {
  PrimaryText = "#E3E3E3",
  Primary = "#202124",
  Border = "#5F6368",
  Secondary = "#41331C",
  TextboxBackground = "#535456",
  Icons = "#98989A",
  NoteBorder = "#5F6368",
}

export enum FontSize {
  Heading = "22px",
  Label = "16px",
  Body = "14px",
}

export const setTheme = (type: ThemeTypes) =>
  createMuiTheme({
    palette: {
      type,
      text: {
        primary:
          type === ThemeTypes.Light
            ? LightTheme.PrimaryText
            : DarkTheme.PrimaryText,
      },
      primary: {
        main:
          type === ThemeTypes.Light ? LightTheme.Primary : DarkTheme.primary,
      },
      secondary: {
        main: LightTheme.Secondary,
      },
      background: {
        default:
          type === ThemeTypes.Light ? LightTheme.Primary : DarkTheme.primary,
      },
    },

    typography: {
      h2: {
        fontSize: FontSize.Heading,
      },
      h3: {
        fontSize: FontSize.Label,
        fontWeight: 500,
      },
      body1: {
        fontSize: FontSize.Body,
        fontWeight: 400,
      },
    },
  });
