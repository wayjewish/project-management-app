import React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
<<<<<<< HEAD
import Home from './pages/Home/Home';
import { GlobalStyles } from './Global.styled';
import { Global } from '@emotion/react';
import { Box } from '@mui/material';
import { Main } from './App.styled';
=======
import Board from './pages/Board/Board';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
`;

const Main = styled.main`
  width: 100%;
  height: 100%;
`;
>>>>>>> 2ebc346 (feat: add bord page)

function App() {
  return (
    <Box>
      <Global styles={GlobalStyles} />
      <Header />
<<<<<<< HEAD
      <Main>
        <Home />
      </Main>
=======
      {/* <Main>
        <Container>
          <Box component="div" sx={{ border: '1px dashed grey', background: 'grey' }}>
            <Typography variant="h1">Welcome page</Typography>
          </Box>
        </Container>
      </Main> */}
      <Board />
>>>>>>> 2ebc346 (feat: add bord page)
      <Footer />
    </Box>
  );
}
<<<<<<< HEAD
=======

>>>>>>> 2ebc346 (feat: add bord page)
export default App;
