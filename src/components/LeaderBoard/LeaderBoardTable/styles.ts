import { LEADER_BOARD_STYLES } from 'utils/constans';
import { theme } from 'utils/theme/leader-board-theme';

export const MUI_TABLE_STYLES = {
    boxWrapper: {
        backgroundColor: theme.palette.primary.dark,
        borderRadius: LEADER_BOARD_STYLES.customBorderRadius,
        padding: '20px'
    },
    tableHeaderButtons: {
        padding: '20px'
    },
    addUsersButton: {
        '&.MuiButton-root': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            padding: LEADER_BOARD_STYLES.customButtonPadding,
            fontSize: '10px',
            margin: '5px',
            '&:hover': {
                backgroundColor: theme.palette.primary.light
            }
        }
    },
    newDayButton: {
        '&.MuiButton-root': {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.primary.contrastText,
            padding: LEADER_BOARD_STYLES.customButtonPadding,
            fontSize: '10px',
            '&:hover': {
                backgroundColor: theme.palette.secondary.light
            }
        }
    },
    customTable: {
        '&.MuiTable-root': {
            borderCollapse: 'separate',
            borderSpacing: '0 10px',
            border: 'transparent'
        }
    }
};
