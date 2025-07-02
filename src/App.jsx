import React, { useState } from "react";
import Header from "./components/Header";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import "./styles/App.css";

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const total = transactions.reduce((acc, curr) => acc + Number(curr.amount), 0);

  return (
    <div className="app">
      <Header />
      <main>
        <TransactionForm onAdd={addTransaction} />
        <TransactionList transactions={transactions} />
        <div className="total">Saldo Total: R$ {total.toFixed(2)}</div>
      </main>
    </div>
  );
}

export default App;
