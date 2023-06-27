const db = require('../../bin/firebase');
const validTones = require('../utils/validTones');

var dataNotes = [];
var dataChord = [];

exports.getByType = async (req, res, next) => {
    var tone = req.params.key.toLowerCase();
    var type = (req.params.type ? req.params.type.toLowerCase() : 'major');

    if(validTones.indexOf(tone) > -1) {
        await db.orderByChild('key').equalTo(tone).once("child_added", snapshot => {
            dataNotes = snapshot.child('notes').val();
        });

        switch(type){
            case 'minor':
                dataChord = [ dataNotes[0], dataNotes[3], dataNotes[7]];
                break;
            case '7':
                dataChord = [ dataNotes[0], dataNotes[3], dataNotes[7], dataNotes[11]];
                break;
            case 'major':
            default:
                dataChord = [ dataNotes[0], dataNotes[4], dataNotes[7]];
        }

        return res.status(200).send(dataChord);
    } else {
        res.status(404).send(`Tone "${req.params.key}" is not found.`);
    }
}