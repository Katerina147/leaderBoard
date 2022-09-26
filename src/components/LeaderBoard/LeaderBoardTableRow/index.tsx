import { FC } from 'react';
import { TableRow } from '@mui/material';
import { makeStyles } from '@mui/styles';
import avatarMan from 'assets/avatars/avatarMan.png';
import { CustomAvatar, CustomButtonIcon, CustomTableCell } from 'shared';
import { ReactComponent as EditIcon } from 'assets/icons/EditIcon.svg';
import { ILeaderBoardCell } from 'utils/types/leader-board-types';
import { MUI_TABLE_CELLS_STYLES } from './style';

interface LeaderBoardTableRowProps {
    data: ILeaderBoardCell;
}

const useStyles = makeStyles(MUI_TABLE_CELLS_STYLES);

export const LeaderBoardTableRow: FC<LeaderBoardTableRowProps> = ({ data }) => {
    const classes = useStyles();

    return (
        <TableRow className={classes.customTableRow}>
            <CustomTableCell value="1st" className={classes.placeCell} />
            <CustomTableCell>
                <CustomAvatar src={avatarMan} />
            </CustomTableCell>
            <CustomTableCell className={classes.scoreCell} value={data.score} />
            <CustomTableCell className={classes.nameCell} value={data.name} />
            <CustomTableCell value="No change" />
            <CustomTableCell className={classes.editCell}>
                <CustomButtonIcon icon={<EditIcon />} />
            </CustomTableCell>
        </TableRow>
    );
};
