var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://lars:a30282957@ds127604.mlab.com:27604/homeproject', ['tasks'])

/* GET all tasks */
router.get('/', function(req, res, next) {
  db.tasks.find(function(err, tasks){
      if (err) {
          res.send(err)
      }
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.json(tasks);
  });
});

/*GET single taks*/
router.get('/:id', function(req, res, next) {
    db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
        if (err) {
            res.send(err)
        }
        res.json(task);
    });       
   });

/*Post single task*/
router.post('/add'), function(req, res, next) {
    var task = req.body;
    if(!task.title || (task.isDone)){
        res.status(400);
        res.json({
            "error":"Bad Data"
        })         
    }
    else {
        db.tasks.save(task, function(err, task){
        if (err) {
            res.send(err)
        }
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.json(task);
        })
    }       
}
//Delete task
router.delete('/delete/:id', function(req, res, next) {
    db.tasks.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
        if (err) {
            res.send(err)
        }
        res.json(task);
    });       
});


//Update task
router.put('/update/:id', function(req, res, next) {
    var task = req.body;
    var updTask = {};
    if(task.isDone){
        updTask.isDone = task.IsDone;
    }
    if(task.title){
        updTask.title = task.title;
    }

    if(!updTask){
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    }
    else{
        db.tasks.put({_id: mongojs.ObjectId(req.params.id)},updTask, {}, function(err, task){
            if (err) {
                res.send(err)
            }
            res.json(task);
        });
    }



           
});
module.exports = router;
