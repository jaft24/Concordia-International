import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Image from 'next/image'
import { useMediaQuery } from '@mui/material';

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}

export default function Header(props: HeaderProps) {
  const { sections, title } = props;
  const isSmallScreen = useMediaQuery('(max-width:500px)');

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Button href='https://www.concordiacollege.edu/about/campus-sustainability/newsletter-sign-up/' size="medium" sx={{color: 'maroon', fontFamily: 'monospace', fontWeight: 'bold', '&:hover': {
          border: '1px solid maroon',
        },}}>Subscribe</Button>
        <Typography
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1, marginLeft: isSmallScreen? -2.5 : 0 }}
        >
          {isSmallScreen? (
            <Image alt="Concordia Icon" src="/favicon.ico" width={110} height={100}></Image> 
          ) : (
            <Image alt="Concordia Logo" src="/concordia_logo.png" width={250} height={80}></Image> 
          )}
        </Typography>
        <Button href="/#sign-up-form" variant="outlined" size="small" sx={{
                  color: 'maroon',
                  fontWeight: 'bold',
                  fontFamily: 'monospace',
                  border: '1px solid maroon',
                  '&:hover': {
                    backgroundColor: 'maroon', // Maroon background on hover
                    color: 'white', // White text on hover
                  },
                }}>
          Sign up
        </Button>
      </Toolbar>
      <Toolbar
  component="nav"
  variant="dense"
  sx={{
    fontWeight: 'bold',
    justifyContent: 'space-between',
    overflowX: 'auto',
    color: 'maroon',
    margin: '0 0 3px 0',
  }}
>
  {sections.map((section) => (
    <Link
      color="inherit"
      noWrap
      key={section.title}
      variant="body2"
      href={section.url}
      sx={{
        p: 1,
        flexShrink: 0,
        textDecoration: 'none',
        fontWeight: 'bold',
        fontFamily: 'monospace',
        fontSize: 'large',
        '&:hover': {
          textDecoration: 'underline',
        },
      }}
    >
      {section.title}
    </Link>
  ))}
</Toolbar>
    </React.Fragment>
  );
}
