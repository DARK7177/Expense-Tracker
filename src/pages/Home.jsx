import React from 'react';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import ReportChart from '../components/ReportChart';
import ToggleButton from '../components/ToggleButton';
import '../App.css'; // Make sure your CSS file is imported


const Home = () => {
    console.log("Reached Home")
    return (
        <div>
            <ToggleButton />
            <ExpenseForm />
            <ExpenseList />
            <ReportChart />
        </div>
    )
}

export default Home;