import { useStyles } from '../components/makestyle';
import { ToggleButton, ToggleButtonGroup, Toolbar, Box, AppBar, Divider, IconButton, MoreIcon, StyledFab, Typography, Button } from '@material-ui/core';
import { AccessAlarm, Stop } from '@material-ui/icons';
import { connect } from 'dva';
import styles from './index.css';

const mapStateToProps = state => {
  const ultronHeader = state['ultronHeader'];
  return {
    ultronHeader,
  };
};

export const HeaderStatus = ({ title, textObj, flag = 1, color = '#5E5E5E' }) => {
  return (
    <>
      <p style={{ paddingLeft: 20, paddingRight: 20 }}>
        <span style={{ fontSize: 16, fontWeight: 600, fontFamily: 'initial', color: '#666666' }}>{title}</span><br />
        <span style={{ fontSize: 18, fontWeight: 600, fontFamily: 'monospace', color: color }}> {textObj}</span>
      </p>
      <Divider orientation="vertical" variant="middle" flexItem />
    </>
  )
}

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
            <span style={{ fontSize: 28, fontWeight: 500, paddingLeft: 7, fontFamily: 'fantasy', color: '#404040' }}>Ultron</span>
            <Toolbar className={useStyles().floatRight}>
              <HeaderStatus title='HOST' textObj='https://www.baidu.com' />
              <HeaderStatus title='STATUS' textObj='RUNNING(100 users)' color='#6495ED' />
              <HeaderStatus title='RPS' textObj='22.5' />
              <HeaderStatus title='FAILURES' textObj='10%' />
              &nbsp;&nbsp;
              <Button variant="contained" size="large" color="error" startIcon={<Stop />}> STOP</Button>&nbsp;&nbsp;&nbsp;
              <Button variant="contained" size="large">Reset Starts</Button>
            </Toolbar>
          </p>
          <br />
        </AppBar>
      </div >
    </h1 >
  );
};

