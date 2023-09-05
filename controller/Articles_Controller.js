const MongoClient = require("mongodb").MongoClient;

const client = new MongoClient(
    "mongodb+srv://betterlogics:bll0077@atlascluster.do89alp.mongodb.net/?retryWrites=true&w=majority/news-test",
    { useNewUrlParser: true, useUnifiedTopology: true }
  );

exports.articleCategories = (req,res)=>{
    try {
        const db = client.db("news-test");
        db.collection("categories_articles")
          .find({category:req.body.category})
          .toArray((err, result) => {
            res.status(200).send({
              data: result,
              success: true
            });
          });
      } catch (e) {
        console.log(e);
      }
}

exports.articleDetails = (req,res)=>{
    console.log(req.body)
    try {
        const db = client.db("news-test");
        db.collection("main_articles")
          .find({title:req.body.title})
          .toArray((err, result) => {
            res.status(200).send({
              data: result,
              success: true,
            });
          });
      } catch (e) {
        console.log(e);
      }
}
exports.groupingArticle = (req,res)=>{
    try {
        const db = client.db("news-test");
        db.collection("grouping_articles")
          .find({primary:req.body.primary})                    
          .toArray((err, result) => {
            res.status(200).send({
              data: result,
              success: true,
            });
          });
      } catch (e) {
        console.log(e);
      }
}