const express = require("express");
const { connection } = require("./configs/connection");
const { userRoute } = require("./routes/userRouter");
const specs = require("./configs/swaggerConfig");
const swaggerUi = require('swagger-ui-express');
require("dotenv").config()
const PORT=process.env.PORT ||3000
const app = express();

const CSS_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { customCssUrl: CSS_URL })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ msg: "Hello, world!" });
});

app.use("/users", userRoute);

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("DB is Connected");
  } catch (error) {
    console.log(error.message);
  }
});
