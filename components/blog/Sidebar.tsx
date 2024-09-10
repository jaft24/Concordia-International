import * as React from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useState } from 'react';
import SignUp from '../form/Form';

interface SidebarProps {
  archives: ReadonlyArray<{
    url: string;
    title: string;
  }>;
  description: string;
  social: ReadonlyArray<{
    icon: React.ElementType;
    name: string;
    link: string,
  }>;
  title: string;
}

export default function Sidebar(props: SidebarProps) {
  const { archives, description, social, title } = props;
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleFormSubmit = (data: { firstName: string; lastName: string; email: string }) => {
    console.log(data)
    setFormData(data);
  };

  return (
    <Grid item xs={12} md={4} marginBottom={5}>
      <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.100'}}>
        <Typography sx={{fontWeight: 'bold', color: 'maroon',  textAlign: 'center', fontFamily: 'monospace'}} variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography sx={{textAlign: 'justify', fontFamily: 'monospace'}}>{description}</Typography>
      </Paper>
      <SignUp onSubmit={handleFormSubmit} />
      {/* <Typography variant="h6" gutterBottom sx={{ mt: 3, fontFamily: 'monospace', fontWeight: 'bold'}}>
        News Archives
      </Typography>
      {archives.map((archive) => (
        <Link display="block" variant="body1" href={archive.url} key={archive.title} sx={{ color: 'maroon', textDecoration: 'none', '&:hover': {
        } }}>
          {archive.title}
        </Link>
      ))} */}
      <Typography variant="h6" gutterBottom sx={{ mt: 3, fontFamily: 'monospace', fontWeight: 'bold' }}>
        Social
      </Typography>
      {social.map((network) => (
        <Link
          display="block"
          variant="body1"
          href={network.link}
          key={network.name}
          sx={{ mb: 0.5, color: 'maroon', textDecoration: 'none', '&:hover': {
          textDecoration: 'underline',
        } }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <network.icon />
            <span>{network.name}</span>
          </Stack>
        </Link>
      ))}
    </Grid>
  );
}
