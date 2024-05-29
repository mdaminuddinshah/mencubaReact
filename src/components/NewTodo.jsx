import PropTypes from 'prop-types'

function NewTodo(props) {

  // 1. buat form
  // 2. ada 2 input
  // 3. ada 1 button
  // 4. bila button klik, akan panggil function onSubmit
  // 5. extract input dari form
  // 6. panggil API

  const handleChange = (event) => {
    event.preventDefault();

    // event.target.elements
    // dia akan target elements id dan name di input
    const elementz = event.target.elements;

    // utk kita dapat nilai input, kita cari id dia apa
    // guna event.target.elements.id(titlez)
    const title = elementz.titlez.value;
    const description = elementz.descriptionz.value;
    const gelak = "Aminuddin";

    // kat bahagian ni nanti akan buat state management atau API
    // console.log({description, title});

    // if here export to App.jsx as object
    // so in App.jsx must in object also as console.log, not parameters
    // terpulang, boleh export in object or varibale
    // cuma dekat tempat kita import tu mesti as parametes same
    // dengan sini, if object = object, if varibale = varibale

    // kenapa, props.addNewTodo ada dekat sini ??
    // sebab kita nak hantar value dari input ni ke App.jsx
    // atau ini cara kita pass data dari component ke parent
    props.addNewTodo({
      title, 
      description,
      gelak,
    });

    // it will target form
    // .reset() will automatically reset any elements inside form
    event.target.reset();
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

NewTodo.propTypes = {
  addNewTodo: PropTypes.func
}

export default NewTodo;
