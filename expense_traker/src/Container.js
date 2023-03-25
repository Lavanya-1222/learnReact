import './Container.css'
import { useState } from 'react';
import ExpenseFrom from './Component/ExpenseFrom/ExpenseForm'
import ExpenseItem from './Component/Expenses/ExpenseItem'
import Expense from './Component/Expenses/Expense';

function Container(){
const [addHandler,setaddHandler]=useState(true);
const[formdatacontainer,setformdatacontainer]=useState({})
function onpassingdataparent(formdata){
setformdatacontainer(formdata)
    console.log(formdata)
}
    return <><div className="container">
    <ExpenseFrom onpassingdataparent={onpassingdataparent}/>

    <Expense>
    <ExpenseItem title={formdatacontainer.title} amount={formdatacontainer.amount} date={formdatacontainer.date}/>
    {/* <ExpenseItem/> */}
    {/* <ExpenseItem/> */}
    </Expense>
    </div>
    </>
}
export default Container