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

                for ( i = 0; i<friendData.scores.length; i++){
                difference = (question[j] - parseInt(friendData.scores[i])) *-1;
                total+=difference;
                var friend = {
                    name: friendData.name,
                    compatibility = total,
                };
                friendCompat.push(friend);
            }
        }
        for (d = 0; d<friendCompat.length; d++){
            for(l=0;l<lowest.length;l++){
            if (friendCompat.compatibility[d] <= lowest.compatibility[l]){
              lowest[l] = friendCompat[d];  
            } 
            else{
                lowest.push(friendCompat[d]);
            } 
            }
        }
        // add logic for closest match for total.
    });
}