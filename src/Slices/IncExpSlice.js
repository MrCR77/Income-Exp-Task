import { createSlice } from "@reduxjs/toolkit";

const IncExpSlice = createSlice({

    name : 'incexp',

    initialState : {
        input1 : '',
        input2 : '',
        category : '',
        income : [],
        expense :[],
        incomeAmount: [],
        expenseAmount:[],
        totalIncome : 0,
        totalExpense : 0,
        totalSavings : 0,
        danger : '',
    },

    reducers : {
        handleInputChange : (state ,actions)=>{
            state.input1 = actions.payload;
        },

        updateRemark : (state ,actions)=>{
            state.input2 = actions.payload;
        },

        updateCategory : (state ,actions)=>{
            state.category = actions.payload 
        },

        updateIncomeExpenseArray : ( state )=>{
            if( state.category == 'income')
            {
            state.income = [...state.income,{ 
                amount : state.input1,
                remark : state.input2,
                category : state.category
            }]
        }
        else{
            state.expense = [...state.expense,{ 
                amount : state.input1,
                remark : state.input2,
                category : state.category
                }]
        }
        },

        updateIncomeAmountArray : (state)=>{
            if(state.category == 'income'){
                state.incomeAmount = [...state.incomeAmount,state.input1 ]
            }
            else{
                state.expenseAmount = [...state.expenseAmount ,state.input1 ]
            }
        },

        totalIncome : (state)=>{
            state.totalIncome = state.incomeAmount.reduce((acc ,next)=>{
                let a = parseInt(acc);
                let n = parseInt(next);
                return a + n;
            },0)
        },
        totalExpense : (state)=>{
            state.totalExpense = state.expenseAmount.reduce((acc ,next)=>{
                let a = parseInt(acc);
                let n = parseInt(next);
                return a + n;
            },0)
        },
        totalSavings : (state)=>{
            state.totalSavings = state.totalIncome - state.totalExpense
        }
    }
})

export default IncExpSlice.reducer;

export const { handleInputChange , updateCategory ,updateRemark,updateIncomeAmountArray ,updateIncomeExpenseArray,totalIncome,totalExpense , totalSavings} = IncExpSlice.actions;