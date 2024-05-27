import { useState } from 'react';
import Cards from './components/Cards';


function App() {
  const [test, setTest] = useState(false)

  return (
    <div>
      <Cards 
        id={1}
        title="Hello"
        description="Test this out"
        checked={test}
        toggle={(event) => {
          // why event.target.checked ??
          // for type number, string, we use target.value, bcs user insert the value number or string
          // but for checkbox, user click or not, so it either true or false
          // so here the checked props is variable to useState which is false
          // so the target default is false
          setTest(event.target.checked)
        }}
      />
    </div>
  )
}

export default App
