import express from "express";

const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const relationship = [
    {
        id: 1,
        ex: "Samkelo",
        gender: "Female",
        reason: "Not enough time"
    },
    {
        id: 2,
        ex: "Lisa",
        gender: "Female",
        reason: "Too tall"
    },
    {
        id: 3,
        ex: "Zama",
        gender: "Female",
        reason: "Worked too much"
    },
    {
        id: 4,
        ex: "Amanda",
        gender: "Female",
        reason: "Different interests"
    },
    {
        id: 5,
        ex: "Jessica",
        gender: "Female",
        reason: "Moved away"
    },
    {
        id: 6,
        ex: "Emily",
        gender: "Female",
        reason: "Wanted different things"
    },
    {
        id: 7,
        ex: "Samantha",
        gender: "Female",
        reason: "Too clingy"
    },
    {
        id: 8,
        ex: "Megan",
        gender: "Female",
        reason: "Focused on career"
    },
    {
        id: 9,
        ex: "Sarah",
        gender: "Female",
        reason: "Lack of communication"
    },
    {
        id: 10,
        ex: "Rebecca",
        gender: "Female",
        reason: "Cultural differences"
    },
    {
        id: 11,
        ex: "Anna",
        gender: "Female",
        reason: "Grew apart"
    },
    {
        id: 12,
        ex: "Olivia",
        gender: "Female",
        reason: "Trust issues"
    },
    {
        id: 13,
        ex: "Sophia",
        gender: "Female",
        reason: "Financial issues"
    },
    {
        id: 14,
        ex: "Chloe",
        gender: "Female",
        reason: "Family interference"
    },
    {
        id: 15,
        ex: "Grace",
        gender: "Female",
        reason: "Different priorities"
    },
    {
        id: 16,
        ex: "Natalie",
        gender: "Female",
        reason: "Frequent arguments"
    },
    {
        id: 17,
        ex: "Rachel",
        gender: "Female",
        reason: "Lack of affection"
    },
    {
        id: 18,
        ex: "Emma",
        gender: "Female",
        reason: "Jealousy"
    },
    {
        id: 19,
        ex: "Isabella",
        gender: "Female",
        reason: "Cheating"
    },
    {
        id: 20,
        ex: "Ava",
        gender: "Female",
        reason: "Incompatibility"
    }
];


app.get('/api/relationship/random', (req, res) => {
    const random = Math.floor(Math.random() * relationship.length);
    res.send(relationship[random])
})


app.post('/api/relationship', (req, res) => {

    try {

        const ex1 = req.body.ex;
        const gender1 = req.body.gender;
        const reason1 = req.body.reason;


        const id = relationship[relationship.length - 1].id

        console.log(ex1);


        const data = {
            id: id + 1,
            ex: ex1,
            gender: gender1,
            reason: reason1,
        }

        relationship.push(data)

        res.json(relationship)

    } catch (error) {

        res.send(`Error : ${error}`);

    }


})

app.delete('/api/relationship/delete/:id', (req, res) => {

    try{

    const idb = req.params.id

    console.log(`id ${idb}`)

    const index = relationship.findIndex((rel) => {
       return rel.id == parseInt(idb)
    })

    
    console.log(`index ${index}`)

    relationship.splice(index,1)


    res.json(relationship)

    }catch(error){

        res.send(error);
    }

});










app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})