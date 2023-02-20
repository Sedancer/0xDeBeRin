const defaultLanguage = 'en';

export default function getLanguage() {
    const { pathname } = window.location;
    // console.log('pathname', pathname);
    if( pathname === '/en') return defaultLanguage;
    if( pathname === '/ua') return 'ua';
    return defaultLanguage;
}