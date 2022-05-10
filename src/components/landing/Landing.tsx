import React from 'react';
import { Box, Button, Grid, Link, Typography } from '@mui/material';
import { Main, Wrap, Content, Item, Image } from './Landing.styled';
import MainImg from '../../assets/img/main.svg';
function Landing() {
  return (
    <Main>
      <Wrap>
        <Content>
          <Box>
            <Typography variant="h2">RSS Tracker</Typography>
            <Typography variant="body1" mt={1} mb={1}>
              Сервис для совместной работы и организации процессов.
              <br />
              Контролируйте задачи с помощью одного инструмента.
            </Typography>
            <Button variant="contained">попробовать</Button>
          </Box>
          <Box>
            <Image src={MainImg}/>
          </Box>
        </Content>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} style={{ justifyContent: 'center' }}>
            <Grid item xs={6}>
              <Item>
                <Typography variant="body1" mb={1}>
                  Вся рабочая информация всегда под рукой
                </Typography>
                <Typography variant="caption">
                  Моментально оценивайте статус работы, определяйте дальнейшие действия и делайте
                  всё необходимое, чтобы работа шла по плану.
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Typography variant="body1" mb={1}>
                  Всё точно в срок
                </Typography>
                <Typography variant="caption">
                  Создайте план, показывающий взаимосвязи между различными частями проекта. Он
                  поможет вам работать по графику.
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <Typography variant="body1" mb={1}>
                  Хронология
                </Typography>
                <Typography variant="caption">
                  Управляйте зависящими друг от друга, пересекающимися и непредвиденными задачами, а
                  также создавайте реалистичные планы.
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <Typography variant="body1" mb={1}>
                  Доски
                </Typography>
                <Typography variant="caption">
                  Сделайте так, чтобы ничего не отвлекало сотрудников от текущих задач. Разбивайте
                  работу на этапы, которые позволяют видеть, что важно, и где случаются задержки.
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <Typography variant="body1" mb={1}>
                  Список
                </Typography>
                <Typography variant="caption">
                  В списках сотрудники сразу видят, что нужно сделать, какие задачи приоритетны и
                  какой срок отведён на выполнение работы.
                </Typography>
              </Item>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Typography variant="h5" mb={1} textAlign={'left'}>
            Что такое Tracker
          </Typography>
          <Box></Box>
        </Box>
      </Wrap>
    </Main>
  );
}

export default Landing;
