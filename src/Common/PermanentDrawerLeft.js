import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import VideogameAsset from '@material-ui/icons/VideogameAsset';
import LayersIcon from '@material-ui/icons/Layers'
import HelpIcon from '@material-ui/icons/Help'
import PeopleIcon from '@material-ui/icons/People'
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

export class PermanentDrawerLeft extends React.Component {
  state = {
    open: true,
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render(){
  const { classes } = this.props;
  return (
    <div className={styles.root}>
      <CssBaseline />
      <Drawer
        className={styles.drawer}
        variant="permanent"
        classes={{
          paper: styles.drawerPaper,
        }}
        anchor="left"
      >
        <div className={styles.toolbar} />
        <Divider />
        <List
          className={styles.root}
        >
            <ListItem button key={'Console'}>
                <ListItemIcon><VideogameAsset /></ListItemIcon>
                <ListItemText primary={'Console'} />
            </ListItem>
            <ListItem button onClick={this.handleClick} key={'Categories'}>
                <ListItemIcon><LayersIcon /></ListItemIcon>
                <ListItemText primary={'Categories'} />
                {this.state.open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                <ListItem button className={styles.nested}>
              <ListItemText inset primary="Starred" />
            </ListItem>
            </List>
        </Collapse>
            <Divider />
            <ListItem button key={'About'}>
                <ListItemIcon><PeopleIcon /></ListItemIcon>
                <ListItemText primary={'About'} />
            </ListItem>
            <ListItem button key={'Help'}>
                <ListItemIcon><HelpIcon /></ListItemIcon>
                <ListItemText primary={'Help'} />
            </ListItem>
        </List>
      </Drawer>
      </div>
      );
}
}
PermanentDrawerLeft.propTypes = {
  classes : PropTypes.object.isRequired,
};

export default withStyles(styles)(PermanentDrawerLeft);