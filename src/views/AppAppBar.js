import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBar from './components/AppBar';
import Toolbar, { styles as toolbarStyles } from './components/Toolbar';
import grey from '@material-ui/core/colors/grey';
const styles = (theme) => ({
  icon: {
    fontSize:40,
  },
  title: {
    fontSize: 24,
    // fontFamily: "'Kirang Haerang', cursive",
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
    backgroundColor:grey[900]
  },
  left: {
    flex: 1,
    // border: '1px solid red'
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    // border: '1px solid red'
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
});

function AppAppBar(props) {
  const { classes } = props;

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left}>
            <span className={`material-icons-outlined ${classes.icon}`}>yard</span>
          </div>
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.title}
            href="/premium-themes/onepirate/"
          >
            {'Say Nice Things to This Plant'}
          </Link>
          <div className={classes.right}>
            {/* <Link
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.rightLink}
              href="/premium-themes/onepirate/sign-in/"
            >
              {'Sign In'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink, classes.linkSecondary)}
              href="/premium-themes/onepirate/sign-up/"
            >
              {'Sign Up'}
            </Link> */}
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);
