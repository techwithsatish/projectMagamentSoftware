import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({ path: "./.env" });

const port = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`✅ Example app listening on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB Connection Error", err);
    process.exit(1);
  });
