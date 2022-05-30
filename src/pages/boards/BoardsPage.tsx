import React from 'react';
import { Container, Typography } from '@mui/material';
import { PageContentWrap } from '../../Global.styled';

import Boards from '../../components/boards/Boards';

import { useTranslation } from 'react-i18next';

function BoardsPage() {
  const { t } = useTranslation();

  return (
    <Container>
      <PageContentWrap>
        <Typography
          component="h1"
          sx={{
            typography: { sm: 'h2', xs: 'h3' },
          }}
        >
          {t('pages.boards.title')}
        </Typography>
        <Boards />
      </PageContentWrap>
    </Container>
  );
}

export default BoardsPage;
