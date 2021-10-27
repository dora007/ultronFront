import { useStyles } from '../components/makestyle';
import { ToggleButton, ToggleButtonGroup, Toolbar, Box, AppBar, Divider, IconButton, MoreIcon, StyledFab, Typography, Button } from '@material-ui/core';
import { AccessAlarm, Stop } from '@material-ui/icons';
import { connect } from 'dva';
import styles from './index.css';
import { UltronUsers } from '../ultronUsers/index'
import { useState } from 'react';

const mapStateToProps = state => {
  const ultronHeader = state['ultronHeader'];
  return {
    ultronHeader,
  };
};

export const HeaderStatus = ({ title, textObj, flag = 1, color = '#5E5E5E', openEditUser = 'null' }) => {
  return (
    <>
      <p style={{ paddingLeft: 20, paddingRight: 20 }}>
        <span style={{ fontSize: 14, fontWeight: 600, fontFamily: 'initial', color: '#666666' }}>{title}</span><br />
        <span style={{ fontSize: 17, fontWeight: 600, fontFamily: 'monospace', color: color }}> {textObj}</span><br />
        {title == 'STATUS' ? <a style={{ fontSize: 17, fontWeight: 400, fontFamily: 'monospace', color: '#6495ED' }} onClick={() => openEditUser()}>New Test</a> : ''}
      </p>
      <Divider orientation="vertical" variant="middle" flexItem />
    </>
  )
}

export const UltronHeader = props => {
  const { dispatch } = props;
  const [open, setOpen] = React.useState(true);


  const handleClose = () => {
    setOpen(false);
  };

  const openEditUser = () => {
    setOpen(true)
  }

  const handleOk = (e) => {

  }


  return (
    <>
      <UltronUsers open={open} handleClose={handleClose} handleOk={handleOk} />
      <h1 className={styles.title}>
        <div>
          <AppBar position="fixed" className={useStyles().headerBg}>
            <p>
              <img src="./spaceman.png" width="45" style={{ paddingLeft: 30 }}></img>
              <span style={{ fontSize: 28, fontWeight: 700, paddingLeft: 7, fontFamily: 'fantasy', color: '#404040' }}>Ultron</span>
              <Toolbar className={useStyles().floatRight}>
                <HeaderStatus title='HOST' textObj='https://www.baidu.com' />
                <HeaderStatus title='STATUS' textObj='RUNNING(100 users)' openEditUser={openEditUser} />
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
    </>
  );
};

