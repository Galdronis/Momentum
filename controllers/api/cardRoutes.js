const router = require('express').Router();
const { User, Cards } = require('../../models');

router.get('/', async (req, res) => {
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

  router.get('/:id', async (req, res) => {
    try {
      const cardData = await Cards.findByPk(req.params.id, {
        include: [{ model: User }],
      });
  
      if (!cardData) {
        res.status(404).json({ message: 'No card found with that id!' });
        return;
      }
  
      res.status(200).json(cardData);
    } catch (err) {
      res.status(500).json(err);
    }
  }); 

  router.post('/', async (req, res) => {
    try {
      const cardData = await Cards.create({
          name: req.body.name,
          description: req.body.description,
        });
  
        req.session.save(() => {
          
        res.status(200).json(cardData);
        });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    });

  router.delete('/:id', async (req, res) => {
    try {
      const cardData = await Cards.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!cardData) {
        res.status(404).json({ message: 'No card found with that id!' });
        return;
      }
  
      res.status(200).json(cardData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;