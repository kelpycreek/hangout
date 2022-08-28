import React from 'react';
import { css } from '@emotion/css';
import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material/'

function PageButton({href, children}: {href: string, children: React.ReactNode}) {
  return (
    <Button href={href} variant='text'>
      <Typography sx={{color: 'black', fontWeight: 600}}>{children}</Typography>
    </Button>
  )
}

function TopBar () {
  return (
    <AppBar position='static'>
      <Toolbar sx={{backgroundColor: '#34CF60'}}>
        <Box sx={{marginLeft: 'auto', marginRight: 'auto'}}>
          <PageButton href="/">Dates</PageButton>
          {/* <PageButton href="/faq">FAQ</PageButton> */}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default TopBar;