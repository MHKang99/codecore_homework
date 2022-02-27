const express = require("express");
const knex = require("../db/client");

const router = express.Router();

router.get("/new", (req, res) => {
    res.render("new");
});

router.post('/createCohort', (req,res)=> {
    knex('cohorts')
    .insert({
        img_url: req.body.img_url,
        name: req.body.name,
        member: req.body.member
    })
    .then(cohorts => {
        res.redirect('/cohorts')
    });
});


router.get('/', (req, res)=> { 
    knex('cohorts')
    .orderBy('id', 'desc')
    .then(results => {
        res.render('cohorts', {
            cohorts: results
        })
    })
})



router.get('/:id', (req, res)=> {
    knex('cohorts')
    .where('id', req.params.id)
    .first()
    .then(result => {
        if (!result) {
            res.send('no post found')
        } else {
            res.render(`show`, {cohort: result})

        }
    })
})

router.post('/method', (req, res)=> {
    const method = req.body.flexRadioDefault;
    const quantity = req.body.quantity;
    const members = req.body.member;
    const id = parseInt(req.body.id);
    let finalArr = [];
    let arrayOfMembers = members.split(',')
    if (method === 'perTeam') {
        let perTeamArr = [];
            while (arrayOfMembers.length > 0) {
                let singleGroup = []
                for (let i = 0; i < quantity; i++) {
                    singleGroup.push(...arrayOfMembers.splice(Math.floor(Math.random()*arrayOfMembers.length),1)) 
                }
                perTeamArr.push(singleGroup)
            }
        finalArr = perTeamArr
    } else if (method === 'teamCount') {
        let teamCountArr = [];
        for (let i = 0; i < quantity; i++) {
            teamCountArr.push([])
        }
        while (arrayOfMembers.length > 0) {
            for (let i = 0; i < quantity; i++) {
                teamCountArr[i].push(...arrayOfMembers.splice(Math.floor(Math.random()*arrayOfMembers.length),1)) 
            } 
        }
        finalArr = teamCountArr 
    }
    res.render(`show`, {
        displayFormat: finalArr,
        cohort: req.body
    })
})

// deleting a post
router.post('/delete', (req,res)=> {
    console.log(req.body.delete)
    knex('cohorts')
    .where('id', req.body.delete)
    .del()
    .then(()=> {
        res.redirect('/cohorts')
    })
});


// going to edit page edit with the cohort data
router.get('/:id/edit', (req, res)=> {
    console.log(req.params.id)
    knex('cohorts')
    .where('id', req.params.id)
    .first()
    .then(result => {
        res.render('editform', {cohort: result})
    })
})


router.patch('/:id/editCohort', (req,res)=> {
    knex('cohorts')
    .where('id', req.params.id)
    .update({
        name: req.body.name,
        img_url: req.body.img_url,
        member: req.body.member
    })
    .then(()=> {
        res.redirect(`/cohorts/${req.params.id}`)
    })
})



module.exports = router;