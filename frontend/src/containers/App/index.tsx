import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Page from '@/containers/Page';
import theme from './theme';
import i18n from '@/containers/i18n';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import store from '@/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter>
            <Routes>
              <Route path=':language' element={<Page />} />
              <Route
                path="*"
                element={<Navigate to="en" replace />}
              />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </I18nextProvider>
    </Provider>
  );
}

export default App;
