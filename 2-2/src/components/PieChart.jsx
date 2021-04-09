import React, { useEffect } from "react";
import Chart from "react-google-charts";
import { useDispatch, useSelector } from "react-redux";
import { GET_CHART_REQUEST } from "../redux/reducer/chart";

const PieChart = () => {
  const dispatch = useDispatch();
  const { chartData } = useSelector((state) => state.chart);
  useEffect(() => {
    dispatch({
      type: GET_CHART_REQUEST,
    });
  }, []);
  const result = chartData[0]?.chartValue;
  return (
    <>
      <Chart
        width={"500px"}
        height={"300px"}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={result}
        options={{
          title: "My Daily Activities",
        }}
        rootProps={{ "data-testid": "1" }}
      />
    </>
  );
};

export default PieChart;
