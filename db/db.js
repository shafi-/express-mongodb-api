let todos = [
	{
		id: 1,
		title: "Salat",
		description: "Pray dhohor salat in time"
	},
	{
		id: 2,
        title: "lunch",
        description: "Go for lunch after Salat"
	}
];

let insert = function (todo) {
    todos.push(todo);
};

let find = function(id){
    return todos.filter(t => t.id === id);
};

let replace = (id, item) => {
    let l = todos.length;
    console.log('item in todo ' + l);
    for(let i=0; i < l; i++){
        console.log(i, todos[i]);
        if(todos[i].id === id){
            todos[i] = item;
            return true;
        }
    }
    return false;
};

let deleteTodo = function (id) {
    let prev = todos.length;
    console.log('B4 delete ' + prev);
    let index = -1;
    let todos1 = todos.filter((t,idx) => {
        const notMatched = parseInt(t.id) !== parseInt(id);
        if(notMatched) {
            console.log(t);
            index = idx;
        }
        return notMatched;
    });
    todos.slice(index,1);
    console.log(todos1);
    let curr = todos.length;
    console.log('After ' + curr);
    return (prev - curr);
};

export default {
    data: todos, insert, replace, deleteTodo, find
};