import "./App.css";
// En esta versión con Vite no necesita el .jsx ni .js
import Tarjeta from "./Tarjeta";

const transactions = [
  {
    id: 1,
    concept: "Initial balance",
    value: 2000,
  },
  {
    id: 2,
    concept: "Delicious Iranian lunch",
    value: -28,
  },
  {
    id: 3,
    concept: "Talk to me in Korean",
    value: -116
  },
  {
    id:4,
    concept: "Money from friend",
    value: 20
  }
];

// Let's create a componente to display a list of bank deposits and withdraws.
function TransactionsPanel({ movements, type }) {

  /**
   * If the value of variable 'type' is 'deposit', you should filter movements array to keep only the transactions that have a positive value 
   * 
   * If the value of variable 'type' is 'withdraw', you should filter movements array to keep only the transactions that have a negative value
   */
  // The filter() method returns a new array with all elements that pass the test defined by the given function.

  // let filteredMovements = movements.filter(function (m) {
  //   if (type == "all") {
  //     return true;
  //   }
 
  //   if (type == "deposit" && m.value > 0) {
  //     return true;
  //   }
 
  //   if (type == "withdraw" && m.value < 0) {
  //     return true;
  //   }
  // });

    let filteredMovements;

    if (type === "deposit"){
      filteredMovements = movements.filter(m => m.value > 0)
    }else if (type === "widthdraw"){
      filteredMovements = movements.filter(m => m.value < 0)
    } else if (type === "all"){
      filteredMovements = movements.filter(m => true);
    }
    

    let bankTransactions = filteredMovements.map(m => <p key={m.id} style={{ backgroundColor: m.value < 0 ? "#b54d4d" : "#73b973", padding: "10px", fontSize: "21px", color: "", fontWeight: "500"}}>{m.concept} {m.value} €</p>);
    return <div>
    {/* movements is an array of objects. We transform each object into a <p> tag. Its content it's the transacion concept and value */}
    {/* React need an unique id for each element rendered from a list. */}
    {/* We'll use a ternary operator to evaluate m.value. If m.value is greater than 0, backgroundColor should be set to green. Otherwise, it should be set to red.*/}
    <h1>Bank Transactions 🏦</h1>
    {bankTransactions}
  </div>
}

function App() {
  return (
    <>
      <TransactionsPanel movements={transactions} type="all" />
    </>
  );
}

export default App;
