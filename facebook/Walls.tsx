import * as React from 'react';
import {Post} from './Post';
import {connect} from "react-redux";
import {IRootState} from '../ts/Reducers/RootReducer';
import {action} from '../ts/Actions/WallAction';
import {Comments} from './Comments';
class Walls extends React.Component<any, any> {
	render() {
		// react_props_wall
		return <div>
			<Post/>
			{
				this.props.react_props_walls.map((wall)=>{
					return <Wall key={wall.id} {...wall} delete={()=>{
						this.props.deletepost(wall.id);
					}} />
				})
			}
		</div>;
	}
};

let mapstatetoprops=(state: IRootState)=>{
	return {
		react_props_walls: state.walls
	};
}
let mapdispatchtoprops=(dispatch)=>{
	return {
		deletepost(id){
			dispatch(action.delete(id));
		}
	}
}
export let Connectetdcomponent=connect(mapstatetoprops,mapdispatchtoprops)(Walls);

let Wall = (props)=> {
	return <div className="wall">
		<div className="header">
			<div>
				<div className="u_id">{props.username}</div>
				<div className="time">{props.date}</div>
			</div>
			<div><span className="remove" onClick={props.delete}>X</span></div>
		</div>
		<hr style={{height: 1, backgroundColor: "grey", opacity: 0.5}}/>
		<div className="content">
			{props.content}
		</div>
		<div className="footer">
			<button className="like">{props.likes.length}</button>
			<Comments {...props}/>
		</div>
	</div>;
};
