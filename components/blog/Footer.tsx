import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image'
import Link from '@mui/material/Link';
import { Divider, useMediaQuery } from '@mui/material';

function Copyright() {
  return (
    <Typography sx={{textAlign: 'justify', marginTop: 1}} variant="body2" color="text.secondary" align="center">
      {'Disclaimer: The information provided on this website is for general informational purposes only. While we strive to keep the information accurate and up-to-date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.'}
    </Typography>
  );
}

interface FooterProps {
  description: string;
  title: string;
}

export default function Footer(props: FooterProps) {
  const { description, title } = props;
  const isSmallScreen = useMediaQuery('(max-width:500px)');

  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6, marginTop: 5}}>
      <Container maxWidth="lg" sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Divider sx={{width: "80%"}}></Divider>
        <Box sx={{display: 'flex', pt: 1.5, flexDirection: isSmallScreen? 'column' : 'row', alignItems: 'center', justifyContent: 'center'}}>
        <Image alt="Philips Logo" width={250} height={100} src="/philips_logo.png"></Image>
        <Box>
        <Typography sx={{fontFamily: 'monospace', color: 'maroon'}} variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          {description}
        </Typography>
        </Box>
        </Box>
        <Copyright />
      </Container>
    </Box>
  );
}
