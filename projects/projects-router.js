const express = require('express');

const Projects = require('../data/helpers/projectModel.js');

const router = express.Router();

router.get('/:id', async (req, res) => {
    try {
       const project = await Projects.getById(req.params.id)
       if (project) {
        res.status(200).json(project)
       } else {
           res.status(404).json({
               message: 'Project not found'
           })
       }
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Error retrieving the project'
        })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const projActions = await Projects.getProjectActions(req.params.id);
    } catch {

    }
})

router.post('/', async (req, res) => {
    try {
        const project = await Projects.insert(req.body);
        res.status(201).json(project)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Error adding the project'
        })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const check = await Projects.update(req.params.id, req.body)
        if (check === 1) {
            res.status(200).json(check)
        } else {
            res.status(404).json({
                message: 'The project could not be found'
            })
        }
    } catch (err) {
        res.status(500).json({
            message: 'Error updating the project'
        })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const count = await Projects.remove(req.params.id);
        if (count > 0) {
            res.status(200).json({
                message: 'The project has been deleted'
            })
        } else {
            res.status(404).json({
                message: 'The project could not be found'
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Error deleting the project'
        })
    }
})

module.exports = router;