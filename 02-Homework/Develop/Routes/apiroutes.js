
const fs = require('fs');
const {v4: uuidv4 } = require('uuid');


module.exports = (app) => {
    app.get("/api/notes", (req, res)=>{
    let dataStorage =JSON.parse(fs.readFileSync("./data/db.json", "utf-8"));

    res.json(dataStorage);
});

app.post('/api/notes', (req, res) => {
    let bodyInfo = req.body;

    bodyInfo.id = uuidv4()

    let dataStorage = JSON.parse(fs.readFileSync("./data/db.json", "utf-8"));

    dataStorage.push(bodyInfo)

    fs.writeFileSync('./data/db,json', JSON.stringify(dataStorage));

    res.json(bodyInfo);

})

app.delete("/api/notes/:id", (req, res) => {
    let deleteThis = req.params.id;

    let notes = JSON.parse(fs.readFileSync("./data/db.json", "utf-8"));

    const newNotes = notes.filter(placeHolder => placeHolder.id !== deleteThis)

    fs.writeFileSync("./data/dbjson", JSON.stringify(newNotes))

    res.json(newNotes)
})
}



// router.get('/notes', function (req, res) => {
//    fs.readFile('./db/db.json','utf-8', function (err, data) => {
// res.json(JSON.parse(data));
//    })
   
// });


// router.post('/notes', (req, res) => {
//     const notes = req.body;
//     notes.id = uuidv4();
//     dbJSON.push(notes);
//     fs.writeFile(path.join(__dirname, './db/db.json'), JSON.stringify(dbJSON, null, 2), (err) => {
//         if (err) {
//         return res.json({ error: "Error writing to file" });
//             }
//         return res.json(notes);
//         });

// });

// module.exports = router;