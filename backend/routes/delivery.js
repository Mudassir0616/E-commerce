import express from 'express'
import deliveryModel from '../models/deliveryModel.js';

const router = express.Router()

router.post('/', async(req,res)=>{
    const body = req.body;

    const send = new deliveryModel({ ...body, status:true })
    try {
        await send.save()

        res.status(201).send(send)
    } catch (error) {
        res.status(500).send(error)
    }
})
export default router