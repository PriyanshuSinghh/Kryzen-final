const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000; 

app.use(cors());
app.use(express.json());

const data = [
  {
    productName: "Italian Basil",
    imageSrc: "",
    productLink: "commodities-1",
    wholesalePrice: "₹33.80",
    retailPrice: "₹52.00",
    weeksHigh: "₹59.00",
    weeksLow: "₹47.00",
    trend: ""
  },
  {
    productName: "Swiss Chard",
    wholesalePrice: "₹31.20",
    retailPrice: "₹48.00",
    weeksHigh: "₹59.00",
    weeksLow: "₹48.00",
    trend: ""
  },
  {
    productName: "Broccoli",
    wholesalePrice: "₹29.90",
    retailPrice: "₹46.00",
    weeksHigh: "₹59.00",
    weeksLow: "₹46.00",
    trend: ""
  },
  {
    productName: "Kale",
    wholesalePrice: "₹33.15",
    retailPrice: "₹51.00",
    weeksHigh: "₹57.00",
    weeksLow: "₹46.00",
    trend: ""
  },
  {
    productName: "Celery",
    wholesalePrice: "₹29.90",
    retailPrice: "₹46.00",
    weeksHigh: "₹57.00",
    weeksLow: "₹46.00",
    trend: ""
  },

  // Add more data here
];



// Endpoint for fetching paginated data
app.get("/api/data", (req, res) => {
  // Pagination parameters
  const page = parseInt(req.query.page) || 1; // Default to page 1 if not specified
  const elementsPerPage = 5;
  const startIndex = (page - 1) * elementsPerPage;
  const endIndex = startIndex + elementsPerPage;

  // Extract the subset of data for the requested page
  const paginatedData = data.slice(startIndex, endIndex);

  // Respond with the paginated data
  res.json(paginatedData);
});



// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});