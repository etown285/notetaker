

// -- Using Express Router -- //
const router = require('express').Router();
const fs = require('fs'); 
// const { writeFileSync } = require('node:fs');



// Route --> /api/
// router.get('/', (req, res) => {
// fs.readFile('/db.json')

// });


// module.exports = router;


// ------------------------------------ //

// -- Use Activity 15 hot Restaurant as example -- //
module.exports = (app) => {

    const notes = JSON.parse(fs.readFileSync(`${__dirname}/../db/db.json`))
    
    // route for requesting the DB data
    app.get('/api/notes', (req, res) => {
        
        return res.json(notes)
    })


    // route for adding new data to the DB dataset (file)
    app.post('/api/notes', (req, res) => {

        let notesId = notes.length 
        let newTitle = req.body.title
        let newText = req.body.text

        let newNote = {
            id:notesId, 
            title:newTitle, 
            text:newText
        }

        notes.push(newNote); 
        
        fs.writeFile(`${__dirname}/../db/db.json`,JSON.stringify(notes), ()=> {

        })

        console.log(notes)

        res.json(notes.slice(-1));
    
        // const newNote = Object.assign({ id:notesId, title:newTitle, })


    });

    app.delete('/api/notes/:id', (req,res)=> {
        notes
    })
}