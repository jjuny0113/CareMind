const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(morgan("dev"));
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

const port = process.env.PORT || 8000;

const user = {
  id: 1,
  username: "caremind",
  profileImg:
    "https://images.unsplash.com/photo-1613230564591-5f842c3ff8b6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2691&q=80",
};

const login = {
  SUCCESS: {
    token: "asd2345gq345qg6hw5gdva",
  },
};

app.get("/user", (req, res) => {
  res.json(user);
});

app.get("/login", (req, res) => {
  res.json(login);
});

app.listen(port, () => {
  console.log(`서버가 구동되었습니다. localhost:${port}`);
});
