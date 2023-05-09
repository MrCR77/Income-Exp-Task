import { useDispatch , useSelector } from "react-redux";
import './Main.css';
import IncExpSlice, { handleInputChange , updateCategory ,updateIncomeExpenseArray ,updateIncomeAmountArray, updateRemark , totalIncome,totalExpense, totalSavings} from "../Slices/IncExpSlice";

function Main()
{
    const IncExpState = useSelector((state)=>{
        return state.incExpState;
    })

    const dispatch = useDispatch();

    return ( 
        <>
            {/* <input type="text" placeholder="Enter Amount" 
            onChange={
                (e)=>dispatch(handleInputChange(e.target.value))
                }/>
            <input type="text" placeholder="Enter Remark"
            onChange={
                (e)=>dispatch(updateRemark(e.target.value))
            }/>

            <select name="category" id="category" onChange={(e)=>dispatch(updateCategory(e.target.value))} >
                        <option value="category" disabled selected>Category</option>
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                    </select>

            <button onClick={()=>{
                dispatch(updateIncomeAmountArray())
                dispatch(updateIncomeExpenseArray())
                dispatch(totalIncome())
            }}>Click</button> */}
            {/*  */}

<div className="div1">
                    <input type="text" placeholder="Enter Amount" name="input1" onChange={(e)=>dispatch(handleInputChange(e.target.value))} />
                    <input type="text" placeholder="Enter Remarks" name="input2" onChange={(e)=>dispatch(updateRemark(e.target.value))}   />
                    <select name="category" id="category" onChange={(e)=>dispatch(updateCategory(e.target.value))} >
                        <option value="category" disabled selected>Category</option>
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                    </select>
                </div>
                <div className="div2">
                    <button className="btn" 
                     onClick={()=>{
                        dispatch(updateIncomeAmountArray())
                        dispatch(updateIncomeExpenseArray())
                        dispatch(totalIncome())
                        dispatch(totalExpense())
                        dispatch(totalSavings())
                     }}>Submit</button>
                </div>
                <div className="div3">
                    <h1 className={ IncExpState.totalSavings >= 500 ? 'totalSaving' : 'red' }>Total Saving : { IncExpState.totalSavings >= 500 ? `${IncExpState.totalSavings} Savings Are Good` : `${IncExpState.totalSavings} Start Saving..` }</h1>
                </div>
                <div className="income_expense_heading">
                    <div className="income">
                        <h1>Income</h1>
                    </div>
                    <div className="expense">
                        <h1>Expense</h1>
                    </div>
                </div>
                <div className="income_expense_table">
                        <div className="income_table">
                            <table border={1}>
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>Amount</th>
                                        <th>Item's Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                        {
                                            IncExpState.income.map(({amount,remark},index)=>{
                                                return <tr key={index}>
                                                    <td>{++index}</td>
                                                    <td>{amount}</td>
                                                    <td>{remark}</td>
                                                </tr>
                                            })
                                        }
                                </tbody>
                            </table>
                        </div>
                        <div className="expense_table">
                            <table border={1}>
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>Amount</th>
                                        <th>Item's Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                   {
                                IncExpState.expense.map(({amount,remark},index)=>{
                                                return <tr key={index}>
                                                    <td>{++index}</td>
                                                    <td>{amount}</td>
                                                    <td>{remark}</td>
                                                </tr>
                                            })
                                        }
                                </tbody>
                            </table>
                        </div>    
                </div>
                <div className="total">
                    <div className="total_income">
                        <h1>Total Income : {IncExpState.totalIncome}</h1>
                         
                    </div>
                    <div className="total_expense">
                        <h1>Total Expense : {IncExpState.totalExpense} </h1>
                    </div>
                </div>

        </>
    );
}

export default Main;