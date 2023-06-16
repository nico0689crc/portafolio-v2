import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import customThemeCreator from 'themes/customThemeCreator';
import ErrorBoundary from 'components/core/ErrorBoundary/ErrorBoundary'
import { QueryClientProvider } from "contexts/QueryClient";
import { uiActions } from "store/ui/uiSlice";
import Routes from 'routes';
import { useEffect } from 'react';

const App = () => {
  const theme = useTheme();
  const customTheme = useSelector((state) => state.uiStore);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(uiActions.initFromLocalStorageModeUi());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <QueryClientProvider>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={customThemeCreator({customTheme, theme})}>
          <CssBaseline />
          <ErrorBoundary>
            <Routes />
          </ErrorBoundary>
        </ThemeProvider>
      </StyledEngineProvider>
    </QueryClientProvider>
  );
}

export default App;