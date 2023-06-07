import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#7E22CE',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    minWidth: '0',
                    borderRadius: '6px',
                },
            },
        },
    }
})