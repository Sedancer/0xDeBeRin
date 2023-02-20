import axiosApiInstance from './setting';
import getStorageLanguage from '@/utils/getLang';

const returnQ = (text: string, arr: []) => {
  if (arr.length === 0) return ''
  const str = arr.join(text);
  return text + str;
}

const API = {
  fetchPath: (arg: {
    page: number;
    rowsPerPage: number;
    orderBy: string;
    order: string;
    coins?: [];
    exchanges?: [];
  }) => {
    const {
      page,
      rowsPerPage,
      orderBy,
      order,
      coins = [],
      exchanges = []
    } = arg;
    const strExchange = returnQ('&exchange[]=', exchanges);
    const strCoin = returnQ('&isset_coin[]=', coins);
    return axiosApiInstance.get(
      `/path?pagination[page]=${page + 1}&pagination[onpage]=${rowsPerPage}&sort=${orderBy}&sort_order=${order}${strExchange}${strCoin}`,
      {
        headers: {
          Lang: getStorageLanguage()
        }
      }
    )
  },
  fetchExchange: () => axiosApiInstance.get('/exchange',
  {
    headers: {
      Lang: getStorageLanguage()
    }
  }),
  fetchCoin: () => axiosApiInstance.get('/market/coin ',
  {
    headers: {
      Lang: getStorageLanguage()
    }
  }),
  // fileLoad: async function (props) {
  //   try {
  //     const {url} = props;
  //     return await axiosApiInstance.get(`/api/data/fileLoad?${param}`, { responseType: 'arraybuffer' });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
};

export default API;
