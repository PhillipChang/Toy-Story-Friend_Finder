var friendData = require("../data/friends");

module.exports = function(app){
    app.get("/api/friends", function(req,res){
        res.json(friendData);
    });

    app.post("/api/friends", function(req,res){
        friendData.push(req.body);
        var difference;
        var totalDiff;
        for(j = 0; j<userData.length; j++){
            userData[j] = parseInt(question[j]); 

                for ( i = 0; i<friendData.scores.length; i++){
                difference = (question[j] - parseInt(friendData.scores[i])) *-1;
                totalDiff += difference; 
                }
        }
    });
}