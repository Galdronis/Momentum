const router =require('express').Router()
const { User } = require("../models")


router.get('/', (req, res) => {
    res.render('homepage', {
      logged_in: req.session.logged_in
    })
  }
);

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/library', (req, res) => {
  if (req.session.logged_in) {
    res.render('library', {
      logged_in: req.session.logged_in
    })
  } else {
    redirect('/');
    return;
  }
  
  res.render('login')
})

router.get('/create', (req, res) => {
  res.render('userCreate')
})

module.exports = router;
