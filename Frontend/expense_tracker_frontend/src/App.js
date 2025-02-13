import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("give");

  // Fetch transactions from Django backend
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/expenses/")
      .then((response) => setTransactions(response.data))
      .catch((error) => console.error("Error fetching transactions:", error));
  }, []);

  // Handle adding a new transaction
  const handleTransaction = () => {
    const newTransaction = {
      description,
      amount: type === "give" ? -amount : amount,
      type,
      user: 1, // Change this according to your user setup
      date: new Date().toISOString().split("T")[0],
    };

    axios
      .post("http://127.0.0.1:8000/api/expenses/", newTransaction)
      .then((response) => {
        setTransactions([...transactions, response.data]);
        setDescription("");
        setAmount(0);
        setType("give");
      })
      .catch((error) => console.error("Error adding transaction:", error));
  };

  console.log("lar transactions", transactions);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Expense Tracker</h1>
      </header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="transaction-log">
              <h2>Transaction Log</h2>
              <table className="table">
                <thead>
                  <tr>
                    <th>Sr. No.</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Type</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((tx, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{tx.description}</td>
                      <td>Rs.{tx.amount}</td>
                      <td>
                        {tx.type.charAt(0).toUpperCase() + tx.type.slice(1)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-6">
            <div className="container">
              <div className="columns">
                <div className="column">
                  <h2>I Got</h2>
                  <p>
                    Rs.
                    {transactions?.length
                      ? transactions
                          .filter(
                            (tx) =>
                              (tx.type === "give" && Number(tx.amount)) || 0
                          )
                          .reduce((total, tx) => total + Number(tx.amount), 0)
                          .toFixed(2)
                      : "Loading..."}
                  </p>
                </div>
                <div className="column">
                  <h2>I Give</h2>
                  <p>
                    Rs.
                    {transactions?.length
                      ? transactions
                          .filter(
                            (tx) =>
                              (tx.type === "take" && Number(tx.amount)) || 0
                          )
                          .reduce((total, tx) => total + Number(tx.amount), 0)
                          .toFixed(2)
                      : "Loading..."}
                  </p>
                </div>
              </div>
              <div className="input-form">
                <h2>Add Transaction</h2>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Description"
                />
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  placeholder="Amount"
                />
                <div className="btn-group">
                  <button className="give-btn" onClick={() => setType("give")}>
                    Give
                  </button>
                  <button className="take-btn" onClick={() => setType("take")}>
                    Take
                  </button>
                </div>
                <button className="add-btn" onClick={handleTransaction}>
                  Add Transaction
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
