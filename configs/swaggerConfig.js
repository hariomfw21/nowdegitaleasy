const swaggerJsDoc = require("swagger-jsdoc");
require("dotenv").config();
const path = require("path");
const BACKEND_DEPLOYED_URL =
  process.env.BACKEND_DEPLOYED_URL || "http://localhost:3000/";
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "nowdegitaleasy NodeJS Backend Project",
      version: "1.0.0",
      description:
        "Welcome to nowdegitaleasy Node.js backend project. Here, you can register new user , update existing users by id, delete existing user by id and find all existing users.",
    },
    servers: [
      {
        url: BACKEND_DEPLOYED_URL,
      },
    ],
  },
  apis: [path.join(__dirname, "..", "docs", "swagger.js")],
};
const specs = swaggerJsDoc(options);
module.exports = specs;
