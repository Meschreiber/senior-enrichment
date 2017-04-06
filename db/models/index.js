'use strict';

// Require all the models
	// Running each model (i.e. table) module (i.e. file) registers each model into Sequelize so any other part of the application could call Sequelize.model('user') OR Sequelize.models.user to get access to the `user` model.
	// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/index.js`)

const Student = require('./student')
const Campus = require('./campus')

Campus.hasMany(Student);
// This gives students as campusId value


// Campus.findOne({where:{name: 'Earth'}})
// Campus.findOne({where:{name: "Qo'Nos"}})

Promise.all([Student.findOne({where:{name: 'Seven of Nine'}}), Campus.findOne({where:{name: 'Borg Collective (Remote)'}})])
.then(function([seven, borg]) {
	seven.update({campusId: borg.id})
})
.catch(console.error)

Promise.all([Student.findOne({where:{name: 'Commander Riker'}}), Campus.findOne({where:{name: 'Earth'}})])
.then(function([jean, earth]) {
	jean.update({campusId: earth.id})
})
.catch(console.error)

Promise.all([Student.findOne({where:{name: 'Data'}}), Campus.findOne({where:{name: 'Earth'}})])
.then(function([jean, earth]) {
	jean.update({campusId: earth.id})
})
.catch(console.error)

Promise.all([Student.findOne({where:{name: 'Kathryn Janeway'}}), Campus.findOne({where:{name: 'Earth'}})])
.then(function([jean, earth]) {
	jean.update({campusId: earth.id})
})
.catch(console.error)

Promise.all([Student.findOne({where:{name: 'Jean-Luc Picard'}}), Campus.findOne({where:{name: 'Earth'}})])
.then(function([jean, earth]) {
	jean.update({campusId: earth.id})
})
.catch(console.error)

Promise.all([Student.findOne({where:{name: 'Worf'}}), Campus.findOne({where:{name: "Qo'noS"}})])
.then(function([worf, kronos]) {
	worf.update({campusId: kronos.id})
})
.catch(console.error)

Promise.all([Student.findOne({where:{name: 'Spock'}}), Campus.findOne({where:{name: 'Vulcan'}})])
.then(function([spock, vulcan]) {
	spock.update({campusId: vulcan.id})
})
.catch(console.error)





module.exports = {Student, Campus}
