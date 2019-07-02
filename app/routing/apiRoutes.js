var friends = require("../data/friends");

module.exports = function(app){
    app.get("/api/friends", function(req,res){
        res.json(friends);
    });

    app.post("/api/friends", function(req,res){
        var userData = req.body;
       
        // Constant to start difference
        var lowest = 30; 
        var friendIndex = 0;
        for(j = 0; j<userData.scores.length; j++){
            userData.scores[j] = parseInt(userData.scores[j]); 
        console.log("user score:", userData.scores[j]);
        }
                for ( i = 0; i<friends.length; i++){
                    var total = 0;
                    for(m = 0; m<friends[i].scores.length; m++){
                        var difference = Math.abs(userData.scores[m] - parseInt(friends[i].scores[m]));
                        total += difference;
                    }

                    if (total < lowest) {
                        friendIndex = i;
                        lowest = total;
                    }
                }
                friends.push(userData);
                
                res.send(friends[friendIndex]);
                console.log(friends[friendIndex]);
    });
}