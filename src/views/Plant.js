import React,{useState,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postText } from '../state/actions';
import PlantImg from './PlantImg';
import {
    TextField,
    FormControl,
    FormHelperText,
    Button,
    makeStyles,
    Grid,
    Container,
    Paper,
} from '@material-ui/core';
import {theme} from './theme';
const useStyles = makeStyles(()=>{
    return{
        root:{
            marginBottom:theme.spacing(4),
            border:'1px red solid'
        },
        formContainer:{
            display:'flex',
            justifyContent:'center'
        }
    };
});
const Plant=()=>{
    const classes = useStyles();
    const [happiness,setHappiness] = useState(20);
    const [text, setText] = useState('');
    const {type,apiCount} = useSelector(state=>state);
    const dispatch = useDispatch();
    const handleChange=(e)=>{
        setText(e.target.value);
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(text !== ''){
            dispatch(postText(text));
        }
    };
    useEffect(()=>{
        if(type==='positive'){
            setHappiness(prevHappiness=>Math.min(prevHappiness+5,51));
        }
        else if(type==='negative'){
            setHappiness(prevHappiness=>Math.max(prevHappiness-5,0));
        }
        else{
            //do nothing if neither
        }
    },[type,apiCount]);
    return(
        <Container className={classes.root}>
            <Paper>
                <PlantImg happiness={happiness}/>
                <Container className={classes.formContainer}>
                    <form noValidate autoComplete='off' onSubmit={handleSubmit}>
                        <Grid container direction='column' justify='center' alignItems='center'>    
                            <Grid item>                                
                                <FormControl>
                                    <TextField 
                                        id='component-helper'
                                        label='Text'
                                        value={text}
                                        onChange={handleChange}
                                        aria-describedby='component-helper-text'
                                        multiline={true}
                                    />
                                    <FormHelperText id='component-helper-text'>Say something nice!</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item>
                                <Button type='submit'>Say</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Container>
            </Paper>
            {/* <TextField multiline={true} label={'Say something'} /> */}
        </Container>
    );
};  
export default Plant;