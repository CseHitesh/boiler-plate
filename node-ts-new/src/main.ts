import { config } from "./config";
import connectDB from "./db";
import { httpServer } from "./server";
const startServer = async () => {
  try {
    await connectDB();
    httpServer.listen(config.PORT || 8080, () => {
      console.log("⚙️  Server is running on port: " + config.PORT);
    });
  } catch (error) {
    console.log("⚙️ Error: ", error);
  }
};

startServer();
