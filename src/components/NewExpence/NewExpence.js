import "./NewExpence.css";
import ExpenceForm from "./ExpenceForm";
import { useState } from "react";

let NewExpence = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenceDataHandler = (enteredExpenceData) => {
    const expenceData = {
      id: Math.random().toString(),
      ...enteredExpenceData,
    };
    props.onSaveNexExpence(expenceData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expence</button>
      )}
      {isEditing && (
        <ExpenceForm
          onSaveExpenceData={saveExpenceDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpence;
