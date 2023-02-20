import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import ControlledAccordions from "@/components/FAQ";
import Header from "@/containers/Header";
import EnhancedTable from "@/containers/Main";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store';
import { getExchanges } from '@/store/exchange';
import { getCoins } from '@/store/coins';
import Footer from "@/containers/Footer";

export default function Page() {
  const dispatch = useDispatch<AppDispatch>();
  const { language } = useParams();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  
  useEffect(() => {
    dispatch(getCoins());
    dispatch(getExchanges());
  }, [language]);

  useEffect(
    () => {
      if (language !== 'ua' && language !== 'en') {
        return navigate("/en")
      }
      if (language === 'ua') {
        i18n.changeLanguage('uk');
      }
      if (language === 'en') {
        i18n.changeLanguage('en');
      }
    },
    [language]
  )

  const lang = language === 'ua' ? 'uk' : 'en';
  const content = t('descriptionPage');
  return (
    <div className="App">
      <Helmet>
        <html lang={lang} />
        <title>{t('titlePage')}</title>
        <meta name="description" content={content} />
      </Helmet>
      <Header />
      <EnhancedTable />
      <ControlledAccordions />
      <Footer />
    </div>
  );
}