import mongoose from "mongoose";

const db_uri =
  "mongodb+srv://ravidharigond:fTvoaG6RV7qKJSyP@cluster0.hkcctof.mongodb.net/";

const connection = async () => {
  try {
    const conn = await mongoose.connect(db_uri);
    console.log(`Connected To MongoDB database ${conn.connection.host}`);
  } catch (err) {
    console.log(`connection error: ${err.message}`);
  }
};

export default connection;
