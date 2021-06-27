import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import p00 from '../assets/plant/p00.png';
import Container from '@material-ui/core/Container';
import Typography from './components/Typography';
import TextField from './components/TextField';
import Snackbar from './components/Snackbar';
import Button from './components/Button';
import PlantImg from './PlantImg';
const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(10),
    marginBottom: 0,
    display: 'flex',
  },
  cardWrapper: {
    zIndex: 1,
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.palette.warning.main,
    padding: theme.spacing(8, 3),
  },
  cardContent: {
    maxWidth: 400,
  },
  textField: {
    width: '100%',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  button: {
    width: '100%',
  },
  imagesWrapper:{
  },
  [theme.breakpoints.up('md')]:{
    imagesWrapper: {
      position: 'relative',
    },
    imageDots: {
      position: 'absolute',
      top: -67,
      left: -67,
      right: 0,
      bottom: 0,
      width: '100%',
    },
  },
  meanWords:{
    fontSize:15
  }
});

function ProductCTA(props) {
  const { classes } = props;
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container className={classes.root} component="section">
      <Grid container>
        <Grid item xs={12} md={6} className={classes.cardWrapper}>
          <div className={classes.card}>
            <form onSubmit={handleSubmit} className={classes.cardContent}>
              <Typography variant="h2" component="h2" gutterBottom>
                Say Something
              </Typography>
              <Typography variant="h5">
                Revive this plant with your nice words.
              </Typography>
              <Typography variant="h6" className={classes.meanWords}>
                Or sadden it with your mean words.
              </Typography>
              <TextField noBorder className={classes.textField} placeholder="Your words" />
              <Button type="submit" color="primary" variant="contained" className={classes.button}>
                Say it
              </Button>
            </form>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={classes.imagesWrapper}>
            <div className={classes.imageDots} />
            <PlantImg happiness={51}/>
            {/* <img
              src={p00}
              alt="call to action"
              className={classes.image}
            /> */}
        </Grid>
      </Grid>
      <Snackbar
        open={open}
        onClose={handleClose}
        message="We will send you our best offers, once a week."
      />
    </Container>
  );
}

ProductCTA.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCTA);
