import * as React from 'react';

export let NavBar = (props)=> {
	return <div className="total">
		<div className="navbar">
			<div>
				<span className="logo">{props.logo}</span>
				<input type="text" onChange={(e)=>{Window.UserName=e.target.value}}/>
			</div>
			<div>M N S</div>
		</div>
	</div>
};