import './Container.css'
import { useState } from 'react';
import ExpenseFrom from './Component/ExpenseFrom/ExpenseForm'
import ExpenseItem from './Component/Expenses/ExpenseItem'
import Expense from './Component/Expenses/Expense';
import './Meadia-Query.css'
function Container() {


    const [year, setyear] = useState(2023)
    const [expenselist, setexpenselist] = useState([])


    function onpassingdataparent(formdata) {


        setexpenselist([...expenselist, formdata])


    }


    return <><div className="container">
        <ExpenseFrom onpassingdataparent={onpassingdataparent} />
        <div className='filter-div'><select className='filter' onChange={(e) => setyear(e.target.value)}>
            <option>2023</option>
            <option>2022</option>
            <option>2021</option>
            <option>2020</option>
            <option>2019</option>
            <option>2018</option>
        </select>
        </div>

{(expenselist.length == 0) ? <Expense><h4>No Expense</h4></Expense> :
            (<Expense>{expenselist.map((expense, index) => (
          
                (expense.date.getFullYear() == year) && (
                    <ExpenseItem key={index} title={expense.title}
                        amount={expense.amount} date={expense.date}/> )
                        
              
                        ) 
                        )}
                     </Expense>
         
                     )
        

                }


            
    </div>
    </>
}
export default Container