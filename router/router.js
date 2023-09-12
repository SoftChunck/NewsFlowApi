const express = require("express");
const bodyParser = require("body-parser");

// import router 
const {getUser} = require("../controller/userController");
const { changePassword, create_user_profile, User_Sign_in, sendOTP, VarifyOTP, sendOTPForgot, forgotPassword, VarifyForgotOTP } = require("../controller/User_ProfileController");
const { politics, stage_articles, entertainment, artandfashions } = require("../controller/NewsShow_Control");
const { articleCategories, articleDetails, groupingArticle, sendEmailToAll } = require("../controller/Articles_Controller");
const router = express.Router();
router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());

router.route("/getUser").get(getUser)
router.route("/changePassword/:email").put(changePassword)
router.route("/create_user_profile").post(create_user_profile)
router.route("/User_Sign_in").post(User_Sign_in)
router.route("/sendOTP").post(sendOTP)
router.route("/VarifyOTP").post(VarifyOTP)
router.route("/sendOTPForgot").post(sendOTPForgot)
router.route("/forgotPassword/:email").post(forgotPassword)
router.route("/VarifyForgotOTP").post(VarifyForgotOTP)
// ---
router.route("/politics").get(politics)
router.route("/stage_articles").get(stage_articles)
router.route("/entertainment").get(entertainment)
router.route("/artandfashion").get(artandfashions)


//Article

router.route("/articalCategories").post(articleCategories)
router.route("/articalDetails").post(articleDetails)
router.route("/groupingArticle").post(groupingArticle)

//Send Email
router.route("/sendEmailToAll").post(sendEmailToAll)

















module.exports = router;