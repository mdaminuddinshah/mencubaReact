import PropTypes from 'prop-types'

function NewTodo(props) {

  const handleChange = (event) => {
    event.preventDefault();

    // event.target.elements
    // dia akan target elements id dan name di input
    const elementz = event.target.elements;

    // utk kita dapat nilai input, kita cari id dia apa
    // guna event.target.elements.id(titlez)
    const title = elementz.titlez.value;
    const description = elementz.descriptionz.value;
    console.log({description, title});
  }

  return (
    <div>
        <form onSubmit={handleChange} style={{display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "1rem"}}>
        <h2>NewTodo</h2>
           <fieldset>
            
                <label htmlFor="titless">Title: </label>
                <input type="text" id="titlez" name="title"></input>
           </fieldset>
                
           <fieldset>
                 <label htmlFor="descriptionss">Description: </label>
                <input type="text" id="descriptionz" name="descriptions"></input>
           </fieldset>
                
            
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

NewTodo.propTypes = {}

export default NewTodo;
