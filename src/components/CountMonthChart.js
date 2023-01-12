import styled from "styled-components";
import { Chart as ChartJS } from "chart.js/auto"; //안쓰지만 안적어주면 오류남
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

const data = {
  labels: ["11월", "12월", "1월"],
  datasets: [
    {
      type: "bar",
      label: "",
      backgroundColor: ["silver", "silver", "gold"],
      data: [7, 5, 8],
    },
  ],
};

const option = {
  maxBarThickness: 30,

  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      // 기존 툴팁 사용 안 함
      enabled: false,
    },
    datalabels: {
      // datalables 플러그인 세팅
      formatter: function (value, context) {
        // var idx = context.dataIndex; // 각 데이터 인덱스

        // 출력 텍스트
        return /*context.chart.data.labels[idx] + */ value + "권";
      },
      align: "center", // 도넛 차트에서 툴팁이 잘리는 경우 사용
      color: ["white", "white", "dimgray"],
      textShadowBlur: "2",
      textShadowColor: ["white", "white", "dimgray"],
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      display: false,
      //   grid: {
      // display: false,
      //   },
    },
  },
};

const CountMonthChart = () => {
  return (
    <Container>
      <Bar data={data} plugins={[ChartDataLabels]} options={option} />
    </Container>
  );
};

export default CountMonthChart;

const Container = styled.div`
  width: 10rem;
`;
