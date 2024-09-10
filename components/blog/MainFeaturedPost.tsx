import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { useMediaQuery } from '@mui/material';

interface MainFeaturedPostProps {
  post: {
    description: string;
    image: string;
    imageText: string;
    linkText: string[][];
    title: string;
  };
}

export default function MainFeaturedPost(props: MainFeaturedPostProps) {
  const { post } = props;
  const isMediumScreen = useMediaQuery('(max-width:900px)');
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.100',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: isMediumScreen ? '' : `url(${post.image})`,
        padding: isSmallScreen ? '20px' : '40px',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
              color: "gold",
            }}
          >
            <Typography
              component="h1"
              variant="h3"
              sx={{
                fontFamily: 'monospace',
                color: 'maroon',
                fontSize: isSmallScreen ? '1.5rem' : isMediumScreen ? '2rem' : '3rem',
              }}
              gutterBottom
            >
              {post.title}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontFamily: 'monospace',
                textAlign: 'justify',
                margin: '20px 0',
                fontSize: isSmallScreen ? '1rem' : '1.25rem',
              }}
              paragraph
            >
              {post.description}
            </Typography>
            {post.linkText.map(([text, link]) => (
              <Link
                key={text}
                variant="subtitle1"
                href={link}
                sx={{
                  textDecoration: 'none',
                  display: 'block',
                  mb: 0.1,
                  color: 'maroon',
                  fontFamily: 'monospace',
                  fontSize: isSmallScreen ? '0.85rem' : '1rem',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                {text}
              </Link>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
