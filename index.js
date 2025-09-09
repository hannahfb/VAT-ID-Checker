import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import dotenv from "dotenv"

dotenv.config();

const app = express();
const port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

const apilUrl = "http://apilayer.net/api/";
const apiKey = process.env.API_Key;

// Webpages for Index & Help pages
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/help", (req, res) => {
    res.render("help");
});

// Post request to send user input VAT ID (using Axios)
app.post("/check-vat", async (req, res) => {
  const vatId = req.body.vatId;
  // Check for debugging
  // console.log(`User submitted VAT ID: ${vatId}.`);

  try {
    const result = await axios.get(`${apilUrl}validate`, {
      params: {
        access_key: apiKey,
        vat_number: vatId,
      },
    });
    // Check for debugging
    // console.log(result.data);
    res.render("index", { content: result.data });
  } catch (error) {
    console.log(error.response.data);
  }
});

app.listen(port, () => {
  console.log(`Server us running on port ${port}.`);
});
