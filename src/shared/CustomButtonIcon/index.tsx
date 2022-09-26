import { FC, ReactNode } from 'react';
import { Button } from '@mui/material';

interface CustomButtonIconProps {
    icon: ReactNode;
    onClick?: () => void;
    className?: string;
}

export const CustomButtonIcon: FC<CustomButtonIconProps> = ({
    icon,
    onClick,
    className
}) => (
    <Button onClick={onClick} className={className}>
        {icon}
    </Button>
);
