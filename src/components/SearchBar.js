import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import GitHubIcon from '@mui/icons-material/GitHub';
import { AppBar, Toolbar, Typography, styled, Box, InputBase, InputAdornment, IconButton } from '@mui/material';

const SAppBar = styled(AppBar)(({ theme, ...props }) => ({
  position: 'fixed'
}))
const Offset = styled('div')(({ theme }) => theme.mixins.toolbar)

const SearchBar = () => {
  return (
   <>
   <SAppBar>
   <Toolbar >
       <Typography
        variant="h4"
        color='primary'
        sx={{
          flexGrow:'1',
        }}
        >
         MusicApp
        </Typography>
        <InputBase  
          placeholder='Search...'
          id='search'
          endAdornment={
            <InputAdornment position='end'>
            <IconButton color='primary'>
              <SearchIcon/>
            </IconButton>
            </InputAdornment>
          }
          sx={{
            flexGrow:'1',
          }}
        />
        <Box component='div' sx={{
          flexGrow:'1',
          display:'flex',
          alignItems: 'flex-end',
          
        }}>
        <IconButton 
        color='primary'
        href='https://github.com/kiraxx11'
        >
          <GitHubIcon />
        </IconButton>
        </Box>
     </Toolbar>
   </SAppBar>
   <Offset/>
   </>
  );
}
export default SearchBar