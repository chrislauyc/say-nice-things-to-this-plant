import React,{useState} from 'react';
import imgPaths from './imgPaths';
import {
    Container,
    makeStyles
} from '@material-ui/core';
import {theme} from './theme';
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

        },
        [theme.breakpoints.down('sm')]:{
            img:{
                width:'100%'
            }
        },
        [theme.breakpoints.up('md')]:{
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
    const animate = async ()=>{
        const step = currentState>props.happiness?-1:1;
        await sleep(ms);
        setCurrentState(currentState+step);
    }
    if(props.happiness!==currentState){
        animate();
    }
    return(
        <Container className={classes.container}>
        {
            imgPaths.map((state,i)=><img className={classes.img} key={i} src={state} style={{display:i===currentState?'block':'none'}} alt='plant'/>)
        }
        </Container>
    );
};
export default PlantImg;