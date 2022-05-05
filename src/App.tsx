import React from 'react';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';


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

function App() {
  return (
    <Wrap>
      <Header />
      <Main>
        <Container>
          <Box component="div" sx={{ border: '1px dashed grey', background: 'grey' }}>
            <Typography variant="h1">Welcome page</Typography>
          </Box>
        </Container>
      </Main>
      <Footer />
    </Wrap>
  );
}

export default App;