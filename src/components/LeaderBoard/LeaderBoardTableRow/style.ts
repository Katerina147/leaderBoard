import { LEADER_BOARD_STYLES } from 'utils/constans';

export const MUI_TABLE_CELLS_STYLES = {
    customTableRow: {
        '&.MuiTableRow-root': {
            border: 'solid 1px #DBDBDB',
            backgroundColor: '#f1f1f1',
            padding: '10px'
        }
    },
    placeCell: {
        '&.MuiTableCell-root': {
            borderTopLeftRadius: LEADER_BOARD_STYLES.customBorderRadius,
            borderBottomLeftRadius: LEADER_BOARD_STYLES.customBorderRadius,
            fontSize: '18px',
            color: '#808080',
            textAlign: 'center'
        }
    },
    nameCell: {
        '&.MuiTableCell-root': {
            textTransform: 'capitalize',
            width: '60%'
        }
    },
    scoreCell: {
        '&.MuiTableCell-root': {
            fontSize: '18px',
            fontFamily: 'MontserratSemiBold',
            textAlign: 'center'
        }
    },
    editCell: {
        '&.MuiTableCell-root': {
            borderTopRightRadius: LEADER_BOARD_STYLES.customBorderRadius,
            borderBottomRightRadius: LEADER_BOARD_STYLES.customBorderRadius,
            textAlign: 'center'
        }
    }
};
