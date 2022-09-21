import { createTheme } from '@mui/material';

export const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '10px'
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    borderRadius: '10px',
                    backgroundColor: 'white',
                    borderColor: 'black'
                }
            }
        },
        MuiAvatar: {
            styleOverrides: {
                root: {
                    borderRadius: '10px'
                }
            }
        }
    }
});
