export interface IWallState{
	id:number,
	username:string,
	time:string,
	content:string,
	likes:string[]
}
let gid=0;
let initialstate:IWallState[] = [];

export let WallReducer=(state:IWallState[]=initialstate,action)=>{
	switch(action.type){
		case "WALL_ADD":
			let newWall:IWallState = {
				id:gid++,
				username:action.name,
				time:new Date().toString(),
				content:action.content,
				likes:[]
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
		case "WALL_DELETE":
			state = state.filter((wall)=>{
				if(wall.id==action.id){
					return false;
				}
				return true;
			})
		case "WALL_LIKE":
			state=state.map((wall)=>{
				if(wall.id==action.id){
					if(wall.likes.indexOf(action.username)==-1){
							wall.likes=[...wall.likes,action.username];
					}
				}
				return wall
			})
	}
	return state;
};