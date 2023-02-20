import { Dialog, DialogTitle, List, Typography } from "@mui/material";
import DonateField from './Field';
import { DONATIONS_lIST } from '@/constants/donationList';
import { useTranslation } from "react-i18next";

interface SimpleDialogProps {
    open: boolean;
    onClose: () => void;
}

function SimpleDialog(props: SimpleDialogProps) {
    const { onClose, open } = props;
    const handleClose = () => onClose();
    const { t } = useTranslation();

    return (
        <Dialog onClose={handleClose} open={open}>
            <div style={{height: 20, background: '#0057b7' }}></div>
            <div style={{height: 20, background: '#ffd700' }}></div>
            <DialogTitle>
            <Typography variant='h6' align='center'>
            {t('DonateText')}
            </Typography>
            </DialogTitle>
            <List sx={{ width: '100%'}}>
                {DONATIONS_lIST.map(({ name, value }) => <DonateField key={name} name ={name} value ={value} />)}
            </List>
        </Dialog>
    );
}

export default SimpleDialog