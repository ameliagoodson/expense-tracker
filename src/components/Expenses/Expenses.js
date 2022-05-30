import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import { useState } from "react";

const Expenses = (props) => {
	const [enteredYear, setEnteredYear] = useState("2022");
	const onSaveYearHandler = (yearData) => {
		setEnteredYear(yearData);
	};
	const filteredExpenses = props.items.filter((expense) => {
		return (
			expense.date.getFullYear().toString() === enteredYear
		);
	});

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					selectedYear={enteredYear}
					onSaveYear={onSaveYearHandler}
				/>
				<ExpensesChart expenses={filteredExpenses} />
				<ExpensesList items={filteredExpenses} />
			</Card>
		</div>
	);
};
export default Expenses;
