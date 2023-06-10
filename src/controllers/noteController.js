const db = require('../../bin/firebase');
const path = 'notes';

const validTones = ["c", "cx", "d", "dx", "e", "f", "fx", "g", "gx", "a", "ax", "b"];

exports.get = async (req, res, next) => {
    var dataNotes = [];

    await db.ref(path).once("value", function(snapshot) {
        dataNotes = snapshot.val();
    }).then((dataNotes) => dataNotes);

    if(dataNotes.length < 1){
        return res.status(204).send(dataNotes);   
    }

    return res.status(200).send(dataNotes);
}

exports.getByKey = async (req, res, next) => {
    var tone = req.params.key.toLowerCase();
    var dataNotes = [];

    if(validTones.indexOf(tone) > -1) {
        await db.ref(path).orderByChild('key').equalTo(tone).once("child_added", snapshot => {
            dataNotes = snapshot.child('notes').val();
    
            return res.status(200).send(dataNotes);
        });
    } else {
        res.status(404).send(`Tone "${req.params.key}" is not found.`);
    }
}