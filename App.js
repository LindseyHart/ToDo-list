import React from "react";
import "./styles.css";
import TodoForm from "./form";
import Todo from "./todo";

function App(){
    const [todos, setTodos] = React.useState([
      {
        text: 'learn react',
        isCompleted: false,
      },
      {
        text: 'build todo app',
        isCompleted: false,
      },
      {
        text: 'take dog for a walk',
        isCompleted: false,
      }        
    ])
    
    const addTodo = (text) => {
      const newTodos = [...todos, {text:text, isCompleted:false}];
      setTodos(newTodos);
    }
  
    const removeTodo = index => {
      let temp = [...todos];
      temp.splice(index,1);
      setTodos(temp);
    }
  
    return(
      <div className="app">
        <div className="todo-list">
            {todos.map((todo, i) => 
                  <Todo index={i} key={i} todo={todo} remove={removeTodo} />)}
            <TodoForm addTodo={addTodo}/>
        </div>
      </div>  
    );
  }

  export default App;