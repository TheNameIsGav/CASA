const express = require('express');
const router = express.Router();

//import BlogPost Schema
const BlogPost = require('../models/BlogPost');


//Routes
router.get ('/testing', (req,res) => {
    const data = {
      uname: 'accimeesterlin',
      age: 5
    };
    BlogPost.find ({})
      .then((data) => {
        console.log('testiesifj;sf;ei;jfew;fe;hs;s: ', data);
        res.json(data);
  
      })
      .catch((error) => {
        console.log('error: ', daerrorta);
      })
});
  
/*
router.post ('/testing/save', (req,res) => {
    console.log('Body: ', req.body);
    const data = req.body;

    const newBlogPost = new BlogPost(data); 
    newBlogPost.save((error) => {
      if (error){
        res.status(500).json({
          msg: "Internal server error"
        });
      } else {
        res.json({
          msg: 'Your data has been saved!'
        });
      }
    })
    // .save

    //BlogPost
    res.json({
        msg: "data recieved!"
    });
});
*/

router.post ('/testing/save', (req,res) => {
  console.log('Body: ', req.body);
  res.json({
      msg: "data recieved!"
  });
});

router.get ('/testing/name', (req,res) => {
    const data = {
      uname: 'peterson',
      age: 5
    }
    res.json(data);
});

module.exports = router;