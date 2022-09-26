import { theme } from 'utils/theme/leader-board-theme';

export const MUI_HEADER_STYLES = {
    customHeaders: {
        fontFamily: 'MontserratSemiBold',
        fontSize: '22px'
    },
    boxWrapper: {
        backgroundColor: theme.palette.primary.main,
        padding: '5px',
        borderRadius: '10px',
        height: '180px',
        margin: '20px auto 36px',
        paddingTop: '10px',
        color: theme.palette.primary.contrastText
    },
    spanWrapper: {
        color: theme.palette.secondary.main,
        padding: '5px'
    },
    headerImage: {
        margin: '-40px 0 0 150px'
    }
};
