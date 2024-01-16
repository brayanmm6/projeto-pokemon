import { Reset } from './styled-components/globalStyle/reset';
import { Styles } from './styled-components/globalStyle/styles';
import { AppRoutes } from './pages/routes';
import { CardsProvider } from './contexts/cards-context';
import { LisLimitProvider } from './contexts/list-limit-context';
import { SkyBackground } from './components/sky-background/sky-background';
import { PokemonFilterProvider } from './contexts/pokemon-filter';
import { SearchContextProvider } from './contexts/search-context';
import { ThemeProvider } from './contexts/theme-context';
import { LoadingProvider } from './contexts/loading-context';
import { Responsive } from './styled-components/globalStyle/responsive';
import { ErrorProvider } from './contexts/error-context';

function App() {
  
  return (
    <>
      <ThemeProvider>
        <Styles />
        <Reset />
        <Responsive />
      
        <SkyBackground/>

        <ErrorProvider>
          <LisLimitProvider>
            <PokemonFilterProvider>
              <SearchContextProvider>
                <LoadingProvider>
                  <CardsProvider>
                    <AppRoutes />
                  </CardsProvider>
                </LoadingProvider>
              </SearchContextProvider>
            </PokemonFilterProvider>
          </LisLimitProvider>
        </ErrorProvider>

      </ThemeProvider>
    </>
  );
}

export default App;
