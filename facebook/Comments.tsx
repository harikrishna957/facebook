import * as React from 'react';
import {connect} from 'react-redux';
import {action} from '../ts/Actions/WallAction';
import {Comment} from './Comment';

export class _Comments extends React.Component<any, any> {
	private input;
	constructor() {
		super();
	}
	deletecomment(id, comment_id){
		this.props.deletecomment(id, comment_id);
	}
	render() {
		return <div>
			<Comment {...this.props}/>
			<br></br>
			<ul key={this.props.id}>{
				this.props.comments.map((comment)=>{
					return <li key={comment.comment_id} onClick={()=>{this.deletecomment(this.props.id, comment.comment_id)}}>{comment.posted} : {comment.comment_text}</li>
				})
				}
			</ul>
		</div>;
	}
};

let mapDispatchToProps = (dispatch) => {
	return {
		deletecomment(id, comment_id) {
			dispatch(action.delete_comment(id, comment_id));
		}
	}
}
export let Comments = connect(null, mapDispatchToProps)(_Comments);