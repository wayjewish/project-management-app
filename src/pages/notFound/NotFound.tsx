import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <Container>
      <Typography component="h1" variant="h2" mb={1}>
        404
      </Typography>
      <Typography component="h2" variant="h4" mb={3}>
        Page not found
      </Typography>
      <Button variant="text" endIcon={<ArrowForwardIcon />} component={Link} to="/">
        To main page
      </Button>
    </Container>
  );
}

export default NotFoundPage;
