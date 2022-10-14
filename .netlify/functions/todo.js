import { createClient } from "contentful";

const axios = require("axios");

exports.handler = async function (event, context) {
  console.log(event);
  console.log(context);
  try {
    const { id } = event.queryStringParameters;
    const response = await axios.get(`${process.env.REACT_APP_API_SPACE, process.env.REACT_APP_ACCESS_TOKEN}/${id}`);
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (err) {
    return {
      statusCode: 404,
      body: err.toString(),
    };
  }
};