import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import amber from '@material-ui/core/colors/amber';
import indigo from '@material-ui/core/colors/indigo';
export default withStyles((theme) => ({
  root: {
    // borderRadius: 0,
    fontWeight: theme.typography.fontWeightBold,
    fontFamily: theme.typography.fontFamilySecondary,
    padding: theme.spacing(2, 4),
    fontSize: theme.typography.pxToRem(14),
    boxShadow: 'none',
    '&:active, &:focus': {
      boxShadow: 'none',
    },
    
  },
  sizeSmall: {
    padding: theme.spacing(1, 3),
    fontSize: theme.typography.pxToRem(13),
  },
  sizeLarge: {
    padding: theme.spacing(2, 5),
    fontSize: theme.typography.pxToRem(16),
  },
  textPrimary:{
    color:theme.palette.common.white
  },
  textSecondary:{
    color:indigo[600]
  },
  containedPrimary:{
    backgroundColor:indigo[600],
    '&:hover':{
      backgroundColor:indigo[300]
    }
  },
  containedSecondary: {
    backgroundColor:amber[700],
    '&:hover':{
      backgroundColor:amber[300]
    }
  }
}))(Button);
