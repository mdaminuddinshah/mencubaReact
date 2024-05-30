import { useState } from 'react';
import Cards from './components/Cards';
import NewTodo from './components/NewTodo';


function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = ({title,description, gelak}) => {
    console.log({title, description, gelak})

    // kita buat object kita
    const newTodo = {
      id: Math.random().toString(),
      title, 
      description,
      checked: false
    }
    
    // kita masukkan object kita buat dlm array utk semua data
    // so awalnya todos ialah empty array []
    // lepastu kita tambah nwe array ke dalam todos
    setTodos((previous) => {
      return [newTodo, ...previous]
    })

  }

  return (
    <div>

      <pre>{JSON.stringify(todos, null, 2)}</pre>

      <NewTodo addNewTodo={addTodo}/>

      {
        todos.map((todos) => {
          return (
            <Cards 
                id={todos.id}
                key={todos.id}
                title={todos.title}
                description={todos.description}
                checked={todos.checked}
        //         toggle={(event) => {
        //           // why event.target.checked ??
        //           // for type number, string, we use target.value, bcs user insert the value number or string
        //           // but for checkbox, user click or not, so it either true or false
        //           // so here the checked props is variable to useState which is false
        //           // so the target default is false
        //           setTest(event.target.checked)
        // }}
      />
          )
        })
      }
      
    </div>
  )
}

export default App
