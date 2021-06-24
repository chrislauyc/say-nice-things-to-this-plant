import React from 'react';
import {
    Container,
    Typography,
    makeStyles
} from '@material-ui/core';
const useStyles=makeStyles(theme=>{
    return{
        icon: {
            marginRight: theme.spacing(2),
        },
        heroContent: {
            padding: theme.spacing(8, 0, 0),
        },
        heroButtons: {
            marginTop: theme.spacing(0),
        },
        startButton:{
            '&:hover': {
                backgroundColor:grey[600]
                }
        },
        // mainContainer:{
        //     backgroundColor:fade(grey[50],0.5),
        //     minHeight: '100vh',
        // }
    };
});
const Hero=()=>{
    const classes = useStyles();
    return(
        <Container>
            <div className={classes.heroContent}>
                
            </div>
            <div>
            </div>   
        </Container>
    );
};
export default Hero;