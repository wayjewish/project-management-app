import React from 'react';
import Typography from '@mui/material/Typography';


import { Footer, Wrap, LogoRss, Links, Container } from './Footer.styled';
import { Box, Divider, Link } from '@mui/material';
import Rss from '../../assets/icons/rs_school.svg';

function HeaderComponent() {
  return (
   
      <Footer>
        <Wrap>
          <Box>
            <Typography style={{ color: '#FFFFFF', fontSize: '100%' }}>
              Project management app | REACT2022Q1
            </Typography>
          </Box>
          <Divider
            variant="middle"
            style={{
              width: '100%',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              marginTop: '0.7%',
              marginBottom: '0.7%',
            }}
          />
          <Container style={{display:'flex', justifyContent:'space-between', flexWrap: 'wrap'}}>
            <Box>
              <Link
                href="https://github.com/wayjewish"
                style={{ textDecoration: 'none', color: '#FFFFFF' }}
              >
                <Links>Dmitry Uvarov | @wayjewish</Links>
              </Link>
              <Link
                href="https://github.com/gomunkool"
                style={{ textDecoration: 'none', color: '#FFFFFF' }}
              >
                <Links>Vadzim Maroz | @gomunkool</Links>
              </Link>
              <Link
                href="https://github.com/KaterinaKachann"
                style={{ textDecoration: 'none', color: '#FFFFFF' }}
              >
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

export default HeaderComponent;
function styled(arg0: string) {
  throw new Error('Function not implemented.');
}
