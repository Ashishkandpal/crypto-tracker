import { convertDate } from "./convertDate";

export const settingChartData = (setChartData, prices1, prices2) => {
  if (prices2) {
    setChartData({
      labels: prices1.map((data) => convertDate(data[0])),
      datasets: [
        {
          label: "Crypto1",
          data: prices1.map((data) => data[1]),
          borderWidth: 2,
          fill: false,
          tension: 0.25,
          //   backgroundColor: prices2 ? "transparent" : "rgba(58, 128, 233,0.1)",
          borderColor: "#3a80e9",
          pointRadius: 0,
          yAxisID: "crypto1",
        },
        {
          label: "Crypto2",
          data: prices2.map((data) => data[1]),
          borderWidth: 2,
          fill: false,
          tension: 0.25,
          //   backgroundColor: prices2 ? "transparent" : "rgba(97, 201, 111,0.1)",
          borderColor: "green",
          pointRadius: 0,
          yAxisID: "crypto2",
        },
      ],
    });
  } else {
    setChartData({
      labels: prices1.map((data) => convertDate(data[0])),
      datasets: [
        {
          label: "Crypto",
          data: prices1.map((data) => data[1]),
          borderWidth: 1,
          fill: true,
          tension: 0.25,
          backgroundColor: prices2 ? "transparent" : "rgba(58, 128, 233,0.1)",
          borderColor: "#3a80e9",
          pointRadius: 0,
          yAxisID: "crypto1",
        },
      ],
    });
  }
};
