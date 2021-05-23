import React, { useState } from "react";
import Expences from "./components/Expences/Expences";
import NewExpence from "./components/NewExpence/NewExpence";
const INITIAL_EXPENCE = [
  {
    id: Math.random().toString(),
    title: "Car Insurence",
    amount: 150.2,
    date: new Date(2021, 2, 12),
  },
  {
    id: Math.random().toString(),
    title: "New TV",
    amount: 500.6,
    date: new Date(2021, 4, 16),
  },
  {
    id: Math.random().toString(),
    title: "Phone Bill",
    amount: 231.4,
    date: new Date(2020, 8, 7),
  },
  {
    id: Math.random().toString(),
    title: "Electric Bill",
    amount: 837.8,
    date: new Date(2019, 11, 23),
  },
];
const App = () => {
  const [expences, setExpence] = useState(INITIAL_EXPENCE);

  const saveNewExpenceHundler = (expence) => {
    setExpence((prevExpences) => {
      return [expence, ...prevExpences];
    });
  };

  return (
    <div>
      <NewExpence onSaveNexExpence={saveNewExpenceHundler} />
      <Expences items={expences} />
    </div>
  );

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, 'Let\'s go Started'),
  //   React.createElement(Expences, { items: expence })
  // );
};

export default App;
