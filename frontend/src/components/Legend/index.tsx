import statusColors from "@/constants/status";
import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";

const Legend = () => {
    const { t } = useTranslation();

    return (
        <Grid container spacing={2} sx={{ paddingBottom: '16px', paddingTop: '16px' }}>
            <Grid item md={4} sm={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ marginRight: '8px', width: '36px', height: '24px', border: '1px solid #ccc', background: statusColors['new'] }}></div>
                <span>{t('newStatus')}</span>
            </Grid>
            <Grid item md={4} sm={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ marginRight: '8px', width: '36px', height: '24px', border: '1px solid #ccc', background: statusColors['work'] }}></div>
                <span>{t('workStatus')}</span>
            </Grid>
            <Grid item md={4} sm={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ marginRight: '8px', width: '36px', height: '24px', border: '1px solid #ccc', background: statusColors['end'] }}></div>
                <span>{t('endStatus')}</span>
            </Grid>
        </Grid>
    )
}

export default Legend;