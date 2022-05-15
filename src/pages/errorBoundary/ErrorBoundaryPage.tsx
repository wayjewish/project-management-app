import React from 'react';
import { Link } from 'react-router-dom';
import { Global } from '@emotion/react';
import { Button, Container, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { GlobalStyles } from '../../Global.styled';
import { AppBox, Main } from '../../App.styled';
import HeaderError from '../../components/header/HeaderError';
import Footer from '../../components/footer/Footer';

function ErrorBoundaryPage() {
  return (
    <AppBox>
      <Global styles={GlobalStyles} />
      <HeaderError />
      <Main>
        <Container>
          <Typography component="h1" variant="h2" mb={1}>
            Error
          </Typography>
          <Typography component="h2" variant="h4" mb={3}>
            Something went wrong
          </Typography>
        </Container>
      </Main>
      <Footer />
    </AppBox>
  );
}

export default ErrorBoundaryPage;
