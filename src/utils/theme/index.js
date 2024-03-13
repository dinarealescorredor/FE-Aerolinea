import { createTheme } from "@mui/material";
import typography from "./typography.js";

const theme = createTheme({
    palette: {
        primary: {
            main: "#1b1b1b",
        },
        background: {
            default: "#fafafa",
        },
        text: {
            secondary: "#1b1b1b",
        },
    },
    typography,
})

export default theme;