const router = require('express').Router();
const userRoutes = require('./userRoutes');
const cardRoutes = require('./cardRoutes');

<<<<<<< HEAD
router.use('/users', userRoutes);
=======
router.use('/users', userRoutes)
<<<<<<< HEAD
>>>>>>> 68cb9a6eb7a38e994b885039f9b883cfb52301ec

=======
router.use('/cards', cardRoutes)
>>>>>>> 04abc12815708976345b5cd2ae3bff30dc1db3fc
module.exports = router;
