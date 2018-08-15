import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    color: '#fff',
    fontSize: '1em',


  },
  input: {
    display: 'none',
  },
});

function NavButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Button className={classes.button} href={props.href}>{props.con}</Button>
    </div>
  );
}

NavButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavButtons);
