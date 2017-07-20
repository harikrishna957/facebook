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
	},
	add_comment(name, text, id){
		return{
			type: "COMMENT_ADD",
			name,
			text,
			id,
		}
	},
	delete_comment(id, comment_id){
		return{
			type: "COMMENT_DELETE",
			id,
			comment_id
		}
	}	
}