import React, { useState } from 'react';
import { Box, Typography, AppBar, Toolbar, Stack, IconButton, Slider, styled, useTheme, Container } from '@mui/material'
import theme from '../styles/themeConfig';


import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded';
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';
import { green, purple } from '@mui/material/colors';

const CoverImage = styled('div')(({ theme }) => ({


    [theme.breakpoints.down("md")]: {
        width: 50,
        height: 50,
        objectFit: 'cover',
        overflow: 'hidden',
        flexShrink: 0,
        borderRadius: 4,
        backgroundColor: 'rgba(0,0,0,0.08)',
        '& > img': {
            width: '100%',
        },
    },
    [theme.breakpoints.up("md")]: {
        width: 100,
        height: 100,
        objectFit: 'cover',
        overflow: 'hidden',
        flexShrink: 0,
        borderRadius: 4,
        backgroundColor: 'rgba(0,0,0,0.08)',
        '& > img': {
            width: '100%',
        },
    }
}));
const SSlider = styled(Slider)(({ theme, ...props }) => ({


    [theme.breakpoints.down("md")]: {
        display: 'none'
    },
    [theme.breakpoints.up("md")]: {
        width:'690px'
    }
}));

const SName = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
        display: 'none'
    },
    [theme.breakpoints.up("md")]: {
        fontSize: '0.8rem',
        letterSpacing: 0.2,
        marginLeft: '6px'
    }

}));
const SAlbumName = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
        display: 'none',
        
    },
    [theme.breakpoints.up("md")]: {
        fontSize: '0.8rem',
        opacity: 0.5,
        marginLeft: '6px'
    }
}));
const TinyText = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
        display: 'none'
    },
    [theme.breakpoints.up("md")]: {
        fontSize: '0.75rem',
        opacity: 0.38,
        fontWeight: 500,
        letterSpacing: 0.2,
    }

}));

const Player = () => {
    const [paused, setPaused] = useState(false)

    return (
        <>
            <AppBar position='fixed' color="primary" sx={{ top: 'auto', bottom: 0 }}>
                <Toolbar component='div' sx={{justifyContent:'space-between'}}>

                    <Box component='div' sx={{ display: 'flex', alignItems: 'center' }} >
                        <CoverImage>
                            <img src='https://m.media-amazon.com/images/I/71n0xmxpw7L._SL1400_.jpg' alt='asd' />
                        </CoverImage>
                        <Box>
                            <SName noWrap >
                                <b>Nombre de cancion</b>
                            </SName>
                            <SAlbumName noWrap letterSpacing={-0.25} >
                                Nombre del autor-Album
                            </SAlbumName>
                        </Box>
                    </Box>
                    <Box component='div' sx={{ display: 'flex', flexDirection: 'column', MaxWidth: '700px',  }}>
                        <Box component='div'>
                            <SSlider />
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                mt: -2,
                            }}>
                                <TinyText>duracion00</TinyText>
                                <TinyText>duracion00</TinyText>
                            </Box>
                        </Box>
                        <Box component='div' sx={{ margin: 'auto' }}>
                            <IconButton aria-label="previous song">
                                <FastRewindRounded fontSize="large" />
                            </IconButton>
                            <IconButton
                                aria-label={paused ? 'play' : 'pause'}
                                onClick={() => setPaused(!paused)}
                            >
                                {paused ? (
                                    <PlayArrowRounded
                                        sx={{ fontSize: '3rem' }}

                                    />
                                ) : (
                                    <PauseRounded sx={{ fontSize: '3rem' }} />
                                )}
                            </IconButton>
                            <IconButton aria-label="next song">
                                <FastForwardRounded fontSize="large" />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box component='div'>
                        <Slider sx={{width:'100px'}}/>                
                    </Box>





                </Toolbar>
            </AppBar>
        </>
    )
}

export default Player