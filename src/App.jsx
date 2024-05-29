import { useState } from 'react';
import Cards from './components/Cards';
import NewTodo from './components/NewTodo';


function App() {
  const [test, setTest] = useState(false)

  const mockData = [
    { 
      id: "1",
      title: "1st",
      description: "1st",
      checked: true
    },
    { 
      id: "2",
      title: "2st",
      description: "2st",
      checked: false
    },
  ]

  return (
    <div>
      <NewTodo />

      {
        mockData.map((todos) => {
          return (
            <Cards 
                id={todos.id}
                key={todos.id}
                title={todos.title}
                description={todos.description}
                checked={todos.checked}
                toggle={(event) => {
                  // why event.target.checked ??
                  // for type number, string, we use target.value, bcs user insert the value number or string
                  // but for checkbox, user click or not, so it either true or false
                  // so here the checked props is variable to useState which is false
                  // so the target default is false
                  setTest(event.target.checked)
        }}
      />
          )
        })
      }
      
    </div>
  )
}

export default App
