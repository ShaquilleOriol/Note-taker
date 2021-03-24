const router = require('express').Router();
const fs = require('fs');
const { error } = require('console');

router.get('/notes', function (req, res) => {
   fs.readFile('./db/db.json','utf-8', function (err, data) => {
res.json(JSON.parse(data));
   })
   
});


router.post('/notes', (req, res) => {
    const notes = req.body;
    notes.id = uuidv4();
    dbJSON.push(notes);
    fs.writeFile(path.join(__dirname, './db/db.json'), JSON.stringify(dbJSON, null, 2), (err) => {
        if (err) {
        return res.json({ error: "Error writing to file" });
            }
        return res.json(notes);
        });

});

module.exports = router;