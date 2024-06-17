const { Router } = require('express')
const controller = require('./controllers')

const router = Router()

router.get('/', controller.getFunds)
router.get('/:id', controller.findFundById)
router.get('/byname/:name', controller.findFundByName); 
router.post('/', controller.addNewFund);
router.delete('/byid/:id', controller.deleteFundByID);



module.exports = router