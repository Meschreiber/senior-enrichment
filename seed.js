// This file should contain all the record creation needed to seed the database with its default values.
// The data can then be loaded with the node seed.js

var Promise = require('bluebird');
var db = require('./db');
var Student = require('./db/models/student');
var Campus = require('./db/models/campus');


var data = {
    campuses: [
        {
            name: "Earth",
            imageUrl: "http://solarviews.com/raw/earth/bluemarblewest.jpg",
            blurb: "Also known as Terra, or Sol III. Earth is the homeworld of the Human species, and the location of the capital of the United Federation of Planets in Paris, as well as Starfleet Headquarters based in San Francisco. Earth's moon, called Luna, or Sol IIIa, is also colonized. The capital is Tycho City. At least one other sentient race evolved on Earth in the past, the reptilian Voth species. Possibly descended from Hadrosaurids, the Voth became advanced and developed space travel, escaping Earth before an asteroid impact 65 million years ago. They relocated to the Delta Quadrant. Another likely-sentient race evolved on Earth along with Humans, as humpback whales are strongly implied to be sentient based on their communication with Spock and the probe orbiting Earth in Star Trek IV."
        },
        {
            name: "Qo'noS",
            imageUrl: "https://hydra-media.cursecdn.com/sto.gamepedia.com/thumb/f/f0/Qo%27noS.jpg/250px-Qo%27noS.jpg?version=2b004fb0c21ca2b121a12b6174561483",
            blurb: "The main capital world of the Klingon Empire. It is also referred to as Kronos (an alternative transliteration), Klinzhai, or Kling. The reference to a native or anything pertaining to the people, 'Klingon,' derives from this last reference."
        },
        {
            name: "Vulcan",
            imageUrl: "https://futurism.com/wp-content/uploads/2013/02/200635_414242988662116_1691606020_n.jpg",
            blurb: "A dry, hostile planet in the 40 Eridani A system that is the homeworld of the Vulcan people, who are also known as Vulcanians."
        },
        {
            name: "Borg Collective (Remote)",
            imageUrl: "https://s-media-cache-ak0.pinimg.com/236x/91/74/65/9174658fc976d173dd95fb0d245e5bb9.jpg",
            blurb: "The Borg Collective was the term used to define the collective intelligence comprising all members linked together into a hive mind via subspace transceivers and calling themselves the Borg. It was the de facto governing power, as the term was considered by individuals, over all Borg civilization."
        },
    ],
    users: [
        {
            name: "Jean-Luc Picard",
            email: "thecapn@gmail.com",
            testimonial: "Tea. Earl Grey. Hot."
        },
        {
            name: "Worf",
            email: "klingons4eva@gmail.com",
            testimonial: "I am not concerned with pleasure, Commander, I am a warrior."
        },
        {
            name: "Commander Riker",
            email: "thebeard@bearded.com",
            testimonial: "Margaret Hamilton Interplanetary Academy of JS is smooth as an android's bottom."
        },
        {
            name: "Data",
            email: "9230238@gmail.com",
            testimonial: "I am not capable of love, but my programming finds MHIAJS very pleasing."
        },
        {
            name: "Seven of Nine",
            email: "36ofD@gmail.com",
            testimonial: "This school can alleviate your ignorance."
        },
        {
            name: "Kathryn Janeway",
            email: "therealcapn@gmail.com",
            testimonial: "They really go the extra lightyear."
        },
        {
            name: "Spock",
            email: "CatLove@gmail.com",
            testmonial: "Change is the essential process of all existence."
        },

    ]
};

db.sync({ force: true })
    .then(function () {
        console.log("Dropped old data, now inserting data");
        return Promise.map(Object.keys(data), function (name) {
            return Promise.map(data[name], function (item) {
                return db.model(name)
                    .create(item)
                    });
            });
    })
    .then(function () {
        console.log("Finished inserting data");
    })
    .catch(function (err) {
        console.error('There was totally a problem', err, err.stack);
    })
    .finally(function () {
        db.close() // uses promises but does not return a promise. https://github.com/sequelize/sequelize/pull/5776
        console.log('connection closed'); // the connection eventually closes, we just manually do so to end the process quickly
        return null; // silences bluebird warning about using non-returned promises inside of handlers.
    });