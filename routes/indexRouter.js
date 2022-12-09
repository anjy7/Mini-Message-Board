const express = require('express');
const router = express.Router();

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
 ];


router.get('/',(req,res) => {
    console.log("hi");
    res.status(200).render("index",{messages,title:"Mini-Message-Board"});
})

router.get( '/new',(req,res) => {
    res.status(200).render("form")
})

router.post( '/new',(req,res) => {
    const { author, message } = req.body;
    messages.push({ text: message, user: author, added: new Date() });
    res.redirect("/");
})


module.exports = router;
