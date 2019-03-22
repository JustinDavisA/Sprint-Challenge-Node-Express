const express = require('express');

const Actions = require('../data/helpers/actionModel.js');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const actions = await Actions.get()
        res.status(200).json(actions)
    } catch {
        res.status(500).json({
            message: 'Error retrieving actions'
        })
    }   
})

router.get('/:id', async (req, res) => {
    try {
       const action = await Actions.getById(req.params.id)
       if (action) {
        res.status(200).json(action)
       } else {
           res.status(404).json({
               message: 'Action not found'
           })
       }
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Error retrieving the action'
        })
    }
})

router.post('/', async (req, res) => {
    try {
        const action = await Actions.insert(req.body);
        res.status(201).json(action)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Error adding the action'
        })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const check = await Actions.update(req.params.id, req.body)
        if (check === 1) {
            res.status(200).json(check)
        } else {
            res.status(404).json({
                message: 'The action could not be found'
            })
        }
    } catch (err) {
        res.status(500).json({
            message: 'Error updating the action'
        })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const count = await Actions.remove(req.params.id);
        if (count > 0) {
            res.status(200).json({
                message: 'The action has been deleted'
            })
        } else {
            res.status(404).json({
                message: 'The action could not be found'
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Error deleting the action'
        })
    }
})

module.exports = router;