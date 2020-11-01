import { createMuiTheme } from "@material-ui/core/styles";

export enum Colors {
    primaryText = "#5f6368",
    primary = "#ffffff",
    secondary = "#feefc3",
    border = "#DADCE0",
    lightGrey = "#F1F3F4",
}

export enum FontSize {
    heading = "22px",
    label = "16px",
    body = "14px",
}

export const theme = createMuiTheme({
    palette: {
        text: {
            primary: Colors.primaryText,
        },
        primary: {
            main: Colors.primary,
            
        },
        secondary: {
            main: Colors.secondary,
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
        }
    }
    
    
})