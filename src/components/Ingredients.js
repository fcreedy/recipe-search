
const Ingredients = (props) => {

    return(
        <div>
            {
                props.ingredientList.map( (ingredient, index) => {
                    return (
                        <div key={index}>
                            {ingredient}
                        </div>
                    )
                })
            }
        </div>
    )            
}
  
export default Ingredients