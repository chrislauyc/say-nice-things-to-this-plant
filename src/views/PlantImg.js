import React,{useEffect, useState} from 'react';
import imgPaths from './imgPaths';
import {
    Container,
    makeStyles,
    Grow,
    Paper
} from '@material-ui/core';
import Typography from './components/Typography';
const ms = 100;
const sleep=(ms)=>{
    return new Promise(resolve => setTimeout(resolve, ms));
}
const useStyles = makeStyles((theme)=>{
    return{
        container:{
            display:'flex',
            justifyContent: 'center',
            // border:'1px solid red',
            width:'100%',
            // [theme.breakpoints.down('sm')]:{
            //     width:'100%'
            // }
            position:'relative'
        },
        grow:{
            position:'absolute',
            padding:theme.spacing(3),
            margin:theme.spacing(2),
            zIndex:1
        },
        [theme.breakpoints.down('sm')]:{
            img:{
                width:'100%'
            }
        },
        [theme.breakpoints.up('md')]:{
            grow:{
                position:'absolute',
                top: -60,
                // left: -28,
                // right: 0,
                // bottom: 0,
                // color:'red'
            },
            img:{
                position: 'absolute',
                top: -28,
                left: -28,
                right: 0,
                bottom: 0,
                width: '100%',
                maxWidth: 600,
            }
        },

    };
});

const PlantImg=(props)=>{
    const classes = useStyles()
    const [currentState,setCurrentState] = useState(props.happiness);
    const [isPopUp,setIsPopUp] = useState(false);
    const [popUpText,setPopUpText] = useState('');
    const [initialized,setInitialized] = useState(false);
    const animate = async ()=>{
        const step = currentState>props.happiness?-1:1;
        await sleep(ms);
        setCurrentState(currentState+step);
    };
    const popUp = async ()=>{
        setIsPopUp(true);
        await sleep(2000);
        setIsPopUp(false);
        setPopUpText('');
    };
    if(currentState!==props.happiness){
        animate();
    }
    useEffect(()=>{
        if(initialized&&props.happiness!==currentState){
            popUp();
            setPopUpText(currentState>props.happiness?'Bobby feels sadder!':'Bobby feels happier!');
        }
        else if(!initialized&&props.happiness===currentState){
            setInitialized(true);
        }
    },[props.happiness,initialized,currentState])
    return(
        <Container className={classes.container}>
        <>
            <Grow in={isPopUp&&popUpText!==''} className={classes.grow}>
                <Paper elevation={4}>
                    <Typography variant="h4" component="h2">
                        {popUpText}
                    </Typography>
                    {/* <svg className={classes.svg}>
                        <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
                    </svg> */}
                </Paper>
            </Grow>
            {
                imgPaths.map((state,i)=><img className={classes.img} key={i} src={state} style={{display:i===currentState?'block':'none'}} alt='plant'/>)
            }


        </>
        </Container>
    );
};
export default PlantImg;