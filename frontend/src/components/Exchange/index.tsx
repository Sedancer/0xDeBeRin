import Binance from './assets/binance.png';
import Huobi from './assets/huobi.png';
import Kraken from './assets/kraken.png';
import Kucoin from './assets/kucoin.png';
import Okx from './assets/okx.png';
import Whitebit from './assets/whitebit.png';
import Bybit from './assets/bybit.png';

type ExchangeProps = {
    exchange: string
}

const Exchange = (props: ExchangeProps) => {
    const { exchange } = props;
    let src;

    if (exchange === 'binance') src = Binance;
    if (exchange === 'huobi') src = Huobi;
    if (exchange === 'kraken') src = Kraken;
    if (exchange === 'kucoin') src = Kucoin;
    if (exchange === 'okx') src = Okx;
    if (exchange === 'whitebit') src = Whitebit;
    if (exchange === 'bybit') src = Bybit;

    return (<span style={{display: 'flex', gap: 8 }}>
        { src && (<img style={{width: '16px', height: '16px'}} src={src} alt={exchange} />)}
        <span>{exchange}</span>
    </span>)
}

export default Exchange;