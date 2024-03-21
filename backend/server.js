const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000; // You can change the port number if needed

app.use(cors());
app.use(express.json());

// Data
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
    href: "/",
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
 {
  productname: "Rosemary",
  wholesaleprice: "₹37.05",
  retailprice: "₹57.00",
  weekshigh: "₹57.00",
  weekslow: "₹52.00",
  trend: "",
  href: "/",

},
{
  productname: "Pak Choi",
  wholesaleprice: "₹37.70",
  retailprice: "₹58.00",
  weekshigh: "₹58.00",
  weekslow: "₹51.00",
  trend: "",
  href: "/",

},
{
  productname: "Asparagus",
  wholesaleprice: "₹179.40",
  retailprice: "₹276.00",
  weekshigh: "₹285.00",
  weekslow: "₹276.00",
  trend: "",
  href: "/",

},
{
  productname: "Thyme",
  wholesaleprice: "₹76.05",
  retailprice: "₹117.00",
  weekshigh: "₹129.00",
  weekslow: "₹117.00",
  trend: "",
  href: "/",

},
{
  productname: "Broccoli Florets",
  wholesaleprice: "₹120.25",
  retailprice: "₹185.00",
  weekshigh: "₹190.00",
  weekslow: "₹180.00",
  trend: "",
  href: "/",

},
{
  productname: "Lollo Rossa",
  wholesaleprice: "₹36.40",
  retailprice: "₹56.00",
  weekshigh: "₹72.00",
  weekslow: "₹49.00",
  trend: "",
  href: "/",

},
{
  productname: "Red Oak Lettuce",
  wholesaleprice: "₹35.10",
  retailprice: "₹54.00",
  weekshigh: "₹56.00",
  weekslow: "₹46.00",
  trend: "",
  href: "/",

},
{
  productname: "Green Butterhead Lettuce",
  wholesaleprice: "₹35.75",
  retailprice: "₹55.00",
  weekshigh: "₹55.00",
  weekslow: "₹47.00",
  trend: "",
  href: "/",

},
{
  productname: "Romaine Lettuce",
  wholesaleprice: "₹34.45",
  retailprice: "₹53.00",
  weekshigh: "₹53.00",
  weekslow: "₹46.00",
  trend: "",
  href: "/",

},
{
  productname: "Tulsi",
  wholesaleprice: "₹52.00",
  retailprice: "₹80.00",
  weekshigh: "₹80.00",
  weekslow: "₹63.00",
  trend: "",
  href: "/",

},
{
  productname: "Leeks",
  wholesaleprice: "₹51.35",
  retailprice: "₹79.00",
  weekshigh: "₹97.00",
  weekslow: "₹79.00",
  trend: "",
  href: "/",

},
{
  productname: "Mint",
  wholesaleprice: "₹21.45",
  retailprice: "₹33.00",
  weekshigh: "₹38.00",
  weekslow: "₹31.00",
  trend: "",
  href: "/",

},
{
  productname: "Amaranthus",
  wholesaleprice: "₹23.40",
  retailprice: "₹36.00",
  weekshigh: "₹39.00",
  weekslow: "₹32.00",
  trend: "",
  href: "/",

},
{
  productname: "Palak",
  wholesaleprice: "₹44.85",
  retailprice: "₹69.00",
  weekshigh: "₹70.00",
  weekslow: "₹60.00",
  trend: "",
  href: "/",

},
{
  productname: "Amaranthus green",
  wholesaleprice: "₹51.35",
  retailprice: "₹79.00",
  weekshigh: "₹79.00",
  weekslow: "₹61.00",
  trend: "",
  href: "/",

},
{
  productname: "Colocasia Leaf",
  wholesaleprice: "₹71.50",
  retailprice: "₹110.00",
  weekshigh: "₹123.00",
  weekslow: "₹106.00",
  trend: "",
  href: "/",

},
{
  productname: "Methi",
  wholesaleprice: "₹40.95",
  retailprice: "₹63.00",
  weekshigh: "₹83.00",
  weekslow: "₹63.00",
  trend: "",
  href: "/",

},

  // Add more data here
];
const broccolidata = [
  {
    date: "7 Mar 2024",
    retailprice: "₹46.00",
    wholesaleprice: "₹29.00 - ₹31.00",
    priceatfarm: "₹30.00 - ₹28.00",
  },
  {
    date: "6 Mar 2024",
    retailprice: "₹49.00",
    wholesaleprice: "₹31.00 - ₹33.00",
    priceatfarm: "₹32.00 - ₹29.00",
  },
  {
    date: "5 Mar 2024",
    retailprice: "₹46.00",
    wholesaleprice: "₹29.00 - ₹31.00",
    priceatfarm: "₹30.00 - ₹28.00",
  },
  {
    date: "4 Mar 2024",
    retailprice: "₹55.00",
    wholesaleprice: "₹35.00 - ₹37.00",
    priceatfarm: "₹36.00 - ₹33.00",
  },
  {
    date: "3 Mar 2024",
    retailprice: "₹54.00",
    wholesaleprice: "₹34.00 - ₹37.00",
    priceatfarm: "₹35.00 - ₹32.00",
  },
  {
    date: "2 Mar 2024",
    retailprice: "₹59.00",
    wholesaleprice: "₹37.00 - ₹40.00",
    priceatfarm: "₹38.00 - ₹35.00",
  },
  {
    date: "1 Mar 2024",
    retailprice: "₹55.00",
    wholesaleprice: "₹35.00 - ₹37.00",
    priceatfarm: "₹36.00 - ₹33.00",
  },
  {
    date: "29 Feb 2024",
    retailprice: "₹57.00",
    wholesaleprice: "₹36.00 - ₹39.00",
    priceatfarm: "₹37.00 - ₹34.00",
  },
  {
    date: "28 Feb 2024",
    retailprice: "₹53.00",
    wholesaleprice: "₹33.00 - ₹36.00",
    priceatfarm: "₹34.00 - ₹32.00",
  },
  {
    date: "27 Feb 2024",
    retailprice: "₹52.00",
    wholesaleprice: "₹33.00 - ₹35.00",
    priceatfarm: "₹34.00 - ₹31.00",
  },
  {
    date: "26 Feb 2024",
    retailprice: "₹51.00",
    wholesaleprice: "₹32.00 - ₹35.00",
    priceatfarm: "₹33.00 - ₹31.00",
  },
  {
    date: "25 Feb 2024",
    retailprice: "₹50.00",
    wholesaleprice: "₹32.00 - ₹34.00",
    priceatfarm: "₹33.00 - ₹30.00",
  },
  {
    date: "24 Feb 2024",
    retailprice: "₹47.00",
    wholesaleprice: "₹30.00 - ₹32.00",
    priceatfarm: "₹31.00 - ₹28.00",
  },
  {
    date: "23 Feb 2024",
    retailprice: "₹52.00",
    wholesaleprice: "₹33.00 - ₹35.00",
    priceatfarm: "₹34.00 - ₹31.00",
  },
  {
    date: "22 Feb 2024",
    retailprice: "₹56.00",
    wholesaleprice: "₹35.00 - ₹38.00",
    priceatfarm: "₹36.00 - ₹34.00",
  },
  {
    date: "21 Feb 2024",
    retailprice: "₹49.00",
    wholesaleprice: "₹31.00 - ₹33.00",
    priceatfarm: "₹32.00 - ₹29.00",
  },
  {
    date: "20 Feb 2024",
    retailprice: "₹46.00",
    wholesaleprice: "₹29.00 - ₹31.00",
    priceatfarm: "₹30.00 - ₹28.00",
  },
  {
    date: "19 Feb 2024",
    retailprice: "₹53.00",
    wholesaleprice: "₹33.00 - ₹36.00",
    priceatfarm: "₹34.00 - ₹32.00",
  },
  {
    date: "18 Feb 2024",
    retailprice: "₹53.00",
    wholesaleprice: "₹33.00 - ₹36.00",
    priceatfarm: "₹34.00 - ₹32.00",
  },
  {
    date: "17 Feb 2024",
    retailprice: "₹53.00",
    wholesaleprice: "₹33.00 - ₹36.00",
    priceatfarm: "₹34.00 - ₹32.00",
  },
  {
    date: "16 Feb 2024",
    retailprice: "₹53.00",
    wholesaleprice: "₹33.00 - ₹36.00",
    priceatfarm: "₹34.00 - ₹32.00",
  },
  {
    date: "15 Feb 2024",
    retailprice: "₹54.00",
    wholesaleprice: "₹34.00 - ₹37.00",
    priceatfarm: "₹35.00 - ₹32.00",
  },
  {
    date: "14 Feb 2024",
    retailprice: "₹54.00",
    wholesaleprice: "₹34.00 - ₹37.00",
    priceatfarm: "₹35.00 - ₹32.00",
  },
  {
    date: "13 Feb 2024",
    retailprice: "₹46.00",
    wholesaleprice: "₹29.00 - ₹31.00",
    priceatfarm: "₹30.00 - ₹28.00",
  },
  {
    date: "12 Feb 2024",
    retailprice: "₹46.00",
    wholesaleprice: "₹29.00 - ₹31.00",
    priceatfarm: "₹30.00 - ₹28.00",
  },
  {
    date: "11 Feb 2024",
    retailprice: "₹48.00",
    wholesaleprice: "₹30.00 - ₹33.00",
    priceatfarm: "₹31.00 - ₹29.00",
  },
  {
    date: "10 Feb 2024",
    retailprice: "₹47.00",
    wholesaleprice: "₹30.00 - ₹32.00",
    priceatfarm: "₹31.00 - ₹28.00",
  },
];

const italianBassil = [
  {
    date: "7 Mar 2024",
    retailprice: "₹46.00",
    wholesaleprice: "₹29.00 - ₹31.00",
    priceatfarm: "₹30.00 - ₹28.00",
  },
  {
    date: "6 Mar 2024",
    retailprice: "₹49.00",
    wholesaleprice: "₹31.00 - ₹33.00",
    priceatfarm: "₹32.00 - ₹29.00",
  },
  {
    date: "5 Mar 2024",
    retailprice: "₹46.00",
    wholesaleprice: "₹29.00 - ₹31.00",
    priceatfarm: "₹30.00 - ₹28.00",
  },
  {
    date: "4 Mar 2024",
    retailprice: "₹55.00",
    wholesaleprice: "₹35.00 - ₹37.00",
    priceatfarm: "₹36.00 - ₹33.00",
  },
  {
    date: "3 Mar 2024",
    retailprice: "₹54.00",
    wholesaleprice: "₹34.00 - ₹37.00",
    priceatfarm: "₹35.00 - ₹32.00",
  },
  {
    date: "2 Mar 2024",
    retailprice: "₹59.00",
    wholesaleprice: "₹37.00 - ₹40.00",
    priceatfarm: "₹38.00 - ₹35.00",
  },
  {
    date: "1 Mar 2024",
    retailprice: "₹55.00",
    wholesaleprice: "₹35.00 - ₹37.00",
    priceatfarm: "₹36.00 - ₹33.00",
  },
  {
    date: "29 Feb 2024",
    retailprice: "₹57.00",
    wholesaleprice: "₹36.00 - ₹39.00",
    priceatfarm: "₹37.00 - ₹34.00",
  },
  {
    date: "28 Feb 2024",
    retailprice: "₹53.00",
    wholesaleprice: "₹33.00 - ₹36.00",
    priceatfarm: "₹34.00 - ₹32.00",
  },
  {
    date: "27 Feb 2024",
    retailprice: "₹52.00",
    wholesaleprice: "₹33.00 - ₹35.00",
    priceatfarm: "₹34.00 - ₹31.00",
  },
  {
    date: "26 Feb 2024",
    retailprice: "₹51.00",
    wholesaleprice: "₹32.00 - ₹35.00",
    priceatfarm: "₹33.00 - ₹31.00",
  },
  {
    date: "25 Feb 2024",
    retailprice: "₹50.00",
    wholesaleprice: "₹32.00 - ₹34.00",
    priceatfarm: "₹33.00 - ₹30.00",
  },
  {
    date: "24 Feb 2024",
    retailprice: "₹47.00",
    wholesaleprice: "₹30.00 - ₹32.00",
    priceatfarm: "₹31.00 - ₹28.00",
  },
  {
    date: "23 Feb 2024",
    retailprice: "₹52.00",
    wholesaleprice: "₹33.00 - ₹35.00",
    priceatfarm: "₹34.00 - ₹31.00",
  },
  {
    date: "22 Feb 2024",
    retailprice: "₹56.00",
    wholesaleprice: "₹35.00 - ₹38.00",
    priceatfarm: "₹36.00 - ₹34.00",
  },
  {
    date: "21 Feb 2024",
    retailprice: "₹49.00",
    wholesaleprice: "₹31.00 - ₹33.00",
    priceatfarm: "₹32.00 - ₹29.00",
  },
  {
    date: "20 Feb 2024",
    retailprice: "₹46.00",
    wholesaleprice: "₹29.00 - ₹31.00",
    priceatfarm: "₹30.00 - ₹28.00",
  },
  {
    date: "19 Feb 2024",
    retailprice: "₹53.00",
    wholesaleprice: "₹33.00 - ₹36.00",
    priceatfarm: "₹34.00 - ₹32.00",
  },
  {
    date: "18 Feb 2024",
    retailprice: "₹53.00",
    wholesaleprice: "₹33.00 - ₹36.00",
    priceatfarm: "₹34.00 - ₹32.00",
  },
  {
    date: "17 Feb 2024",
    retailprice: "₹53.00",
    wholesaleprice: "₹33.00 - ₹36.00",
    priceatfarm: "₹34.00 - ₹32.00",
  },
  {
    date: "16 Feb 2024",
    retailprice: "₹53.00",
    wholesaleprice: "₹33.00 - ₹36.00",
    priceatfarm: "₹34.00 - ₹32.00",
  },
  {
    date: "15 Feb 2024",
    retailprice: "₹54.00",
    wholesaleprice: "₹34.00 - ₹37.00",
    priceatfarm: "₹35.00 - ₹32.00",
  },
  {
    date: "14 Feb 2024",
    retailprice: "₹54.00",
    wholesaleprice: "₹34.00 - ₹37.00",
    priceatfarm: "₹35.00 - ₹32.00",
  },
  {
    date: "13 Feb 2024",
    retailprice: "₹46.00",
    wholesaleprice: "₹29.00 - ₹31.00",
    priceatfarm: "₹30.00 - ₹28.00",
  },
  {
    date: "12 Feb 2024",
    retailprice: "₹46.00",
    wholesaleprice: "₹29.00 - ₹31.00",
    priceatfarm: "₹30.00 - ₹28.00",
  },
  {
    date: "11 Feb 2024",
    retailprice: "₹48.00",
    wholesaleprice: "₹30.00 - ₹33.00",
    priceatfarm: "₹31.00 - ₹29.00",
  },
  {
    date: "10 Feb 2024",
    retailprice: "₹47.00",
    wholesaleprice: "₹30.00 - ₹32.00",
    priceatfarm: "₹31.00 - ₹28.00",
  },
];
const swisschard = [
  {
    date: "7 Mar 2024",
    retailprice: "₹46.00",
    wholesaleprice: "₹29.00 - ₹31.00",
    priceatfarm: "₹30.00 - ₹28.00",
  },
  {
    date: "6 Mar 2024",
    retailprice: "₹49.00",
    wholesaleprice: "₹31.00 - ₹33.00",
    priceatfarm: "₹32.00 - ₹29.00",
  },
  {
    date: "5 Mar 2024",
    retailprice: "₹46.00",
    wholesaleprice: "₹29.00 - ₹31.00",
    priceatfarm: "₹30.00 - ₹28.00",
  },
  {
    date: "4 Mar 2024",
    retailprice: "₹55.00",
    wholesaleprice: "₹35.00 - ₹37.00",
    priceatfarm: "₹36.00 - ₹33.00",
  },
  {
    date: "3 Mar 2024",
    retailprice: "₹54.00",
    wholesaleprice: "₹34.00 - ₹37.00",
    priceatfarm: "₹35.00 - ₹32.00",
  },
  {
    date: "2 Mar 2024",
    retailprice: "₹59.00",
    wholesaleprice: "₹37.00 - ₹40.00",
    priceatfarm: "₹38.00 - ₹35.00",
  },
  {
    date: "1 Mar 2024",
    retailprice: "₹55.00",
    wholesaleprice: "₹35.00 - ₹37.00",
    priceatfarm: "₹36.00 - ₹33.00",
  },
  {
    date: "29 Feb 2024",
    retailprice: "₹57.00",
    wholesaleprice: "₹36.00 - ₹39.00",
    priceatfarm: "₹37.00 - ₹34.00",
  },
  {
    date: "28 Feb 2024",
    retailprice: "₹53.00",
    wholesaleprice: "₹33.00 - ₹36.00",
    priceatfarm: "₹34.00 - ₹32.00",
  },
  {
    date: "27 Feb 2024",
    retailprice: "₹52.00",
    wholesaleprice: "₹33.00 - ₹35.00",
    priceatfarm: "₹34.00 - ₹31.00",
  },
  {
    date: "26 Feb 2024",
    retailprice: "₹51.00",
    wholesaleprice: "₹32.00 - ₹35.00",
    priceatfarm: "₹33.00 - ₹31.00",
  },
  {
    date: "25 Feb 2024",
    retailprice: "₹50.00",
    wholesaleprice: "₹32.00 - ₹34.00",
    priceatfarm: "₹33.00 - ₹30.00",
  },
  {
    date: "24 Feb 2024",
    retailprice: "₹47.00",
    wholesaleprice: "₹30.00 - ₹32.00",
    priceatfarm: "₹31.00 - ₹28.00",
  },
  {
    date: "23 Feb 2024",
    retailprice: "₹52.00",
    wholesaleprice: "₹33.00 - ₹35.00",
    priceatfarm: "₹34.00 - ₹31.00",
  },
  {
    date: "22 Feb 2024",
    retailprice: "₹56.00",
    wholesaleprice: "₹35.00 - ₹38.00",
    priceatfarm: "₹36.00 - ₹34.00",
  },
  {
    date: "21 Feb 2024",
    retailprice: "₹49.00",
    wholesaleprice: "₹31.00 - ₹33.00",
    priceatfarm: "₹32.00 - ₹29.00",
  },
  {
    date: "20 Feb 2024",
    retailprice: "₹46.00",
    wholesaleprice: "₹29.00 - ₹31.00",
    priceatfarm: "₹30.00 - ₹28.00",
  },
  {
    date: "19 Feb 2024",
    retailprice: "₹53.00",
    wholesaleprice: "₹33.00 - ₹36.00",
    priceatfarm: "₹34.00 - ₹32.00",
  },
  {
    date: "18 Feb 2024",
    retailprice: "₹53.00",
    wholesaleprice: "₹33.00 - ₹36.00",
    priceatfarm: "₹34.00 - ₹32.00",
  },
  {
    date: "17 Feb 2024",
    retailprice: "₹53.00",
    wholesaleprice: "₹33.00 - ₹36.00",
    priceatfarm: "₹34.00 - ₹32.00",
  },
  {
    date: "16 Feb 2024",
    retailprice: "₹53.00",
    wholesaleprice: "₹33.00 - ₹36.00",
    priceatfarm: "₹34.00 - ₹32.00",
  },
  {
    date: "15 Feb 2024",
    retailprice: "₹54.00",
    wholesaleprice: "₹34.00 - ₹37.00",
    priceatfarm: "₹35.00 - ₹32.00",
  },
  {
    date: "14 Feb 2024",
    retailprice: "₹54.00",
    wholesaleprice: "₹34.00 - ₹37.00",
    priceatfarm: "₹35.00 - ₹32.00",
  },
  {
    date: "13 Feb 2024",
    retailprice: "₹46.00",
    wholesaleprice: "₹29.00 - ₹31.00",
    priceatfarm: "₹30.00 - ₹28.00",
  },
  {
    date: "12 Feb 2024",
    retailprice: "₹46.00",
    wholesaleprice: "₹29.00 - ₹31.00",
    priceatfarm: "₹30.00 - ₹28.00",
  },
  {
    date: "11 Feb 2024",
    retailprice: "₹48.00",
    wholesaleprice: "₹30.00 - ₹33.00",
    priceatfarm: "₹31.00 - ₹29.00",
  },
  {
    date: "10 Feb 2024",
    retailprice: "₹47.00",
    wholesaleprice: "₹30.00 - ₹32.00",
    priceatfarm: "₹31.00 - ₹28.00",
  },
];

app.get("/api/data", (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const elementsPerPage = 50;
    const startIndex = (page - 1) * elementsPerPage;
    const endIndex = startIndex + elementsPerPage;
    const paginatedData = data.slice(startIndex, endIndex);
    res.json(paginatedData);
  } catch (error) {
    console.error("Error fetching paginated data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/broccolidata", (req, res) => {
  try {
    res.json(broccolidata);
  } catch (error) {
    console.error("Error fetching broccoli data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
app.get("/api/italianBassil", (req, res) => {
  try {
    res.json(italianBassil);
  } catch (error) {
    console.error("Error fetching italianBassil data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/swisschard", (req, res) => {
  try {
    res.json(swisschard);
  } catch (error) {
    console.error("Error fetching swisschard data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});