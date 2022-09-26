import { ChangeEvent, FC } from 'react';
import { TextField } from '@mui/material';

interface CustomInputProps {
    onChange: (
        event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => void;
    value: string | number;
    className?: string;
}

export const CustomInput: FC<CustomInputProps> = ({
    className,
    value,
    onChange
}) => <TextField className={className} value={value} onChange={onChange} />;
