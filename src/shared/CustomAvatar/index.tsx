import { FC } from 'react';
import { Avatar } from '@mui/material';

interface CustomAvatarProps {
    className?: string;
    src: string;
}

export const CustomAvatar: FC<CustomAvatarProps> = ({ className, src }) => (
    <Avatar src={src} className={className} />
);
