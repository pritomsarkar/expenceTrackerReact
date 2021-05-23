import "./ExpencesList.css";
import ExpenceItem from "./ExpenceItem";

const ExpencesList = (props) => {
  if (props.filterExpence.length === 0) {
    return <h1 className="expenses-list__fallback">No Expence Found!..</h1>;
  }

  return (
    <div>
      <ul className="expenses-list">
        {props.filterExpence.map((expence) => {
          return (
            <ExpenceItem
              key={expence.id}
              title={expence.title}
              amount={expence.amount}
              date={expence.date}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ExpencesList;
