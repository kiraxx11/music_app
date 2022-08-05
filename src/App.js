import React from 'react';
import { Container, ThemeProvider, Button ,CssBaseline} from '@mui/material';

import SearchBar from './components/SearchBar';
import Player from './components/Player';
import theme from './styles/themeConfig';

function App() {
  return (
    <ThemeProvider theme={theme}>
       <CssBaseline />
      <SearchBar>

      </SearchBar>
      <Container fixed maxWidth={'md'}>
        <h1>
          hola
        </h1>

        <p> lorem</p>

        <Button variant="contained" color='primary'>
          asd
        </Button>
        <Button variant="contained" color="secondary">
          asd
        </Button>
      </Container>
      <Player/>
    </ThemeProvider>
  );
}

export default App;
