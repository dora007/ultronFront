import React, { useState, useEffect } from 'react';
import { Tabs, Typography, Tab, Box, TableCell, Paper } from '@material-ui/core';
import { connect } from 'dva';
import { UltronHeader } from '../ultronHeaderPage/index'
import { UltronBar } from '../ultronBar/index'


const mapStateToProps = state => {
  const home = state['home'];
  return {
    home,
  };
};

const UltronHome = props => {
  const { statisticData } = props.home;
  const { dispatch } = props;
  const [value, setValue] = useState(0);

  const getChartStatic = () => {
    alert('11')
    dispatch({
      type: 'home/getChartsStatistic',
    });
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <UltronHeader />
      <UltronBar getChartStatic={getChartStatic} />
    </>
  );
};

export default connect(mapStateToProps, null)(UltronHome);