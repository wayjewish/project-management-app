import React from 'react';
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

function App() {
  return (
    <Wrap>
      <Header />
      <main className="main">
        <Typography variant="h1">
          Ну здарова
        </Typography>
      </main>
      <Footer />
    </Wrap>
  );
}

export default App;