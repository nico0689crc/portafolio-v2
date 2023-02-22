import { useSelector } from 'react-redux';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import customThemeCreator from 'themes/customThemeCreator';
import ErrorBoundary from 'components/core/ErrorBoundary/ErrorBoundary'
import { QueryClientProvider } from "contexts/QueryClient";
import Routes from 'routes';

const App = () => {
  const theme = useTheme();
  const customTheme = useSelector((state) => state.uiStore);

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