import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const amountArray = props.dataPoints.map((amount) => amount.value);
  const maxAmount = Math.max(...amountArray);
  
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.lable}
          value={dataPoint.value}
          maxVaule={maxAmount}
          label={dataPoint.lable}
        />
      ))}
    </div>
  );
};

export default Chart;
