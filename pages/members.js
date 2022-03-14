import React from 'react'
import Card from '../components/Card'
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const Members = () => {
    return (
        <div className='m-4'>
            <Typography variant="h2" component="h3" mt={2} color={'white'}>
                Members
            </Typography>;
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                {Array.from(Array(6)).map((_, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <Card style={{ margin: '16px', }} />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default Members