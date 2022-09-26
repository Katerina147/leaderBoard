import { FC, ReactNode } from 'react';
import clsx from 'clsx';
import { TableCell } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { MUI_TABLE_CELL_STYLES } from './style';

interface CustomTableCellProps {
    value?: string | number;
    className?: string;
    children?: ReactNode;
}
const useStyles = makeStyles(MUI_TABLE_CELL_STYLES);

export const CustomTableCell: FC<CustomTableCellProps> = ({
    value,
    className,
    children
}) => {
    const classes = useStyles();
    return (
        <TableCell
            className={clsx(classes.customTableCell, className && className)}
        >
            {value || children}
        </TableCell>
    );
};
