'use strict'
const router = require('express').Router()
const db = require('../db')
const Student = require('../db/models/student')
const Campus = require('../db/models/campus')


// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.

// ME: Which path?  Where??

// I know this because we automatically send index.html for all requests that don't make sense in our backend.
// Ideally you would have something to handle this, so if you have time try that out!

// ME: In react-router, IndexRedirect?

router.get('/hello', (req, res) => res.send({hello: 'world'}))

// Routes

// GET 
// - all campus
router.get('/campus', function (req, res, next) {
	Campus.findAll()
	.then(campus => res.json(campus))
	.catch(next)
})

//param for future use
router.param('campusId', function(req, res, next, id){
	Campus.findById(id)
		.then(function(campus) {
			if (!campus){
				const err = Error('Campus not found')
				err.status = 404;
				throw err
			}
			req.campus = campus
			next();
			return null;
		})
		.catch(next);
})

// - a campus by id
router.get('/campus/:campusId', function (req, res) {
	res.json(req.campus)
})

// - all students
router.get('/students', function (req, res, next) {
	Student.findAll()
	.then(students => res.json(students))
	.catch(next)
})


router.param('studentId', function(req, res, next, id){
	Student.findById(id)
		.then(function(student) {
			if (!student){
				const err = Error('Student not found')
				err.status = 404;
				throw err
			}
			req.student = student
			next();
			return null;
		})
		.catch(next);
})


// - a student by id
router.get('/students/:studentId', function (req, res) {
	res.json(req.student)
})

// POST
// - new campus
router.post('/campus', function (req, res, next) {
	Campus.create(req.body)
	.then(newCampus => res.json(newCampus))
	.catch(next)
})

// - new student
router.post('/student', function (req, res, next) {
	Student.create(req.body)
	.then(newStudent => res.json(newStudent))
	.catch(next)
})

// PUT
// - updated student info for one student
router.put('/students/:studentId', function (req, res) {
	req.student.update(req.body)
	res.sendStatus(204)
})
// - updated campus info for one campus
router.put('/campus/:campusId', function (req, res) {
	req.campus.update(req.body)
	res.sendStatus(204)
})

// DELETE
// - a campus
router.delete('/campus/:campusId', function (req, res) {
	req.student.destroy()
	res.sendStatus(204)
	// hook to delete all attached students?
})

// - a student
router.delete('/students/:studentId', function (req, res) {
	req.student.destroy()
	res.sendStatus(204)
})

module.exports = router