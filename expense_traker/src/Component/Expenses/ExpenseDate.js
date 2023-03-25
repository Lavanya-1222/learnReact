import './ExpenseDate.css'
function ExpenseDate(props) {
// console.log(props.date)
    return <>{(props.date==null) ? console.log("not date"):
    (<div className="date-style">
         <div>{props.date.toLocaleString('en-us', { month: "long" })}
        </div> 
        <div>{props.date.getDate()}</div>
        <div>{props.date.getFullYear()}</div>
    </div>)}
    </>

}
export default ExpenseDate