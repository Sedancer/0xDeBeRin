import { useState } from "react";
import { Box, Select, MenuItem, AppBar } from "@mui/material"
import SimpleDialog from '@/components/SimpleDialog';
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { ReactComponent as Logo } from '@/assets/logoname.svg';
import BtnDonate from '@/components/BtnDonate';

const Header = () => {
    const { language } = useParams();
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleChange = (e: { target: { value: string }; }) => {
        return navigate('/' + e.target.value)
    };

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <AppBar sx={{
            height: '60px',
            background: '#fff',
            padding: '0 8px'
        }}
            position="fixed">
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{
                    margin: '0 auto 0 10px'
                }}>
                    <Logo width={140} height={50} />
                </div>
                <Select
                    sx={{ height: '40px', margin: '10px' }}
                    value={language}
                    onChange={handleChange}
                >
                    <MenuItem value='en'>
                        {t('English')}
                    </MenuItem>
                    <MenuItem value='ua'>
                        {t('Ukrainian')}
                    </MenuItem>
                </Select>
                <BtnDonate
                    onClick={handleClickOpen}
                    text={t('Donate')}
                />
                <SimpleDialog
                    open={open}
                    onClose={handleClose}
                />
            </Box>
        </AppBar>)
}

export default Header