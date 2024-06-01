import PropTypes from 'prop-types'

function Cards(props) {
  return (
    <div style={{padding: "1rem",display: "flex", flexDirection: "row",border: "1px solid black", borderRadius: "10px",}}>
        
          {/* untuk textDecoration, macam mana nak tahu props.checked tu ? */}
          {/* bergantung pada onchange(props.toggle), dia akan trigger toggle func, trigger handleCheck func, dia akan ubah checked:false ke true apabila ditrigger */}
          {/* default, checked:false, so kalau di trigger, dia akan tukar true, so true akan ke kiri dulu, kalau false, ke kanan */}
         <label htmlFor={props.id} style={{display: "flex",  flexGrow: 1, flexDirection: "column", textDecoration: props.checked ? "line-through" : "none"}}>
           {/* why props.checked inside double curly brackets ?
            inside double curly brackets is javascript object 
            in jsx, double curly bracket is for javacript object, inline style is javascript obeject */}
            
            <h2 style={{fontSize: "2 rem", fontWeight: "bold"}}>{props.title}</h2>
            <p style={{fontSize: '1rem',}}>{props.description}</p>
         </label>

         <input type="checkbox" id={props.id} name={props.id} onChange={props.toggle}/>
        
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
