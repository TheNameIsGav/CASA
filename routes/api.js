const express = require('express');

const router = express.Router();

const BlogPost = require('../models/blogPost');
const User = require('../Database/User')
// Routes
router.get('/', (req, res) => {
    BlogPost.find({  })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', daerrorta);
        });
});

router.post('/save', (req, res) => {
    const data = req.body;

    const newBlogPost = new BlogPost(data);

    newBlogPost.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'Sorry, internal server errors' });
            return;
        }
        // BlogPost
        return res.json({
            msg: 'Your data has been saved!!!!!!'
        });
    });
});


router.get('/name', (req, res) => {
    const testCoach = {
        username: "test coach",
        password: "test_coach_password",
    }
    res.json(testCoach);

});



module.exports = router;
