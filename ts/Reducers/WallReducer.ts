interface ICommentState{
	posted: string,
	comment_text: string,
	comment_id: number,
	time: string
}
export interface IWallState{
	id:number,
	username:string,
	time:string,
	content:string,
	likes:string[],
	comments:ICommentState[]
}
let gid=3;
let initialstate:IWallState[] = [];

export let WallReducer=(state:IWallState[]=initialstate,action)=>{
	switch(action.type){
		case "WALL_ADD":
			let newWall= {
				id:gid++,
				username:action.username,
				time:new Date().toString(),
				content:action.content,
				likes:[],
				comments: []
			};
			state = [
				...state,
				newWall
			]
			break;
		case "WALL_EDIT":
			state = state.map((wall)=>{
				if (wall.id==action.id){
					wall.content = action.content;
				}
				return wall;
			})
			break;
		case "WALL_DELETE":
			state = state.filter((wall)=>{
				if(wall.id==action.id){
					return false;
				}
				return true;
			})
			break;
		case "WALL_LIKE":
			state=state.map((wall)=>{
				if(wall.id==action.id){
					if(wall.likes.indexOf(action.username)==-1){
							wall.likes=[...wall.likes,action.username];
					}
				}
				return wall
			})
			break;
		case "COMMENT_ADD":
			let newComment : ICommentState= {
				comment_id:gid++,
				posted:action.name,
				time:new Date().toString(),
				comment_text: action.text
			};
			state = state.map((wall)=>{
				if (wall.id==action.id){
					wall.comments = [...wall.comments, newComment]
				}
				return wall
			})
			break;
		case "COMMENT_EDIT":
			state = state.map((wall)=>{
				if (wall.id==action.id){
					wall.comments = wall.comments.filter((comment)=>{
						if (action.comment_id==comment.comment_id)
							return false
						return true
					})
				}
				return wall
			})
			break;
		case "COMMENT_DELETE":
			state = state.map((wall)=>{
				if (wall.id==action.id){
					wall.comments = wall.comments.filter((comment)=>{
						if (action.comment_id==comment.comment_id)
							return false
						return true
					})
				}
				return wall
			})
			break;
	}
	return state;
};