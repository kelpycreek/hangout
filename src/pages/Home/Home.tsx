import React from 'react';
import { css } from '@emotion/css'
import { Container, Paper, Stack, Box } from '@mui/material';

import Date from '../../components/Date/Date';
import Tag from '../../components/Tag/Tag';
import { DATES, TAGS, tag, tagTitle } from '../../data'

function Home() {
  const [active, setActive] = React.useState([] as tagTitle[]);

  const toggleTag = (tag: tag) => {
    if (active.includes(tag.title)) {
      setActive(active.filter(title=>title!==tag.title))
    } else {
      setActive([tag.title, ...active])
    }
  }

  const filteredDates = DATES.filter(date=>{
    return active.every(tag=>date.tags.includes(tag))
  })

  const dates = active.length > 0 ? filteredDates : DATES;


  return (
    <Container>
    <Paper sx={{height: 100, display: 'flex'}}>
        <Box sx={{marginLeft: 'auto', marginRight: 'auto', alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
        <Stack direction='row' spacing={1}>
            {TAGS.map(tag=>{
            return <Tag title={tag.title} active={active.includes(tag.title)} onClick={()=>{toggleTag(tag)}} />
            })}
        </Stack>
        </Box>
    </Paper>
    <Paper elevation={2}>
        {dates.map((date, index) => {
            return <Date key={index} {...date} />
        })}
    </Paper>
    </Container>
  );
}

export default Home;
