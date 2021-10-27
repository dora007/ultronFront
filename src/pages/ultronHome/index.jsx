import React, { useState, useEffect } from 'react';
import { Tabs, Typography, Tab, Box, TableCell, Paper } from '@material-ui/core';
import { connect } from 'dva';
import { UltronHeader } from '../ultronHeaderPage/index'
import { UltronBar } from '../ultronBar/index'
import { UltronUsers } from '../ultronUsers/index'


const mapStateToProps = state => {
  const home = state['home'];
  return {
    home,
  };
};

const UltronHome = props => {
  const { dispatch } = props;
  const [value, setValue] = useState(0);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <UltronHeader />
      <UltronBar />
    </>
  );
};

export default connect(mapStateToProps, null)(UltronHome);