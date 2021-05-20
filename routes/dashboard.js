const router = require('express').Router();
const verify = require('../verifyToken');
const Room = require('../model/Room');
const {roomValidation} = require('../validation');

router.get('/', verify, async (req,res) => {
    Room.collection.find().toArray().then(results => {
        res.send(results);
    })
        .catch()
});

// ADD ROOM
router.post('/create', verify, async (req, res) => {
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

// DELETE ROOM
router.delete('/delete/:id', verify, async (req, res) => {
    //check if room with ID exists in DB
    const roomExist = await Room.findOne({_id: req.params.id});
    if (!roomExist) {
        return res.status(400).send('Room does not exist');
    }else {
        try{
            const deletedRoom = await Room.deleteOne( { _id: req.params.id } );
            res.send('room: ' + req.params.id + ' removed');
        }catch(err){
            res.status(400).send(err);
        }
    }

});

module.exports = router;
