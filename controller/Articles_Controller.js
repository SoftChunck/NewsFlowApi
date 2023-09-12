const MongoClient = require("mongodb").MongoClient;

const client = new MongoClient(
  "mongodb+srv://betterlogics:bll0077@atlascluster.do89alp.mongodb.net/?retryWrites=true&w=majority/news-test",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const axios = require("axios").default;

const authUsername = "0587f491685d571b66210175468cf676";
const authPassword = "eb6c606b41b16aac0b29395aa0e54aae";
// const authUsername = "7f5be08cf944712538e8f8dd723da546";
// const authPassword = "e94bc942f35c51823945e6b421b5422b";


exports.articleCategories = (req, res) => {
  try {
    const db = client.db("news-test");
    db.collection("categories_articles")
      .find({ category: req.body.category })
      .toArray((err, result) => {
        res.status(200).send({
          data: result,
          success: true,
        });
      });
  } catch (e) {
    console.log(e);
  }
};

exports.articleDetails = (req, res) => {
  console.log(req.body);
  try {
    const db = client.db("news-test");
    db.collection("main_articles")
      .find({ title: req.body.title })
      .toArray((err, result) => {
        res.status(200).send({
          data: result,
          success: true,
        });
      });
  } catch (e) {
    console.log(e);
  }
};
exports.groupingArticle = (req, res) => {
  try {
    const db = client.db("news-test");
    db.collection("grouping_articles")
      .find({ primary: req.body.primary })
      .toArray((err, result) => {
        res.status(200).send({
          data: result,
          success: true,
        });
      });
  } catch (e) {
    console.log(e);
  }
};

exports.sendEmailToAll = (req, res) => {
  const sendEmail = async (emailDetails, reciversData) => {
    const reqURL = "https://api.mailjet.com/v3.1/send";
    const reqBody = {
      Messages: [
        {
          From: {
            Email: emailDetails.senderEmail,
            Name: emailDetails.senderName,
          },
          To: reciversData,
          Subject: emailDetails.subject,
          TextPart: emailDetails.textMessage,
          HTMLPart: emailDetails.htmlMessage,
        },
      ],
    };
    const reqAuth = {
      username: authUsername,
      password: authPassword,
    };
    const reqHeader = {
      "Content-Type": "application/json",
    };
    await axios
      .post(reqURL, reqBody, {
        auth: reqAuth,
        headers: reqHeader,
      })
      .then((ress) => {
        res.status(200).send({
          data:ress.data,
          success: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  try {
    const db = client.db("test");
    db.collection("user_registration_forms")
      .find({})
      .toArray((err, result) => {
        const reciversData = [
          // {
          //   Email:"usamamuneebai@gmail.com",
          //   Name:"Usama"
          // }
        ];
        result.map((user)=>{
          if(user.email.match(/@/)){
            reciversData.push({
              Email:user.email,
              Name:user.UserName
            })
          }
        })
        const emailDetails = {
          // senderEmail: "contact@newsflow.io",
          senderEmail: "softchunck@gmail.com",
          senderName: req.body.senderName,
          subject: req.body.subject,
          textMessage: req.body.textMsg,
          htmlMessage: req.body.htmlMsg,
        };
        sendEmail(emailDetails,reciversData)
        
      });
  } catch (e) {
    console.log(e);
  }
};
