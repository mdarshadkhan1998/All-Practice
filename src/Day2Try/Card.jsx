import styles from "./Card.module.css"
const rightStyling ={
    fontSize:"35px",
    color:"teal"
}
const rightStyling1 ={
    
}
function Card(props) {
    console.log(props)
  return (
    <>
        <div className={styles.Card}>
            <div className={styles.left_content}>
                <img src={props.image} alt={props.name}/>
            </div>
            <div className={styles.right_content}>
                <h1 style={{color:"blue",fontSize:"30px"}}>Organization: {props.organization}</h1>
                <h2 style={{...rightStyling, ...rightStyling1}}>Name: {props.name}</h2>
                <h2>Qualification: {props.qualification}</h2>
            </div>
        </div>
    </>
  )
}

export default Card