import React from 'react';
import { Box, Button, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import { HomeImage, BoxVideo } from './Main.styled';
import MainImg from '../../assets/img/home.png';

function Main() {
  return (
    <Container>
      <Box display={'flex'} alignItems={'center'} mb={3}>
        <Box>
          <Typography component="h1" variant="h2">
            RSS Tracker
          </Typography>
          <Typography variant="body1" mt={1} mb={1.6}>
            Сервис для совместной работы и организации процессов. Контролируйте задачи с помощью
            одного инструмента.
          </Typography>
          <Button variant="contained" size="large">
            попробовать
          </Button>
        </Box>
        <Box>
          <HomeImage src={MainImg} />
        </Box>
      </Box>
      <Box flexGrow={1} mb={3}>
        <Grid sx={{ flexGrow: 1 }} container spacing={3} gridAutoRows={200}>
          <Grid item xs={12} sm={6} container>
            <Card variant="elevation" elevation={8}>
              <CardContent>
                <Typography variant="body1" mb={1}>
                  Вся рабочая информация всегда под рукой
                </Typography>
                <Typography variant="caption">
                  Моментально оценивайте статус работы, определяйте дальнейшие действия и делайте
                  всё необходимое, чтобы работа шла по плану.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} container>
            <Card variant="elevation" elevation={8}>
              <CardContent>
                <Typography variant="body1" mb={1}>
                  Всё точно в срок
                </Typography>
                <Typography variant="caption">
                  Создайте план, показывающий взаимосвязи между различными частями проекта. Он
                  поможет вам работать по графику.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4} container>
            <Card variant="elevation" elevation={8}>
              <CardContent>
                <Typography variant="body1" mb={1}>
                  Хронология
                </Typography>
                <Typography variant="caption">
                  Управляйте зависящими друг от друга, пересекающимися и непредвиденными задачами, а
                  также создавайте реалистичные планы.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4} container>
            <Card variant="elevation" elevation={8}>
              <CardContent>
                <Typography variant="body1" mb={1}>
                  Доски
                </Typography>
                <Typography variant="caption">
                  Сделайте так, чтобы ничего не отвлекало сотрудников от текущих задач. Разбивайте
                  работу на этапы, которые позволяют видеть, что важно, и где случаются задержки.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4} container>
            <Card variant="elevation" elevation={8}>
              <CardContent>
                <Typography variant="body1" mb={1}>
                  Список
                </Typography>
                <Typography variant="caption">
                  В списках сотрудники сразу видят, что нужно сделать, какие задачи приоритетны и
                  какой срок отведён на выполнение работы.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Box width={'100%'} mb={3}>
        <Typography variant="h5" mb={1} textAlign={'left'}>
          Что такое Tracker
        </Typography>
        <BoxVideo />
      </Box>
      <Box flexGrow={1} mb={3}>
        <Typography variant="h5" mb={1} textAlign={'left'}>
          Tracker подойдёт разным командам
        </Typography>
        <Grid sx={{ flexGrow: 1 }} container spacing={3} gridAutoRows={200}>
          <Grid item sm={4} xs={12}>
            <Card variant="elevation" elevation={8}>
              <CardContent>
                <Typography variant="body1" mb={1}>
                  Разработка
                </Typography>
                <Typography variant="caption">
                  Организуйте работу команды разработчиков в Tracker: оценивайте трудозатраты,
                  планируйте спринты, контролируйте работу над задачами на виртуальной доске и
                  следите за их выполнением на дашбордах.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={4} xs={12}>
            <Card variant="elevation" elevation={8}>
              <CardContent>
                <Typography variant="body1" mb={1}>
                  Дизайн
                </Typography>
                <Typography variant="caption">
                  Используйте Tracker для итеративной работы. Обсуждайте макеты с коллегами прямо на
                  странице задачи. А для типовых задач создавайте шаблоны ТЗ и автоматизируйте
                  процесс согласования.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={4} xs={12}>
            <Card variant="elevation" elevation={8}>
              <CardContent>
                <Typography variant="body1" mb={1}>
                  Инфраструктура
                </Typography>
                <Typography variant="caption">
                  Решайте в Tracker инфраструктурные задачи, такие как закупка оборудования,
                  инвентаризация, учёт расходов и другие. Чтобы контролировать процесс их
                  реализации.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Main;
