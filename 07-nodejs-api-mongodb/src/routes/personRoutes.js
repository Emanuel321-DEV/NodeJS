
const router = require("express").Router();
const Person = require("../models/Person");

router.post("/", async (request, response) => {
    
    const { name, salary, approved } = request.body;
    
    if(!name || !salary || !approved){
        return response.status(422).json({ message: "name, salary and approved are required params"});
    }

    const person = {
        name,
        salary,
        approved
    };

    try {
        await Person.create(person);

        return response.status(201).json({ message: "Person created!"});

    } catch(error){
        return response.status(500).json({ error: error });
    }

});

router.get("/", async (request, response) => {
    try {

        const people = await Person.find();
        return response.status(200).json(people);
    
    } catch(error){
        return response.status(500).json({ error: error });
    }
});

router.get("/:id", async (request, response) => {
    const { id } = req.params;

    try {
        const person = await Person.findOne({ _id: id });

        if(!person){
            return response.status(404).json({ message: "Person not Found"})
        }

        return response.status(200).json(person);
    } catch(error){
        return response.status(500).json({ error: error });
    }
});


router.patch("/:id", async (request, response) => {
    const { id } = req.params;
    const { name, salary, approved } = request.body;
    const personData = {
        name,
        salary,
        approved
    };

    if(!name || !salary || !approved ){
        return response.status(422).json({ message: "name, salary and approved are required params" })
    }

    try {
        const person = await Person.findOne({ _id: id });

        if(!person){
            return response.status(404).json({ message: "Person not Found"})
        }

        const personUpdate = await Person.updateOne({_id: id }, personData);

        return response.status(200).json(personUpdate);
    } catch(error){
        return response.status(500).json({ error: error });
    }
});

router.delete("/:id", async (request, response) => {
    const { id } = req.params;
    try {
        const person = await Person.findOne({ _id: id });

        if(!person){
            return response.status(404).json({ message: "Person not Found"})
        }

        await Person.deleteOne({ _id: id });

        return response.status(200).json({ message: "Person deleted! "});
    } catch(error){
        return response.status(500).json({ error: error });
    }
});

module.exports = router;