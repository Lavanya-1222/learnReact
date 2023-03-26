import './ExpenseFrom.css'
import { useState } from 'react';
function ExpenseFrom(props) {
    const [addHandler, setaddHandler] = useState(true);

    const [formdata, setformdata] = useState({ title: "", amount: "", date: null })
    function setdata(e) {
        if (e.target.name === "date") {
            setformdata({
                ...formdata,
                [e.target.name]: new Date(e.target.value)

            })
        }
        else {
            setformdata({
                ...formdata,
                [e.target.name]: e.target.value
            })

        }
    }
    function onsubmitHandler(e) {
        e.preventDefault();
        setaddHandler(!addHandler)

        props.onpassingdataparent(formdata);
        setformdata({})

    }
    function addexpenseHandler() {

        setaddHandler(!addHandler)
    }



    return <div className='div'>{addHandler ? (<form onSubmit={onsubmitHandler}>
        <div className="expense-form">
            <div className="row">
                <label>Name</label>
                <input type="text" name="title" value={formdata.title} onChange={setdata}></input>
            </div>
            <div className="row">
                <label>Amount</label>
                <input type="number" name="amount" value={formdata.amount} onChange={setdata}></input>
            </div>
            <div className="row date">
                <label>Date</label>
                <input type="date" name="date" onChange={setdata}></input>
            </div>
        </div>
        <div className="add-expense-btn">
            <button type="submit" >Add Expense</button>
        </div>   </form>) : (<div className="add-expense-btn second-btn">
            <button type="submit" onClick={addexpenseHandler}>Add Expense</button>
        </div>)}

    </div>
}
export default ExpenseFrom