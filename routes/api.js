const express = require ('express');

const router = express.Router();

const BlogPost = require('../models/blogPost');

//Routes
router.get('/testing', (req, res) => {
    const data = {
        uname: 'accimeesterlin',
        age: 5
    };
    BlogPost.find({ })
      .then ((data) => {
        console.log('Data: ', data)
        res.json(data);
      })
      .catch ((error) => {
        console.log('error: ', daerrorta);
      })
});



router.post('/testing/save', (req,res) => {
    //console.log('body: ', req.body);
    const data = req.body;

    //BlogPost
    const newBlogPost = new BlogPost(data);
    //.save
    newBlogPost.save((error) => {
        //BlogPost
        if (error){
            res.status(500).json({msg:'Sorry internal server rrror'});
            return;
        }
        res.json({
            msg: 'Your data has been saved!!!!!'
        });
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