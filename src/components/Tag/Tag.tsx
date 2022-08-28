import React from 'react';
import { css } from '@emotion/css';
import { Chip } from '@mui/material';
import { tagTitle, TAGS } from '../../data'
 

function getTagByTitle(title: tagTitle) {
  for (let tag of TAGS) {
    if (tag.title === title) return tag
  }
  return null;
}


interface TagProps {
  title: tagTitle;
  onClick?: ()=>void;
  active?: boolean;
}

function Tag({ title, onClick, active }: TagProps) {
  const tag = getTagByTitle(title)
  if (!tag) return null;

  const activeStyle = {
    color: 'white',
    background: tag.color
  }

  const inactiveStyle = {
    color: tag.color,
    borderColor: tag.color
  }

  const style = active ? activeStyle : inactiveStyle;

  return <Chip style={style} label={title} onClick={onClick} variant={active ? "filled": "outlined"}/>
}

export default Tag;