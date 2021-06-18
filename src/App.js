import React, { useState } from "react";
import Tweet from "./Tweet";
import "./App.css";

function App() {
    const [user, setUser] = useState([
        { name: "MoEla", message: "Hello, there!" },
        { name: "Shifra Sec", message: "Sup!" },
        { name: "Jhon Snow", message: "I'm Jhon Snow!" },
    ]);

    return (
        <div className="app">
            <h1 className={isRed ? "red" : ""}>Change my color!</h1>
            <button onClick={Increment}>Increment</button>
            <h1>{count}</h1>
        </div>
    );
}

export default App;
// function App() {
//     const [isRed, setRed] = useState(false);
//     const [count, setCount] = useState(0);

//     const Increment = () => {
//         setCount(count + 1);
//         if (count === 5) {
//             setRed(true);
//         }
//     };

//     return (
//         <div className="app">
//             <h1 className={isRed ? "red" : ""}>Change my color!</h1>
//             <button onClick={Increment}>Increment</button>
//             <h1>{count}</h1>
//         </div>
//     );
// }

// function App() {
//     return (
//         <div className="app">
//             <Tweet name="Jhon Cena" message="U Can't C me" />
//             <Tweet name="Shifra Sec" message="Sec throu obsec" />
//             <Tweet name="Leo Messi" message="yo wassa3" />
//             <Tweet name="Mo Ela" message="check-me out @twitter.com" />
//         </div>
//     );
// }

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
