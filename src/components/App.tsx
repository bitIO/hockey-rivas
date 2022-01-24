import { Auth0Provider } from '@auth0/auth0-react';
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { AppProvider } from '../context';

import Layout from './Layout';

const queryClient = new QueryClient();

function App() {
  const [colorScheme, setColorScheme] = useState('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <Auth0Provider
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID || ''}
      domain={process.env.REACT_APP_AUTH0_DOMAIN || ''}
      redirectUri={window.location.origin}
    >
      <ColorSchemeProvider
        colorScheme={colorScheme as ColorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider theme={{ colorScheme: colorScheme as ColorScheme }}>
          <QueryClientProvider client={queryClient}>
            <AppProvider>
              <Layout />
            </AppProvider>
          </QueryClientProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </Auth0Provider>
  );
}

export default App;
