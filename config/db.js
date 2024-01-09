import mongoose from "mongoose";
import colors from "colors";
const connectDB = async () => {
  try {
    // Get connection string to connect to MongoDB
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Conneted To MongoDB Databse ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Error in MongoDB ${error}`.bgRed.white);
  }
};

export default connectDB;
