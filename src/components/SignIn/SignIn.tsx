import React, {useState} from 'react';
import firebase from 'firebase/app'
import useSignInCheck from 'reactfire';
import {useAuthState, useSignInWithGoogle} from 'react-firebase-hooks/auth';
import { getAuth, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth';
import {
    Container,
    Button,
    Typography,
    Snackbar,
    Alert as MUIAlert,
    AlertProps,
    AlertTitle,
    CircularProgress,
    Grid,
    CssBaseline,
    Box,
    BoxProps
} from '@mui/material';
import { styled } from '@mui/system';
import {useNavigate} from 'react-router-dom';
import { Input } from '../sharedComponents';
import avengers_image from '../../assets/Images/marvel-avengers2.jpeg'

const signinStyles = {
    googleButton:{
        backgroundColor: 'rgb(66,133,244)',
        margin: '2em',
        padding: '0',
        color: 'white',
        height: '50px',
        width: '240px',
        border: 'none',
        textAlign: 'center',
        boxShadow: 'rgb(0 0 0 / 25%) 0px 2px 4px 0px',
        fontSize: '16px',
        lineHeight: '48px',
        display: 'block',
        borderRadius: '1px',
        fontFamily: 'Roboto, arial, sans-serif',
        cursor: 'pointer'
    },
    googleLogo:{
        width: '48px',
        height: '48px',
        display: 'block'
    },
    typographyStyle: {
        fontFamily: 'Roboto, arial, sans-serif;',
        textAlign: 'center',
        fontSize: '2em'
    },
    containerStyle: {
        marginTop: '2em'
    },
    snackBar: {
        color: 'white',
        backgroundColor: '#4caf50'
    }
}
function Item(props: BoxProps) {
    const { sx, ...other } = props;
    return (
      <Box
        {...other}
      />
    );
  }

// Functional components to be used inside of SignIn Component
const Alert = (props:AlertProps) =>{
    return (
        <MUIAlert elevation={6} variant='filled'/>
    )
}

interface buttonProps{
    open: boolean,
    onClick: () => void
}

//Functional component to conditionally render Google SignIn Button
const GoogleButton = (props:buttonProps) =>{
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();
    const  auth = getAuth();
    const [SignInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
   
    const signIn = async () => {
        const response = await SignInWithGoogle();
        navigate('/dashboard')
    }
    const signUsOut = async () =>{
        await signOut(auth)
        navigate('/')
    }

    if (loading){
        return <CircularProgress />
    }
    if (user){
        return (
            <Button variant='contained' color='secondary' onClick={signUsOut}>Sign Out</Button>
        )
    } else {
        return(
            <Button sx={signinStyles.googleButton} onClick={signIn}>Sign In With Google</Button>
        )
    }
}

const SignInImage = styled(Item)({
    backgroundImage: `url(${avengers_image})`,
    width: 400,
    height: 711,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    
})


export const SignIn = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleSnackOpen = () =>{
        setOpen(true)
    }
    const handleSnackClose = () =>{
        setOpen(false)
        navigate('/dashboard')
    }

    return (
    <div style={{ width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >
        <SignInImage />
        <Container maxWidth='sm' sx={signinStyles.containerStyle}>
           <Typography sx={signinStyles.typographyStyle}>
               Sign In Below
           </Typography>
           <form>
               <div>
                   <label htmlFor="email">Email</label>
                   <Input name='email' placeholder='place email here' />
               </div>
               <div>
                   <label htmlFor="password">Password</label>
                   <Input name='password' placeholder='place password here' />
               </div>
               <Button type='submit' variant='contained' color='primary'>Submit</Button>
           </form>

           <GoogleButton open ={open} onClick={handleSnackClose}/>
           <Snackbar message='Success' open ={open} autoHideDuration={3000}>
               <Alert severity='success'>
                   <AlertTitle>Successful Sign In -- Redirect in 3 Seconds</AlertTitle>
               </Alert>
           </Snackbar>
        </Container>
      </Box>
      
    </div>
  );
}

    
