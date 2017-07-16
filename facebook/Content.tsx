import * as React from 'react';
import {Connectetdcomponent} from './Walls';

export let Content = (props)=> {
	return <div className="MainContent">
		<div className="left"></div>
		<div className="middle">
			<Connectetdcomponent />
		</div>
		<div className="right"></div>
	</div>
};