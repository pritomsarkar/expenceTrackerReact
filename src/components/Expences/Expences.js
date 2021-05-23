import React, { useState } from "react";
import "./Expences.css";
import Card from "../UI/Card";
import ExpenceFilter from "./ExpenceFilter";
import ExpencesList from "./ExpencesList";
import ExpencesChart from "./ExpencesChart";

const Expences = (props) => {
  let [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpences = props.items.filter(
    (expence) => expence.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpenceFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpencesChart expences={filteredExpences} />
        <ExpencesList filterExpence={filteredExpences} />
      </Card>
    </div>
  );
};

export default Expences;
