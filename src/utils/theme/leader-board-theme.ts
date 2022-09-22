import { createTheme } from '@mui/material';
import { LEADER_BOARD_COLORS } from '../constans/leader-board-colors';

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
    },
    palette: {
        primary: { main: LEADER_BOARD_COLORS.mainBlue },
        secondary: { main: LEADER_BOARD_COLORS.mainOrange }
    }
});
