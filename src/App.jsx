import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import RevenueCard from "./components/revenueCard";
import Header from "./components/header";
import Sidebar from "./components/sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div className="p-4 sm:ml-64"> */}
      {/* <Header title={"Payments"} description={"How it works"} /> */}
      {/* </div> */}
      <Sidebar />
      <div className="grid sm:grid-cols-3 grid-cols-1">
        {/* <RevenueCard
          title={"AmountPending"}
          amount={"9,312"}
          orderCount={"13"}
          count={"13"}
        />
        <RevenueCard
          title={"Completed Payout"}
          amount={"12,312.19"}
          orderCount={"13"}
          count={"13"}
        /> */}
      </div>
    </>
  );
}

export default App;
