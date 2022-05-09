import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Link } from '@mui/material';
import { Footer, Wrap, LogoRss, Container, Divider } from './Footer.styled';
import Rss from '../../assets/icons/rs_school.svg';
import * as palette from '../../Variables';

export default function FooterComponent() {
  return (
    <Footer>
      <Wrap>
        <Box>
          <Typography style={{ color: '#FFFFFF', fontSize: '100%' }}>
            Project management app | REACT2022Q1
          </Typography>
        </Box>
        <Divider />
        <Container>
          <Box>
            <Link href="https://github.com/wayjewish">
              <Typography
                variant="subtitle1"
                component="div"
                color={`${palette.COLOR_FONT}`}
                lineHeight={'166%'}
                letterSpacing={'0.4px'}
              >
                Dmitry Uvarov | @wayjewish
              </Typography>
            </Link>
            <Link href="https://github.com/gomunkool">
              <Typography
                variant="subtitle1"
                component="div"
                color={`${palette.COLOR_FONT}`}
                lineHeight={'166%'}
                letterSpacing={'0.4px'}
              >
                Vadzim Maroz | @gomunkool
              </Typography>
            </Link>
            <Link href="https://github.com/KaterinaKachann">
              <Typography
                variant="subtitle1"
                component="div"
                color={`${palette.COLOR_FONT}`}
                lineHeight={'166%'}
                letterSpacing={'0.4px'}
              >
                Ekaterina Kachan | @KaterinaKachann
              </Typography>
            </Link>
          </Box>
          <Box>
            <Link href="https://rs.school/" color="inherit">
              <LogoRss src={Rss}></LogoRss>
            </Link>
          </Box>
        </Container>
      </Wrap>
    </Footer>
  );
}
