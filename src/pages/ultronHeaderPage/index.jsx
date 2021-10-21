import styles from './index.css';
import { useStyles } from '../components/makestyle';
import { ToggleButton, ToggleButtonGroup, Toolbar, Box, AppBar, MenuIcon, IconButton, MoreIcon, StyledFab, Typography, Button } from '@material-ui/core';
import { AccessAlarm, Stop } from '@material-ui/icons';
import { connect } from 'dva';

const mapStateToProps = state => {
  const ultronHeader = state['ultronHeader'];
  return {
    ultronHeader,
  };
};

export const UltronHeader = props => {
  const { dispatch } = props;
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <h1 className={styles.title}>
      <div>
        <AppBar position="fixed" className={useStyles().headerBg}>
          <p>
            <img src="./spaceman.png" width="45" style={{ paddingLeft: 30 }}></img>
            <span style={{ fontSize: 28, fontWeight: 500, paddingLeft: 7, fontFamily: 'fantasy', color: '#9E9E9E' }}>Ultron</span>
            <Toolbar className={useStyles().floatRight}>
              <Button variant="contained" size="large" color="error" startIcon={<Stop />}> STOP</Button>&nbsp;&nbsp;&nbsp;
              <Button variant="contained" size="large">Reset Starts</Button>
            </Toolbar>
          </p>
          <br />
        </AppBar>
      </div>
    </h1 >
  );
};

