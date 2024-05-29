import PropTypes from 'prop-types'

function Cards(props) {
  return (
    <div>
      <form>
        <h2>Cards</h2>
        <fieldset>
         <label htmlFor={props.id}
        //  why props.checked inside double curly brackets ?
        //  inside double curly brackets is javascript object 
        // in jsx, double curly bracket is for javacript object, inline style is javascript obeject
         style={{display: "flex", flexDirection: "column", textDecoration: props.checked ? "line-through" : "none"}}>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
         </label>

         <input type="checkbox" id={props.id} name={props.id} onChange={props.toggle} checked={props.checked}/>
        </fieldset>
      </form>

    </div>
  )
}

Cards.propTypes = {
    id: PropTypes.string || PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    checked: PropTypes.bool,
    toggle: PropTypes.func
}

export default Cards;
