import React from 'react';
import { Box, Button, CardContent, Container, Grid, Typography } from '@mui/material';

import {
  HomeImage,
  BoxVideo,
  AdvanGridItem,
  HomeWrap,
  FirstBox,
  FirstLeftBox,
  FirstRightBox,
  AdvanCard,
} from './HomePage.styled';
import MainImg from '../../assets/img/home.png';

function HomePage() {
  return (
    <Container>
      <HomeWrap>
        <FirstBox container spacing={3}>
          <FirstLeftBox item md={6} sm={12}>
            <Typography
              component="h1"
              sx={{
                typography: { sm: 'h2', xs: 'h3' },
              }}
              mb={1}
            >
              RSS Tracker
            </Typography>
            <Box mb={2}>
              <Typography variant="body1">
                Сервис для совместной работы и организации процессов. Контролируйте задачи с помощью
                одного инструмента.
              </Typography>
            </Box>
            <Button variant="contained" size="large">
              Попробовать
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
                    Вся рабочая информация всегда под рукой
                  </Typography>
                  <Typography variant="caption">
                    Моментально оценивайте статус работы, определяйте дальнейшие действия и делайте
                    всё необходимое, чтобы работа шла по плану.
                  </Typography>
                </CardContent>
              </AdvanCard>
            </AdvanGridItem>
            <AdvanGridItem item md={6} sm={12}>
              <AdvanCard variant="elevation" elevation={8}>
                <CardContent>
                  <Typography variant="body1" mb={1}>
                    Всё точно в срок
                  </Typography>
                  <Typography variant="caption">
                    Создайте план, показывающий взаимосвязи между различными частями проекта. Он
                    поможет вам работать по графику.
                  </Typography>
                </CardContent>
              </AdvanCard>
            </AdvanGridItem>
            <AdvanGridItem item md={4} sm={12}>
              <AdvanCard variant="elevation" elevation={8}>
                <CardContent>
                  <Typography variant="body1" mb={1}>
                    Хронология
                  </Typography>
                  <Typography variant="caption">
                    Управляйте зависящими друг от друга, пересекающимися и непредвиденными задачами,
                    а также создавайте реалистичные планы.
                  </Typography>
                </CardContent>
              </AdvanCard>
            </AdvanGridItem>
            <AdvanGridItem item md={4} sm={12}>
              <AdvanCard variant="elevation" elevation={8}>
                <CardContent>
                  <Typography variant="body1" mb={1}>
                    Доски
                  </Typography>
                  <Typography variant="caption">
                    Сделайте так, чтобы ничего не отвлекало сотрудников от текущих задач. Разбивайте
                    работу на этапы, которые позволяют видеть, что важно, и где случаются задержки.
                  </Typography>
                </CardContent>
              </AdvanCard>
            </AdvanGridItem>
            <AdvanGridItem item md={4} sm={12}>
              <AdvanCard variant="elevation" elevation={8}>
                <CardContent>
                  <Typography variant="body1" mb={1}>
                    Список
                  </Typography>
                  <Typography variant="caption">
                    В списках сотрудники сразу видят, что нужно сделать, какие задачи приоритетны и
                    какой срок отведён на выполнение работы.
                  </Typography>
                </CardContent>
              </AdvanCard>
            </AdvanGridItem>
          </Grid>
        </Box>

        <Box>
          <Typography variant="h5" mb={1}>
            Что такое Tracker
          </Typography>
          <BoxVideo />
        </Box>
      </HomeWrap>
    </Container>
  );
}

export default HomePage;
