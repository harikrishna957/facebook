export let action={
	add(username,content){
		return {
			type:"WALL_ADD",
			username,
			content
		}
	},
	delete(id){
		return {
			type:"WALL_DELETE",
			id
		}
	},
	edit(id,content){
		return{
			type:"WALL_EDIT",
			id,
			content
		}
	},
	like(id,username){
		return {
			type:"WALL_LIKE",
			id,
			username
		}
	}	
}