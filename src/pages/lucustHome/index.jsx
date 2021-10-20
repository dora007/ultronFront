import React, { useState, useEffect } from 'react';
import { Tabs, Typography, Tab, Box, TableCell, Paper } from '@material-ui/core';
import { useStyles } from '../lucustHome/makestyle';
// import { ReactVirtualizedTable } from '../components/table';
import { connect } from 'dva';

function TabPanel(props) {
	const { children, value, index, ...other } = props;
	return (
		<div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

const mapStateToProps = state => {
	const home = state['home'];
	return {
		home,
	};
};

const Home = props => {
	const { dispatch } = props;
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: '100%' }}>
			<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
				<Tabs value={value} onChange={handleChange} centered className={useStyles().root}>
					<Tab label="Statistics" {...a11yProps(0)} />
					<Tab label="Charts" {...a11yProps(1)} />
					<Tab label="Failures" {...a11yProps(2)} />
					<Tab label="Exceptions" {...a11yProps(3)} />
					<Tab label="Download Data" {...a11yProps(4)} />
				</Tabs>
			</Box>
			<TabPanel value={value} index={0}>
				Item One
			</TabPanel>
			<TabPanel value={value} index={1}>
				Item Two
			</TabPanel>
			<TabPanel value={value} index={2}>
				Item Three
			</TabPanel>
			<TabPanel value={value} index={3}>
				Item four
			</TabPanel>
			<TabPanel value={value} index={4}>
				Item five
			</TabPanel>
		</Box>
	);
};

export default connect(mapStateToProps, null)(Home);
