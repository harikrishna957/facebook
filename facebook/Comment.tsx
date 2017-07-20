import * as React from 'react';
import {connect} from 'react-redux';
import {action} from '../ts/Actions/WallAction';


class _Comment extends React.Component<any, any> {
	private input;
	constructor() {
		super();
		this.addcomment = this.addcomment.bind(this);
	}
	addcomment(){
        this.props.addcomment(Window.UserName, this.input.value, this.props.id);
		this.input.value = "";
	}
	render(){
		return <div>
			<input ref={(ref)=>{this.input=ref;}} placeholder="Enter your comments"/>
			<span onClick={this.addcomment}> Comment</span>
		</div>;
	}
};

let mapDispatchToProps = (dispatch) =>{
	return {
		addcomment(name, text, id) {
			dispatch(action.add_comment(name, text, id));
		}
	}
}
export let Comment = connect(null, mapDispatchToProps)(_Comment);