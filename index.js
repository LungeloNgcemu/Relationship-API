import express from "express";

const app = express()
const port = 3000

app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));

const relationship = [
    {
        ex: "Samkelo",
        gender: "Female",
        reason: "Not enough time"
    },
    {
        ex: "Lisa",
        gender: "Female",
        reason: "Too tall"
    },
    {
        ex: "Zama",
        gender: "Female",
        reason: "Worked too much"
    },
    {
        ex: "Amanda",
        gender: "Female",
        reason: "Different interests"
    },
    {
        ex: "Jessica",
        gender: "Female",
        reason: "Moved away"
    },
    {
        ex: "Emily",
        gender: "Female",
        reason: "Wanted different things"
    },
    {
        ex: "Samantha",
        gender: "Female",
        reason: "Too clingy"
    },
    {
        ex: "Megan",
        gender: "Female",
        reason: "Focused on career"
    },
    {
        ex: "Sarah",
        gender: "Female",
        reason: "Lack of communication"
    },
    {
        ex: "Rebecca",
        gender: "Female",
        reason: "Cultural differences"
    },
    {
        ex: "Anna",
        gender: "Female",
        reason: "Grew apart"
    },
    {
        ex: "Olivia",
        gender: "Female",
        reason: "Trust issues"
    },
    {
        ex: "Sophia",
        gender: "Female",
        reason: "Financial issues"
    },
    {
        ex: "Chloe",
        gender: "Female",
        reason: "Family interference"
    },
    {
        ex: "Grace",
        gender: "Female",
        reason: "Different priorities"
    },
    {
        ex: "Natalie",
        gender: "Female",
        reason: "Frequent arguments"
    },
    {
        ex: "Rachel",
        gender: "Female",
        reason: "Lack of affection"
    },
    {
        ex: "Emma",
        gender: "Female",
        reason: "Jealousy"
    },
    {
        ex: "Isabella",
        gender: "Female",
        reason: "Cheating"
    },
    {
        ex: "Ava",
        gender: "Female",
        reason: "Incompatibility"
    }
];



app.get('/api/relationship', (req, res) => {
    res.send(relationship[0])
});


app.get('/api/relationship/random', (req, res) => {
    const random = Math.floor(Math.random() * relationship.length);
    res.send(relationship[random])
})


app.post('/api/relationship', (req, res) => {

    try{

    const ex1 = req.body.ex;
    const gender1 = req.body.gender;
    const reason1 = req.body.reason;

    console.log(ex1);


    const data = {
        ex: ex1,
        gender: gender1,
        reason: reason1,
    }

    relationship.push(data)

    res.json(relationship)

      } catch (error){

        res.send(`Error : ${error}`);
        
    }


})










app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})