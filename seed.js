// This file should contain all the record creation needed to seed the database with its default values.
// The data can then be loaded with the node seed.js

var Promise = require('bluebird');
var db = require('./db/models');
var Student = require('./db/models/student');
var Campus = require('./db/models/campus');


var data = {
    campus: [
        {
            name: "Earth",
            imageUrl: "http://solarviews.com/raw/earth/bluemarblewest.jpg",
            blurb: "Also known as Terra, or Sol III. Earth is the homeworld of the Human species, and the location of the capital of the United Federation of Planets in Paris, as well as Starfleet Headquarters based in San Francisco. Earth's moon, called Luna, or Sol IIIa, is also colonized. The capital is Tycho City. At least one other sentient race evolved on Earth in the past, the reptilian Voth species. Possibly descended from Hadrosaurids, the Voth became advanced and developed space travel, escaping Earth before an asteroid impact 65 million years ago. They relocated to the Delta Quadrant. Another likely-sentient race evolved on Earth along with Humans, as humpback whales are strongly implied to be sentient based on their communication with Spock and the probe orbiting Earth in Star Trek IV."
        },
        {
            name: "Qo'noS",
            imageUrl: "http://solarviews.com/raw/earth/bluemarblewest.jpg",
            blurb: "The main capital world of the Klingon Empire. It is also referred to as Kronos (an alternative transliteration), Klinzhai, or Kling. The reference to a native or anything pertaining to the people, 'Klingon,' derives from this last reference."
        },
        {
            name: "Vulcan",
            imageUrl: "http://solarviews.com/raw/earth/bluemarblewest.jpg",
            blurb: "A dry, hostile planet in the 40 Eridani A system that is the homeworld of the Vulcan people, who are also known as Vulcanians."
        },
        {
            name: "Borg Collective (Remote)",
            imageUrl: "http://solarviews.com/raw/earth/bluemarblewest.jpg",
            blurb: "The Borg Collective was the term used to define the collective intelligence comprising all members linked together into a hive mind via subspace transceivers and calling themselves the Borg. It was the de facto governing power, as the term was considered by individuals, over all Borg civilization."
        },
    ],
    student: [
        {
            name: "Jean-Luc Picard",
            email: "thecapn@gmail.com",
        },
        {
            name: "Worf",
            email: "klingons4eva@gmail.com",
        },
        {
            name: "Commander Riker",
            email: "thebeard@bearded.com",
        },
        {
            name: "Seven of Nine",
            email: "36ofD@gmail.com",
        },
        {
            name: "Kathryn Janeway",
            email: "therealcapn@gmail.com",
        },
        {
            name: "Spock",
            email: "CatLove@gmail.com",
        },

    ]
};

// db.sync({ force: true })
//     .then(function () {
//         console.log("Dropped old data, now inserting data");
//         return Promise.map(Object.keys(data), function (name) {
//             return Promise.map(data[name], function (item) {
//                 return db.model(name)
//                     .create(item, {
//                         include: [Place]
//                     });
//             });
//         });
//     })
//     .then(function () {
//         return Day.create({ number: 1 });
//     })
//     .then(function () {
//         console.log("Finished inserting data");
//     })
//     .catch(function (err) {
//         console.error('There was totally a problem', err, err.stack);
//     })
//     .finally(function () {
//         db.close() // uses promises but does not return a promise. https://github.com/sequelize/sequelize/pull/5776
//         console.log('connection closed'); // the connection eventually closes, we just manually do so to end the process quickly
//         return null; // silences bluebird warning about using non-returned promises inside of handlers.
//     });