import * as React from 'react';
import {connect} from 'react-redux';
import {action} from '../ts/Actions/WallAction';


class _Post extends React.Component<any, any> {
	private input;
	constructor() {
		super();
		this.post = this.post.bind(this);
	}

	post(){
		this.props.addPost(Window.UserName, this.input.value);
		this.input.value = "";
	}
	render() {
		return <div className="post">
			<textarea ref={(ref)=>{this.input=ref;}} placeholder="Update Your Status"></textarea>
			<div><span onClick={this.post}>Post</span></div>
		</div>;
	}
};

let mapDispatchToProps = (dispatch) =>{
	return {
		addPost(username, content) {
			dispatch(action.add(username, content));
		}
	}
}
export let Post = connect(null, mapDispatchToProps)(_Post);