import React from 'react';
import { styled } from '@mui/system';
import { Button, Typography, Box, BoxProps } from '@mui/material';
import { Link } from 'react-router-dom';
import marvel_image from '../../assets/Images/marvel-image.jpeg'
import marvel_avengers from '../../assets/Images/characters-image2.jpeg'

interface Props{
    title: string;
}

const Root = styled('div')({
    padding: 0,
    margin: 0
})

const NavbarContainer = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
})

const LogoNavigation = styled('ul')({
    listStyle: 'none',
    textTransform: 'uppercase',
    textDecoration: 'none',
    display: 'flex'
})

const NavA = styled(Link)({
    display: 'block',
    padding: '1em',
    color: 'black'
})


const Header = styled(Box)({
    backgroundImage: `url(${marvel_image})`,
    width: '100%',
    height: '60%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'absolute',
    display: 'block'
})

const Feature = styled('div')({
    padding: 0,
    margin: 0
})

const MainText = styled(Item)({
    textAlign: 'center',

    margin: '5%',
    width: '40%'
})


const ImageFeature = styled(Item)({
    backgroundImage: `url(${marvel_avengers})`,
    margin: '5%',
    width: 400,
    height: 267,
  
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    
})

function Item(props: BoxProps) {
    const { sx, ...other } = props;
    return (
      <Box
        sx={{
          p: 1,
          m: 1,
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '300',
          ...sx,
        }}
        {...other}
      />
    );
  }
export const Home = (props:Props) => {

    return( 
        <Root>
            <NavbarContainer>
                <LogoNavigation>
                    <li>
                        <NavA to='/'>Home</NavA>
                    </li>
                    <li>
                        <NavA to='/dashboard'>Dashboard</NavA>
                    </li>
                    <li>
                        <NavA to='/signin'>SignIn</NavA>
                    </li>
                </LogoNavigation>
            </NavbarContainer>
            <Header />
            <Box
                sx={{
                display: 'flex',
                flexDirection: 'row',
                p: 1,
                m: 1,
                borderRadius: 1,
                marginTop: 40
                }}
            >
                <ImageFeature />
                <MainText>
                    <Typography align ='center' variant='h3' style={{paddingBottom:10}}>{props.title}</Typography>
                    <p>Create your own dream team! This API allows you to build your own Marvel superhero team. Fully customizable to your liking!</p>
                    <Button style={{marginTop:10}} color='primary' variant='contained' component={Link} to='/dashboard'>Create Characters</Button> 
                </MainText>
            </Box>
    </Root>
    
  );
}

