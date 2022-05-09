import React from 'react';
import Typography from '@mui/material/Typography';

import { Footer, Wrap, LogoRss, Links, Container, Divider } from './Footer.styled';
import { Box, Link } from '@mui/material';
import Rss from '../../assets/icons/rs_school.svg';

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
              <Links>Dmitry Uvarov | @wayjewish</Links>
            </Link>
            <Link href="https://github.com/gomunkool">
              <Links>Vadzim Maroz | @gomunkool</Links>
            </Link>
            <Link href="https://github.com/KaterinaKachann">
              <Links>Ekaterina Kachan | @KaterinaKachann</Links>
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
