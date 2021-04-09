const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

const port = process.env.PORT || 8000;

const chart = [
  {
    id: 1,
    chartValue: [
      ["Task", "Hours per Day"],
      ["Work", 11],
      ["Eat", 2],
      ["Commute", 2],
      ["Watch TV", 2],
      ["Sleep", 7],
    ],
  },
];

app.get("/chart", (req, res) => {
  res.json(chart);
});

app.listen(port, () => {
  console.log(`서버가 구동되었습니다. localhost:${port}`);
});
