import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      titlePage: "Cryptocurrency Arbitrage Scanner is a tool that finds opportunities for cryptocurrency arbitrage on the exchange",
      descriptionPage: "The cryptocurrency arbitrage scanner shows a route for buying and selling cryptocurrencies in order to profit from price imbalances.",
      Ukrainian: "Ukrainian",
      English: "English",
      question1: "What is this service?",
      question2: "How does it work?",
      question3: "What cryptocurrencies does the service scan?",
      answer1: "It’s a free service for intra-exchange cryptocurrency arbitrage. It searches combinations of coin exchanges that bring a profit at the end.",
      answer2: "Every second we scan exchanges and build cryptocurrency exchange routes (from 2 to 4 transactions). We use a graph database for a quick search. For the calculation, we take the lowest Ask price and the highest Bid price. The income excludes exchange fees.",
      answer3: "The start and end cryptocurrencies are USDT by default. The path is built for all currencies traded on the spot market.",
      faqs: "FAQs",
      Donate: "Donate",
      DonateText: "All donations will be transferred to the needs of the Armed Forces of Ukraine",
      Filters: 'Filters',
      'clear all filters': 'clear all filters',
      Apply: 'Apply',
      Exchange: 'Exchange',
      Coin: 'Coin',
      created_at: 'created_at',
      updated_at: 'updated_at',
      foundIn: 'Found In',
      duration: 'Duration',
      exchange: 'Exchange',
      path: 'Path',
      profit: 'Profit',
      min_profit: 'MinP',
      max_profit: 'MaxP',
      foundInTooltip: 'The time has passed, or the exact time since you found a scheme for arbitration.',
      durationTooltip: 'The elapsed time since the last update, or the exact time of the update.',
      pathTooltip: 'Exchange sequence.',
      profitTooltip: 'Estimated profit in percentage terms, excluding exchange commission.',
      min_profitTooltip: "Minimum profit for the period of the scheme's relevance.",
      max_profitTooltip: "Maximum profit for the period of the scheme's relevance.",
      'Rows per page': 'Rows per page',
      'Site development': 'Front-end developer',
      'devOps': 'Linux System Administrator',
      'Questions and suggestions': 'Questions and suggestions',
      newStatus: 'new scheme',
      workStatus: 'the scheme works and is updated',
      endStatus: 'it does not work',
      emptyDataText: 'No results Try adjusting your search by removing filters'
    },
  },
  uk: {
    translation: {
      titlePage: "Сканер криптовалютних арбітражів - це інструмент, який знаходить можливості внутрібіржевого арбітражу криптовалюти",
      descriptionPage: "Сканер криптовалютного арбітражу показує маршрут для купівля та продаж криптовалюти з метою отримання прибутку від дисбалансу в ціні.",
      Ukrainian: "Українська",
      English: "Англійська",
      question1: "Що це за сервіс?",
      question2: "Як це працює?",
      question3: "Які криптовалюти сканує сервіс?",
      answer1: "Це безкоштовний сервіс для внутрішньобіржового арбітражу криптовалюти. Він шукає такі комбінації обміну монет, які в кінцевій точці приносять прибуток.",
      answer2: "Ми щосекундно скануємо біржі і будуємо маршрути обміну криптовалют (від 2 до 4 транзакцій). Для швидкого пошуку використовуємо графову базу даних. При розрахунку беремо найнижчу Ask ціну, та найвищу Bid ціну. Відсоток прибутку наводиться без урахування комісії біржі.",
      answer3: "Початковою та кінцевою криптовалютою за замовчуванням є USDT. Шлях будується для всіх валют, якими торгує біржа на спотовому ринку.",
      faqs: "Поширені запитання",
      Donate: "Донат",
      DonateText: "Всі донати будуть перераховані на потреби Збройних Сил України",
      Filters: 'Фільтри',
      'clear all filters': 'очистити всі фільтри',
      Apply: 'Застосувати',
      Exchange: 'Біржа',
      Coin: 'Монета',
      created_at: 'created_at',
      updated_at: 'updated_at',
      foundIn: 'Знайшли',
      duration: 'Тривалість',
      exchange: 'Біржа',
      path: 'Шлях',
      profit: 'Дохід',
      min_profit: 'МінП',
      max_profit: 'МаксП',
      foundInTooltip: 'Пройшло часу, або точний час як знайшли схему для арбітражу.',
      durationTooltip: 'Пройшло часу з останнього оновлення, або точний час оновлення.',
      pathTooltip: 'Послідовність обміну.',
      profitTooltip: 'Орієнтовний дохід у відсотках без урахування комісії біржі.',
      min_profitTooltip: 'Мінімальний дохід за період актуальності схеми.',
      max_profitTooltip: 'Максимальний дохід за період актуальності схеми.',
      'Rows per page': 'Рядків на сторінці',
      'Site development': 'Розробка фронт-енду',
      'devOps': 'Системний адміністратор Linux',
      'Questions and suggestions': 'Питання та пропозиції',
      newStatus: 'нова схема',
      workStatus: 'схема працюе та оновлюється',
      endStatus: 'не працює',
      emptyDataText: 'Немає результатів Спробуйте налаштувати пошук, видаливши фільтри',
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
