import { useTranslation } from "react-i18next";
import { ReactComponent as Logo } from '@/assets/logoname.svg';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Grid, styled } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    const { t } = useTranslation();
    const FooterStyle = styled('footer')(
        () => `
        justify-content: space-around;
        margin-top: 24px;
        display: flex;
        font-size: 12px;
        padding: 16px 0 16px 0;
        border-top: 1px solid #ccc;
        flex-wrap: wrap;
      `
    );

    const WrapLink = styled('div')(
        () => `
        display: flex;
        gap: 8px;
        padding: 0 16px;
        align-items: center;
        justify-content: center;
        height: 40px;
        flex-wrap: wrap;
      `
    );

    const AStyle = styled('a')(
        () => `
        display: flex;
        color: #3861fb;
        gap: 4px;
        height: 40px;
        align-items: center;
      `
    );


    return (
        <FooterStyle>
            <Logo width={80} height={40} />
            <WrapLink>
                <span>{t('Questions and suggestions')} :</span>
                <AStyle href="https://twitter.com/0xDeberin" target="_blank">
                    <TwitterIcon fontSize="small" /> 0xDeberin
                </AStyle>
            </WrapLink>
            <WrapLink>{t('Site development')}:
                <AStyle href="https://www.linkedin.com/in/serhii-barannik/" target="_blank">
                    <LinkedInIcon fontSize="small" /> Serhii Barannik
                </AStyle>
            </WrapLink>
            <WrapLink>
                {t('devOps')}:
                <AStyle href="https://www.linkedin.com/in/grigoriy-yurasov-110a63b3" target="_blank">
                    <LinkedInIcon fontSize="small" /> Grigoriy Yurasov
                </AStyle>
            </WrapLink>
        </FooterStyle>)
}

export default Footer