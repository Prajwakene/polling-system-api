const mongoose = require('mongoose');

const connectWithDb = () => {
  mongoose
    .connect(process.env.DB_URL || "mongodb://127.0.0.1:27017/polling-system-api", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log(`DB connected successfully`))
    .catch((error) => {
      console.log(`DB connection failed`);
      console.log(error);
      process.exit(1);
    });
};

module.exports = connectWithDb
