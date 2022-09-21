import { FC, ReactNode } from 'react'
import { TableCell } from '@mui/material'

interface CustomTableCellProps {
    value: string
    className?: string
    children?: ReactNode
}

export const CustomTableCell: FC<CustomTableCellProps> = ({
    value,
    className,
    children,
}) => <TableCell className={className}> {value || children} </TableCell>
