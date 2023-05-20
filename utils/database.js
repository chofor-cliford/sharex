import mongoose from "mongoose";

let isConnected = false; // track the connection

export const connectToDB = async () => {

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log("MongoDB cconnected");
  } catch (error) {
    console.log(error);
  }
};
