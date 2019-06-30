var friendData = require("../data/friends");

module.exports = function(app){
    app.get("/api/friends", function(req,res){
        res.json(friendData);
    });

    app.post("/api/friends", function(req,res){
        friendData.push(req.body);
        var difference;
        var total;
        var friendCompat = [];
        var lowest = [];
        for(j = 0; j<userData.scores.length; j++){
            userData[j] = parseInt(question[j]); 

                for ( i = 0; i<friendData.length; i++){
                    for(m = 0; m<friendData[i].scores.length; m++){
                        difference = (question[j] - parseInt(friendData[i].scores[m])) *-1;
                        total += difference;
                        var friend = {
                            name: friendData.name,
                            compatibility = total,
                        };
                        friendCompat.push(friend);
                    }
                }
        }   
        for (d = 0; d<friendCompat.length; d++){
            for(l=0;l<lowest.length;l++){
            if (friendCompat[d].compatibility <= lowest[l].compatibility){
              lowest[l] = friendCompat[d];  
            } 
            else{
                lowest.push(friendCompat[d]);
            } 
            }
        }
    });
}