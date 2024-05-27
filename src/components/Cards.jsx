import PropTypes from 'prop-types'

function Cards(props) {
  return (
    <div>
      <form>
        <fieldset>
         <label htmlFor={props.id}
        //  
         style={{display: "flex", flexDirection: "column", textDecoration: props.checked ? "line-through" : "none"}}>
          <h2 id={props.title}></h2>
          <p id={props.description}></p>
         </label>
         <input type="checkbox" id={props.id} name={props.id} onChange={props.toggle} checked={props.checked}/>
        </fieldset>
      </form>

    </div>
  )
}

Cards.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    checked: PropTypes.bool,
    toggle: PropTypes.func
}

export default Cards;
