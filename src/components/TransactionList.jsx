import React from "react";

function TransactionList({ transactions }) {
  return (
    <div className="list">
      <h2>Transações</h2>
      <ul>
        {transactions.map((t, index) => (
          <li key={index}>
            {t.description} - R$ {Number(t.amount).toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
