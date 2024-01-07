const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;
const DB=require("./models/DB")
app.use(cors());
app.use(express.json());

// Handles any other endpoints [unassigned - endpoints]
// app.use("*", (req, res) => res.status(404).json("NO content at this path"));

const userRouter=require("./routes/userRouter");
app.use("/users",userRouter)
const roleRouter=require("./routes/roleRouter");
app.use("/roles",roleRouter)
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
