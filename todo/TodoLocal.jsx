 const TodoKey="reactTodo";
 export const getTodoLocal=()=>{
      const rawTodos=localStorage.getItem(TodoKey);
          if(!rawTodos) return [];
          // if data nhi h to bs aise hi retunr krdo
          return JSON.parse(rawTodos);
    }
    export const setTodoLocal=(task)=>{
        //  todo add data to local storage
localStorage.setItem(TodoKey,JSON.stringify(task));
    }