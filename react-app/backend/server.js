const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000; 

app.use(cors());
app.use(express.json());

const data = [
  {
    productname: "Italian Basil",
    wholesaleprice: "₹33.80",
    retailprice: "₹52.00",
    weekshigh: "₹59.00",
    weekslow: "₹47.00",
    trend: "",
    href: "/",
  },
  {
    productname: "Swiss Chard",
    wholesaleprice: "₹31.20",
    retailprice: "₹48.00",
    weekshigh: "₹59.00",
    weekslow: "₹48.00",
    trend: "",
    href: "/",
  },
  {
    productname: "Broccoli",
    wholesaleprice: "₹29.90",
    retailprice: "₹46.00",
    weekshigh: "₹59.00",
    weekslow: "₹46.00",
    trend: "",
    href: "/broccoli",
  },

  {
    productname: "Kale",
    wholesaleprice: "₹31.20",
    retailprice: "₹48.00",
    weekshigh: "₹59.00",
    weekslow: "₹48.00",
    trend: "",
    href: "/",
  },
  {
    productname: "Celery",
    wholesaleprice: "₹31.20",
    retailprice: "₹48.00",
    weekshigh: "₹59.00",
    weekslow: "₹48.00",
    trend: "",
    href: "/",
  },
  // Add more data here
];



// Endpoint for fetching paginated data
app.get("/api/data", (req, res) => {
  // Pagination parameters
  const page = parseInt(req.query.page) || 1; // Default to page 1 if not specified
  const elementsPerPage = 10;
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