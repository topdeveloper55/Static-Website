import React from 'react';
import ReactDOM from 'react-dom';
import Stream from './components/Stream';

const pages = [
	{
		name: 'Home'
	},
	{
		name: 'About'
	},
	{
		name: 'Blog'
	}
];


ReactDOM.render(
	<Stream pages={pages} />,
	/* eslint-disable no-undef */
	document.getElementById('app')
);
