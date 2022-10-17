//Import Router
import { Router } from "express";
import utils from "../utils/index.js";
import auth from "../utils/auth/auth.js";
import controller from "../src/index.js";

//Initialize Router
const router = Router();
router.get('/',(req,res)=>{
    res.send('Welcome to Demo Credit');
})
router.post('/login', async (req,res) => {
    res.json(await utils.login(req.body))
})
router.post('/register', async (req,res) => {
    res.json(await utils.register(req.body))
})

router.post('/fund', async (req, res) => {
    res.json(await auth.verify(req.headers));
});

router.post('/transfer', async (req, res) => {
    var checkToken = await auth.verify(req.headers);
    if(checkToken){
        await controller.transfer(req.body, checkToken)
        res.send('Okay')
    }else {
        res.json({'success':false, 'message': 'Invalid Token'})
    }
});

export default router;