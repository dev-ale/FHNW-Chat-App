const router = require('express').Router();
const verify = require('../verifyToken');
const Room = require('../model/Room');
const {roomValidation} = require('../validation');

router.get('/', async (req,res) => {
    Room.collection.find().toArray().then(results => {
        console.log('get rooms called')
        console.log(results)
        res.send(results);
    })
        .catch()
});

// ADD ROOM
router.post('/create', async (req, res) => {
    console.log('create room called')
    // Validate Data before creating new room
    const { error } = roomValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //check ig room with name is already in DB
    const nameExist = await Room.findOne({name: req.body.name});
    if (nameExist)return res.status(400).send('Room already exist');


    // create new Room
    const room = new Room ({
        name: req.body.name,
        type: req.body.type,
        creator: req.body.creator,
    });
    try{
        const savedRoom = await room.save();
        res.send({room: room._id });
    }catch(err){
        res.status(400).send(err);
    }
});

module.exports = router;
