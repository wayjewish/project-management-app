import React from 'react';
import { Box, Link, Typography } from '@mui/material';
import { Footer, Wrap, LogoRss, Bot, FooterDivider } from './Footer.styled';
import Rss from '../../assets/icons/rs_school.svg';

export default function FooterComponent() {
  return (
    <Footer>
      <Wrap>
        <Box>
          <Typography sx={{ typography: { sm: 'subtitle1', xs: 'caption' } }} color={'white'}>
            Project management app | REACT2022Q1
          </Typography>
        </Box>
        <FooterDivider flexItem={true} />
        <Bot>
          <ul>
            <li>
              <Link href="https://github.com/wayjewish">
                <Typography component="p" variant="caption" color={'white'}>
                  Dmitry Uvarov | @wayjewish
                </Typography>
              </Link>
            </li>
            <li>
              <Link href="https://github.com/gomunkool">
                <Typography component="p" variant="caption" color={'white'}>
                  Vadzim Maroz | @gomunkool
                </Typography>
              </Link>
            </li>
            <li>
              <Link href="https://github.com/KaterinaKachann">
                <Typography component="p" variant="caption" color={'white'}>
                  Ekaterina Kachan | @KaterinaKachann
                </Typography>
              </Link>
            </li>
          </ul>
          <Box>
            <Link href="https://rs.school/">
              <LogoRss src={Rss} />
            </Link>
          </Box>
        </Bot>
      </Wrap>
    </Footer>
  );
}
