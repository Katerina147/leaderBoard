import { FC } from 'react';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle
} from '@mui/material';

interface CustomModalProps {
    openModal: boolean;
    onHide: () => void;
    title: string;
    content: string;
}

export const CustomModal: FC<CustomModalProps> = ({
    openModal,
    onHide,
    title,
    content
}) => {
    return (
        <Dialog open={openModal} onClose={onHide}>
            <DialogTitle id="draggable-dialog-title">{title}</DialogTitle>
            <DialogContent>{content}</DialogContent>
            <DialogActions />
        </Dialog>
    );
};
