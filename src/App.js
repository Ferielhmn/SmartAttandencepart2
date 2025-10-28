import React, { useState } from "react";
import Recordattendence from "./Components/Recordattendance";

import Homepage from "./Components/Homepage";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      {page === "home" && <Homepage onSingUpClick={() => setPage("record")} />}

      {page === "record" && (
        <Recordattendence onBackClick={() => setPage("home")} />
      )}
    </div>
  );
}

export default App;
