const MongoClient = require("mongodb").MongoClient;

const client = new MongoClient(
  "mongodb+srv://betterlogics:bll0077@atlascluster.do89alp.mongodb.net/?retryWrites=true&w=majority/news-test",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
exports.politics = async (req, res) => {
  try {
    const db = client.db("news-test");
    db.collection("politics")
      .find()
      .toArray((err, result) => {
        console.log("db", result);
        console.log(result);
        res.status(200).send({
          data: result,
          success: true,
          msg: "artandfashions Data",
        });
      });
  } catch (e) {
    console.log(e);
  }
};

exports.entertainment = async (req, res) => {
  try {
    const db = client.db("news-test");
    db.collection("entertainments")
      .find()
      .toArray((err, result) => {
        console.log("db", result);
        console.log(result);
        res.status(200).send({
          data: result,
          success: true,
          msg: "artandfashions Data",
        });
      });
  } catch (e) {
    console.log(e);
  }
};

exports.artandfashions = async (req, res) => {
  try {
    const db = client.db("news-test");
    db.collection("artandfashions")
      .find()
      .toArray((err, result) => {
        console.log("db", result);
        console.log(result);
        res.status(200).send({
          data: result,
          success: true,
          msg: "artandfashions Data",
        });
      });
  } catch (e) {
    console.log(e);
  }
};

exports.stage_articles = async (req, res) => {
  try {
    const db = client.db("news-test");
    db.collection("stage_5_articles")
      .find()
      .toArray((err, result) => {
        console.log("db", result);

        res.status(200).send({
          data: result,
          success: true,
          msg: "artandfashions Data",
        });
      });
  } catch (e) {
    console.log(e);
  }
};
