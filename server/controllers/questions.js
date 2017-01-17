console.log('friends controller');
// WE NEED TO ADD A FEW lines of code here!
// How does a controller talk to mongoose and get a model?
// Build out the methods in the friendsControllers below
var mongoose = require('mongoose');
var Question = mongoose.model('Question');

function QuestionsController(){
  this.index = function(req,res){
    console.log("inside qustion index in routes");
    Question.find({}, false, true).populate('answers').exec(function(err, questions){
    console.log(questions);
	      res.json(questions);
	});
};
  this.create = function(req,res){
    console.log("inside question create");
    console.log(req.body);
    Question.create(req.body, function(err,result){
      if(err){
        console.log(err)
      }else{
        res.json(result)
      }
    })
    // res.json({placeholder:'create'});
  };
  // this.update = function(req,res){
  //   console.log('req.body', req.body);
  //   //your code here
  //   Question.findOne({_id:req.params.id},function(err,friend){
  //     if(err){
  //       console.log(err)
  //     }else{
  //       Question.firstName = req.body.firstName;
  //       Question.lastName = req.body.lastName;
  //       Question.birthday = req.body.birthday;
  //       Question.save(function(err,updatedFriend){
  //         if(err){
  //           console.log(err);
  //         }else{
  //           res.json(updatedFriend);
  //         }
  //       })
  //     }
  //   })
  //   // res.json({placeholder:'update'});
  // };
  // this.delete = function(req,res){
  //   //your code here
  //   Friend.remove({_id:req.params.id}, function(err){
  //     if(err){
  //       console.log(err);
  //     }else{
  //       res.json({message:"Friend deleted"});
  //     }
  //   })
  //
  // };
  this.delete = function(req, res) {
    console.log(req.params.id);
        Question.remove({_id: req.params.id}, function(err){
            if(err){console.log(err);}
            res.json();
        });
    };
    this.getHTML = function(req,res){
      console.log("inside this.getHTML ");
      Question.find({category:"HTML"},function(err, questions){
      console.log(questions);
  	      res.json(questions);
  	});
  };


  this.getCc = function(req,res){
    console.log("inside this.getCc ");
    Question.find({category:"C++"},function(err, questions){
    console.log(questions);
        res.json(questions);
  });
};



this.getMySQL = function(req,res){
  console.log("inside this.getMySQL");
  Question.find({category:"MySQL"},function(err, questions){
  console.log(questions);
      res.json(questions);
});
};

this.getRuby = function(req,res){
  console.log("inside this.getRuby");
  Question.find({category:"Ruby"},function(err, questions){
  console.log(questions);
      res.json(questions);
});
};



this.getPython = function(req,res){
  console.log("inside this.getPython");
  Question.find({category:"Python"},function(err, questions){
  console.log(questions);
      res.json(questions);
});
};
  // this.getHTML = function(req,res){
  //   //your code here
  //   console.log("inside this.getHTML");
  //   Question.find({
  //     category:"HTML"
  //   }, function(err, result){
  //     res.json(result);
  //   })
  //   .populate('answers')
  //   .exec(function(err, question){
  //     console.log("this.getHTML:",question);
  //     console.log('error', err);
  //   })
  // }
  // this.show = function(req,res){
  //   //your code here
  //   Question.find({
  //     category:"HTML"
  //   }, function(err, result){
  //     res.json(result);
  //   })
  //   .populate('answers')
  //   .exec(function(err, question){
  //     console.log('error', err);
  //   })
  // }
  // this.getHTML = function(req,res){
  //   Question.find({category:"HTML"}, function(err,result){
  //     console.log("questions.getHTML:",result);
  //     res.json(result);
  //   }).populate('answers').exec(function(err,question){
  //     console.log('error',err);
  //   })
  // };

  // this.getHTML = function(req,res){
  //   console.log("inside qustion this.getHTML");
  //   Question.find({category:"HTML"}, false, true).populate('answers').exec(function(err, questions){
  //   console.log(questions);
	//       res.json(questions);
	// });
  // }
  this.show = function(req,res){
    //your code here
    Question.findOne({
      _id: req.params.id
    }, function(err, result){
      res.json(result);
    })
    .populate('answers')
    .exec(function(err, question){
      console.log('error', err);
    })

}}
module.exports = new QuestionsController(); // what does this export?
