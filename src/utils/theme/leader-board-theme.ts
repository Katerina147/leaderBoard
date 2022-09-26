import { createTheme } from '@mui/material';
import { LEADER_BOARD_STYLES, LEADER_BOARD_COLORS } from 'utils/constans';

export const theme = createTheme({
    typography: {
        fontFamily: 'MontserratRegular'
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: LEADER_BOARD_STYLES.customBorderRadius,
                    fontSize: '13px'
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    borderRadius: LEADER_BOARD_STYLES.customBorderRadius,
                    backgroundColor: 'white',
                    borderColor: 'black'
                }
            }
        },
        MuiAvatar: {
            styleOverrides: {
                root: {
                    borderRadius: LEADER_BOARD_STYLES.customBorderRadius
                }
            }
        }
    },
    palette: {
        primary: {
            main: LEADER_BOARD_COLORS.mainBlue,
            contrastText: LEADER_BOARD_COLORS.mainWhite,
            dark: LEADER_BOARD_COLORS.mainGray,
            light: LEADER_BOARD_COLORS.hoverCellBlue
        },
        secondary: {
            main: LEADER_BOARD_COLORS.mainOrange,
            light: LEADER_BOARD_COLORS.hoverCellOrange
        }
    }
});
