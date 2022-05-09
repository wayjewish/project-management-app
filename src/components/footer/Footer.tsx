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
          <Typography
            sx={{ typography: { sm: 'subtitle1', xs: 'caption' } }}
            color={`${palette.COLOR_FONT}`}
          >
            Project management app | REACT2022Q1
          </Typography>
        </Box>
        <Divider />
        <Container>
          <nav>
            <ul>
              <li>
                <Link href="https://github.com/wayjewish">
                  <Typography
                    sx={{ typography: { sm: 'caption', xs: 'caption' } }}
                    component="p"
                    color={`${palette.COLOR_FONT}`}
                    lineHeight={'166%'}
                    letterSpacing={'0.4px'}
                  >
                    Dmitry Uvarov | @wayjewish
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href="https://github.com/gomunkool">
                  <Typography
                    sx={{ typography: { sm: 'caption', xs: 'caption' } }}
                    component="p"
                    color={`${palette.COLOR_FONT}`}
                    lineHeight={'166%'}
                    letterSpacing={'0.4px'}
                  >
                    Vadzim Maroz | @gomunkool
                  </Typography>
                </Link>
              </li>

              <li>
                <Link href="https://github.com/KaterinaKachann">
                  <Typography
                    sx={{ typography: { sm: 'caption', xs: 'caption' } }}
                    component="p"
                    color={`${palette.COLOR_FONT}`}
                    lineHeight={'166%'}
                    letterSpacing={'0.4px'}
                  >
                    Ekaterina Kachan | @KaterinaKachann
                  </Typography>
                </Link>
              </li>
            </ul>
          </nav>
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
