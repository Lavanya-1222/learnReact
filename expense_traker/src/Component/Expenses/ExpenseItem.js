// import { getBsProps } from 'react-bootstrap/lib/utils/bootstraputils'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
function ExpenseItem(props) {

    return <><div className="expense-item">
        <ExpenseDate date={props.date}/>
        <h2 className='title'>{props.title}</h2>
        <div className='amount'>{props.amount}<i className="fa-solid fa-indian-rupee-sign"></i>
        </div>
    </div>
</>


}
export default ExpenseItem