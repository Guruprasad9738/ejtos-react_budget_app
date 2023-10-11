import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
// Add code to import the other components here under
import { AppProvider } from './context/AppContext';
import ExpenseList from './components/ExpenseList';
import ExpenseItem from './components/ExpenseItem';
import AllocationForm from './components/AllocationForm';
import Currency from './components/Currency';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {
                        /* Add Budget component here */
                                            // Budget component
                        <div className='col-sm'>
                        <Budget />
                        </div>
                        }        

                        {
                            /* Add Remaining component here*/
                            <div className='col-sm'>
                            <Remaining />
                            </div>
                        }        

                        {
                            /* Add ExpenseTotal component here */
                            <div className='col-sm'>
                                <ExpenseTotal />
                            </div>
                        }

{
                            /* Add ExpenseTotal component here */
                            <div className='col-sm'>
                                <Currency />
                            </div>
                        }


                    </div>

                    <h3 className='mt-3'>Allocation</h3>
                    {
                            /* Add ExpenseList component here */
                            <div className='row '>
                                <div className='col-sm'>
                                    <ExpenseList />
                                </div>
                            </div>
                
                        }        

                        <h3 className='mt-3'>Change Allocation</h3>

                        {
                            /* Add AllocationForm component here under */
                            <div className='col-sm'>
                                <AllocationForm />
                            </div>
                        }  
            </div>
        </AppProvider>
    );
};
export default App;
