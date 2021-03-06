import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing.unit * 2,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});

export class ControlledOpenSelect extends React.Component {
  state = {
    item: '',
    open: false,
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    this.props.onItemSelect(event.target.value);
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;

    return (
      <form autoComplete="off">
        <FormControl className={classes.formControl}>
          
          <Select
            open={this.state.open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={this.state.item}
            onChange={this.handleChange}
            inputProps={{
              name: 'item',
              id: this.props.listId,
            }}
          >
            { this.props.listItems.map(item => <MenuItem value={item} key= {item}>{item}</MenuItem>) }
          </Select>
        </FormControl>
      </form>
    );
  }
}

ControlledOpenSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledOpenSelect);
