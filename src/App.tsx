import { CssBaseline } from '@mui/material';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { SWRConfig } from 'swr';

import GlobalStyle from '@@assets/styles/GlobalStyle';
import { theme } from '@@assets/styles/theme';
import { PopupProvider } from '@@components/Popup';
import { ToastContainer } from '@@components/Toast';
import Router from '@@router';
import { store } from '@@store';
import { fetcher } from '@@utils/request/utils';

import '@@assets/styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <MUIThemeProvider theme={{}}>
              <SWRConfig
                value={{
                  fetcher,
                  revalidateOnFocus: false,
                  revalidateOnReconnect: false,
                  refreshWhenOffline: false,
                  refreshWhenHidden: false,
                  errorRetryCount: 2,
                  shouldRetryOnError(err) {
                    return err.status !== 404;
                  },
                }}
              >
                <PopupProvider>
                  <GlobalStyle />
                  <CssBaseline />
                  <Router />
                  <ToastContainer />
                </PopupProvider>
              </SWRConfig>
            </MUIThemeProvider>
          </ThemeProvider>
        </Provider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
