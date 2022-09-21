const router =require('express').Router()
const { User } = require("../models")
const { Cards } = require("../models")


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

router.get('/library', async (req, res) => {
  try {
    const cardData = await Cards.findAll({
      include: [{ model: User }],
    });
    
    const cards = cardData.map((card) =>
    card.get({ plain: true })
    );
    console.log(cards)
    
    res.render('library',{
      cards,
      logged_in: req.session.logged_in,
    })
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/library', async (req, res) => {
//   try {
//     const cardData = await Cards.findAll({
//       include: [{ model: User }],
//     });

//     const cards = cardData.map((card) =>
//       card.get({ plain: true })
//     );

//     console.log(cards)

//     res.render('library',{
//       cards,
//       loggedIn: req.session.loggedIn,
//     })
//   } catch (err) {
//     res.status(500).json(err);
//   }
//   });

// router.get('/library', async (req, res) => {

// })

router.get('/create', (req, res) => {
  res.render('userCreate')
})

module.exports = router;
