import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box, Button, CardContent, Container, Grid, Typography } from '@mui/material';
import { PageContentWrap } from '../../Global.styled';
import {
  HomeImage,
  AdvanGridItem,
  FirstBox,
  FirstLeftBox,
  FirstRightBox,
  AdvanCard,
} from './HomePage.styled';
import MainImg from '../../assets/img/home.png';

import { useTranslation } from 'react-i18next';

function HomePage() {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <Container>
      <PageContentWrap>
        <FirstBox container spacing={3}>
          <FirstLeftBox item md={6} sm={12}>
            <Typography
              component="h1"
              sx={{
                typography: { sm: 'h2', xs: 'h3' },
              }}
              mb={1}
            >
              {t('pages.home.first.title')}
            </Typography>
            <Box mb={2}>
              <Typography variant="body1">{t('pages.home.first.subtitle')}</Typography>
            </Box>
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/singup"
              state={{ backgroundLocation: location }}
            >
              {t('pages.home.first.button')}
            </Button>
          </FirstLeftBox>
          <FirstRightBox item md={5} sm={12}>
            <Box>
              <HomeImage src={MainImg} />
            </Box>
          </FirstRightBox>
        </FirstBox>

        <Box>
          <Grid container spacing={3}>
            <AdvanGridItem item md={6} sm={12}>
              <AdvanCard variant="elevation" elevation={8}>
                <CardContent>
                  <Typography variant="body1" mb={1}>
                    {t('pages.home.advans.1.title')}
                  </Typography>
                  <Typography variant="caption">{t('pages.home.advans.1.subtitle')}</Typography>
                </CardContent>
              </AdvanCard>
            </AdvanGridItem>
            <AdvanGridItem item md={6} sm={12}>
              <AdvanCard variant="elevation" elevation={8}>
                <CardContent>
                  <Typography variant="body1" mb={1}>
                    {t('pages.home.advans.2.title')}
                  </Typography>
                  <Typography variant="caption">{t('pages.home.advans.2.subtitle')}</Typography>
                </CardContent>
              </AdvanCard>
            </AdvanGridItem>
            <AdvanGridItem item md={4} sm={12}>
              <AdvanCard variant="elevation" elevation={8}>
                <CardContent>
                  <Typography variant="body1" mb={1}>
                    {t('pages.home.advans.3.title')}
                  </Typography>
                  <Typography variant="caption">{t('pages.home.advans.3.subtitle')}</Typography>
                </CardContent>
              </AdvanCard>
            </AdvanGridItem>
            <AdvanGridItem item md={4} sm={12}>
              <AdvanCard variant="elevation" elevation={8}>
                <CardContent>
                  <Typography variant="body1" mb={1}>
                    {t('pages.home.advans.4.title')}
                  </Typography>
                  <Typography variant="caption">{t('pages.home.advans.4.subtitle')}</Typography>
                </CardContent>
              </AdvanCard>
            </AdvanGridItem>
            <AdvanGridItem item md={4} sm={12}>
              <AdvanCard variant="elevation" elevation={8}>
                <CardContent>
                  <Typography variant="body1" mb={1}>
                    {t('pages.home.advans.5.title')}
                  </Typography>
                  <Typography variant="caption">{t('pages.home.advans.5.subtitle')}</Typography>
                </CardContent>
              </AdvanCard>
            </AdvanGridItem>
          </Grid>
        </Box>
      </PageContentWrap>
    </Container>
  );
}

export default HomePage;
