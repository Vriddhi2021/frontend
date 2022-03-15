import React from 'react'
import Card from '../components/Card'
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const team = () => {
  return (
    <section>
      <div className='m-4'>
        <Typography variant="h2" component="h3" mt={2} color={'white'}>
          Members
        </Typography>;
        <Grid container spacing={{ xs: 2, md: 6 }} columns={{ xs: 2, sm: 8, md: 12 }} style={{margin: 'auto',}}>
          {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Card style={{ margin: '16px', }} />
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  )
}

export default team

