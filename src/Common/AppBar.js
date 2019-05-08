import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { CategoriesScreen } from '../Common/categories'
import MenuIcon from '@material-ui/icons/Menu';
import {withRouter} from 'react-router';
import logo2 from '../Logo3.png';
import compose from 'recompose';
import {
    Link
  } from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

export class ButtonAppBar extends React.Component {
  render(){
    const { children } = this.props;
  return (
    <div className={styles.root}>
      <AppBar position="static" style = {{backgroundColor: "rgb(68, 26, 68)"}}>
        <Toolbar>
          <Typography variant="h6" color="inherit" className={styles.grow}>
            <Button
              to = '/'
              component={Link}
            ><img  style = {{height: '50px', width: 'auto', marginTop: '5px'}}src={logo2} className="App-logo" alt="logo" /> </Button>
            </Typography>
 
           <div style = {{marginLeft: '55%', color:"grey"}}><Button
                to= 'categories'
                component={Link}
                style={{color:"grey"}}

            >Categories</Button>
          <Button color="inherit"
              to = 'ratings'
              component = {Link}
          >Rating</Button>
          <Button color="inherit"
                  to = 'about'
                  component ={Link}
          >About</Button>
          </div>
        </Toolbar>
      </AppBar>
      <main className={styles.content}>{children}</main>
    </div>
  );
}
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withRouter((withStyles(styles)(ButtonAppBar)));