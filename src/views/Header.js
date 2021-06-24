import React from 'react';
import {
    AppBar,
    Toolbar,
    Tooltip,
    IconButton,
    Typography,
    withStyles,
} from '@material-ui/core';


import CodeIcon from '@material-ui/icons/Code';
import {grey} from '@material-ui/core/colors';
import {theme} from './theme';
const styles={
    icon: {
      marginRight: theme.spacing(2),
      fontSize:70,
    //   border:'1px red solid',
      [theme.breakpoints.down('sm')]:{
          flexGrow:1
      }
    },
    codeIcon:{
        marginLeft:theme.spacing(2),
        color:'white',
        backgroundColor:grey[800],
        '&:hover':{
            backgroundColor:grey[600]
        },
    },
    toolbar:{
        flexWrap:'wrap',
        maxWidth:'100%'
    },
    title:{
        flexGrow:1,
        fontFamily: "'Kirang Haerang', cursive",
        // border:'1px red solid',
        textAlign:'center',
        padding:'2%',
        [theme.breakpoints.down('sm')]:{
            order:3,
            width:'100%',
            flexGrow:0
        }
    },

};
class Header extends React.Component{
    handleClickHome=()=>{
        this.props.history.push('/');
    }
    render(){
        const {classes} = this.props;
        const {handleClickHome} = this;
        return(
            <header>
                <AppBar position="relative" >
                    <Toolbar className={classes.toolbar}>
                            {/* <GitHubIcon className={classes.icon} /> */}
                            <span className={`material-icons-outlined ${classes.icon}`}>yard</span>
                            <Typography className={classes.title} onClick={handleClickHome} variant="h3" component='h1' color="inherit" >
                                Say Nice Things to This Plant!
                            </Typography>
                            <Tooltip className={classes.codeIcon} title='Source Code'>
                                <IconButton href='https://github.com/chrislauyc/say-nice-things-to-this-plant'>
                                    <CodeIcon />
                                </IconButton>
                            </Tooltip>
                    </Toolbar>
                </AppBar>
            </header>
        );
    }
}
export default withStyles(styles)(Header);