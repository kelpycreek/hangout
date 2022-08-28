import React from 'react';
import ReactMarkdown from 'react-markdown'
import { Accordion,  AccordionSummary, AccordionDetails, Stack, Typography } from '@mui/material';
import Tag from '../Tag/Tag';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { DateTime } from '../../utils/DateTime';
import { date } from '../../data';

function Description({description}: {description: string}) {
  const paragraphs = description.split('\n');

  return (
    <>
      {paragraphs.map((text)=>{
        return <ReactMarkdown>{text}</ReactMarkdown>
      })}
    </>
  )
}

export function Date({title, description, tags, date}: date) {
  const now = new DateTime();
  if (date && now.getTime() > date.getTime()) return null;

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography variant='h6'>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Description description={description} />
        <Stack direction='row' sx={{flexDirection: 'row-reverse'}}>
          {tags.map(tag=>{
          return <Tag title={tag} active={true}/>
          })}
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
}

export default Date;
