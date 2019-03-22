var config = {
    apiKey: "AIzaSyCBGPX62rFRoiqdJn4GKjjqZgmJwKu_reY",
    authDomain: "john-e11b3.firebaseapp.com",
    databaseURL: "https://john-e11b3.firebaseio.com",
    projectId: "john-e11b3",
    storageBucket: "john-e11b3.appspot.com",
    messagingSenderId: "530050015277"
};

firebase.initializeApp(config);
var database = firebase.database();
console.log(database);
var username1 = 0;
var userchoice1 = 0;
var username2 = 0;
var userchoice2 = 0;
var user1Wins = 0;
var user2Wins = 0;
//var username1active = false; these were test variables they are still here for test
//var username2active = false;

// chat function variables
var chatuser1 = "";
var chatuser2 = "";

//function to determine the state of the game 
database.ref().on("value", function (snapshot) {
    if ((snapshot.child("userOne/dbusername1").exists() == false) && (snapshot.child("userTwo/dbusername2").exists() == false)) {
        document.getElementById("status").innerHTML = "no active players found, would you like to play?"
    }
    else if ((snapshot.child("userOne/dbusername1").exists() == true) && (snapshot.child("userTwo/dbusername2").exists() == false)) {
        document.getElementById("status").innerHTML = "player one is active, awaiting player two";
        $("#statusID").text(snapshot.val().userOne.dbusername1);
    }
    else if ((snapshot.child("userOne/dbusername1").exists() == false) && (snapshot.child("userTwo/dbusername2").exists() == true)) {
        document.getElementById("status").innerHTML = "player two is active, awaiting player one";
        $("#statusID").text(snapshot.val().userTwo.dbusername2);
    }
    else if ((snapshot.child("userOne/dbusername1").exists() == true) && (snapshot.child("userTwo/dbusername2").exists() == true)) {
        document.getElementById("status").innerHTML = "both players are active, please wait or press remove to start"
        $("#statusID").text(snapshot.val().userOne.dbusername1 + " and " + snapshot.val().userTwo.dbusername2);
    }


})

// function determins which user depending on who loads first
function start() {
   $(".interface").css("display", "block")
   $("#start").css("display", "none")
    database.ref().once("value", function (snapshot) {

        console.log(snapshot.child("userTwo/dbusername2").exists())
        console.log(snapshot.child("userOne/dbusername1").exists());
        if ((snapshot.child("userOne/dbusername1").exists() == false) && (snapshot.child("userTwo/dbusername2").exists() == false)) {
            console.log("no players active")
            $("#playerOneInterface").css("display", "block");
        } else if ((snapshot.child("userOne/dbusername1").exists() == true) && (snapshot.child("userTwo/dbusername2").exists() == false)) {
            $("#playerTwoInterface").css("display", "block")
            console.log("player one is active")
        }
        // this was a test function, keep it here might have use later. 
        // database.ref().set({
        //     dbusername1active: username1active,
        //     dbusername2active: username2active
        // })

        // if ((snapshot.val().dbusername1active == false) && (snapshot.val().dbusername2active == false)) {
        //     $("#playerOneInterface").css("display", "block");
        //     username1active = true;

        //     database.ref().set({
        //         dbusername1active: username1active,
        //         dbusername2active: username2active
        //     })
        // }
        // else if ((snapshot.val().dbusername1active == true) && (snapshot.val().dbusername2active == false)) {
        //     $("#playerTwoInterface").css("display", "block")

        // }


    })
}



// add user functions
$("#addUser1").on("click", function (event) {
    event.preventDefault();
    username1 = $("#player1").val()
    user1Wins = 0
    //sets the databse for user one
    database.ref("/userOne").set({
        dbusername1: username1,

    })
    //sets the databse for how many times user one wins
    database.ref("/userOnewins").set({
        dbuser1Wins: user1Wins,
    })
$("#addUser1").css("display", "none")
})
function rock1() {
    userchoice1 = "rock"
    // sets the database for first players Choice
    database.ref("/firstplayer_choice").set({
        dbuserChoice1: userchoice1,
    });

};
function paper1() {
    var userchoice1 = "paper"
    database.ref("/firstplayer_choice").set({
        dbuserChoice1: userchoice1,
    });

}
function scissors1() {
    var userchoice1 = "scissors"
    database.ref("/firstplayer_choice").set({
        dbuserChoice1: userchoice1,
    });

}



//player 2 functions
$("#addUser2").on("click", function (event) {
    event.preventDefault();
    username2 = $("#player2").val()
    user2Wins = 0
    //sets the database for user 2
    database.ref("/userTwo").set({
        dbusername2: username2,
    })
    // sets the databse for how many times user 2 has won
    database.ref("/userTwowins").set({
        dbuser2Wins: user2Wins,
    })
    $("#addUser2").css("display", "none")
   


})

// player 2 functions
function rock2() {
    var userchoice2 = "rock"
    database.ref("/secondplayer_choice").set({
        dbuserChoice2: userchoice2,
    });
    document.getElementById("p1choice").innerHTML ="You chose rock"

}
function paper2() {
    var userchoice2 = "paper"
    database.ref("/secondplayer_choice").set({
        dbuserChoice2: userchoice2,
    });
    document.getElementById("p1choice").innerHTML ="You chose paper"

}
function scissors2() {
    var userchoice2 = "scissors"
    database.ref("/secondplayer_choice").set({
        dbuserChoice2: userchoice2,
    });
    document.getElementById("p1choice").innerHTML ="You chose scissors"

}

// this functions looks at the database to determine which player has entered and which player is still awaiting to join
database.ref().on("value", function (snapshot) {
    if (snapshot.child("userOne/dbusername1").exists()) {
        $("#playernameone").text(snapshot.val().userOne.dbusername1)
    } else {
        $("#playernameone").text("awaiting player one");
    }
    if (snapshot.child("userTwo/dbusername2").exists()) {
        $("#playernametwo").text(snapshot.val().userTwo.dbusername2)
    } else {
        $("#playernametwo").text("awaiting player two");
    }

    if (snapshot.child("userOne/dbusername1").exists() && (snapshot.child("userTwo/dbusername2").exists())){
        $(".userinput").css("display", "none");
        $(".userinterface").css("display", "block");
    }
})

// function listens to the click values and when both values have been chosen will determine the winner and wipe the data
database.ref().on("value", function (snapshot) {

    if (snapshot.child("firstplayer_choice/dbuserChoice1").exists() && snapshot.child("secondplayer_choice/dbuserChoice2").exists()) {
        console.log("working")

        if (snapshot.val().firstplayer_choice.dbuserChoice1 == "rock") {
            console.log("user one has chosen rock");
            if (snapshot.val().secondplayer_choice.dbuserChoice2 == "rock") {
                console.log("tie")
                document.getElementById("winner").innerHTML = "its a tie";
            }
            else if (snapshot.val().secondplayer_choice.dbuserChoice2 == "paper") {
                console.log("user 1 loses")
                document.getElementById("winner").innerHTML = snapshot.val().userTwo.dbusername2 + " wins";
                user2Wins++
                console.log(user2Wins)
            }
            else if (snapshot.val().secondplayer_choice.dbuserChoice2 == "scissors") {
                user1Wins++
                console.log("user 1 wins")
                document.getElementById("winner").innerHTML = snapshot.val().userOne.dbusername1 + " wins";

            }
        }
        else if (snapshot.val().firstplayer_choice.dbuserChoice1 == "paper") {
            if (snapshot.val().secondplayer_choice.dbuserChoice2 == "rock") {
                document.getElementById("winner").innerHTML = snapshot.val().userOne.dbusername1 + " wins";
                user1Wins++
            }
            else if (snapshot.val().secondplayer_choice.dbuserChoice2 == "paper") {
                console.log(" user 1tie")
                document.getElementById("winner").innerHTML = "its a tie";
            }
            else if (snapshot.val().secondplayer_choice.dbuserChoice2 == "scissors") {
                user2Wins++
                console.log(" user 1 win")
                document.getElementById("winner").innerHTML = snapshot.val().userTwo.dbusername2 + " wins";
            }
        }
        else if (snapshot.val().firstplayer_choice.dbuserChoice1 == "scissors") {
            if (snapshot.val().secondplayer_choice.dbuserChoice2 == "rock") {
                console.log("user 1 lose")
                document.getElementById("winner").innerHTML = snapshot.val().userTwo.dbusername2 + " wins";
                user2Wins++
            }
            else if (snapshot.val().secondplayer_choice.dbuserChoice2 == "paper") {
                user1Wins++
                console.log("user 1 win")
                document.getElementById("winner").innerHTML = snapshot.val().userOne.dbusername1 + " wins";
            }
            else if (snapshot.val().secondplayer_choice.dbuserChoice2 == "scissors") {
                console.log("user 1 tie")
                document.getElementById("winner").innerHTML = "its a tie";

            }
        }

        database.ref("/firstplayer_choice").remove();
        database.ref("/secondplayer_choice").remove();

        database.ref("/userOnewins").set({
            dbuser1Wins: user1Wins,
        });


        database.ref("/userTwowins").set({
            dbuser2Wins: user2Wins,

        });
    }
});

//chat function 
$("#chatsubmit1").on("click", function (event) {
    event.preventDefault();
    chatuser1 = $("#chatuser1").val()
    database.ref("/chatuser1").set({
        dbchatuser1: chatuser1,
    })
    $("#chatuser1").val('');
})

$("#chatsubmit2").on("click", function (event) {
    event.preventDefault();
    chatuser2 = $("#chatuser2").val()
    database.ref("/chatuser2").set({
        dbchatuser2: chatuser2,
    })
    $("#chatuser2").val('');
})

database.ref().on("value", function (snapshot) {
    document.getElementById("p1chat").innerHTML = "your opponent says: " + snapshot.val().chatuser2.dbchatuser2;
    document.getElementById("p2message").innerHTML = "you said: " +snapshot.val().chatuser2.dbchatuser2;
    document.getElementById("p2chat").innerHTML ="your opponent says: " + snapshot.val().chatuser1.dbchatuser1;
    document.getElementById("p1message").innerHTML = "you said: " + snapshot.val().chatuser1.dbchatuser1;
    document.getElementById("p1wins").innerHTML = snapshot.val().userOnewins.dbuser1Wins;
    document.getElementById("p2wins").innerHTML = snapshot.val().userTwowins.dbuser2Wins;
})

function remove() {
    database.ref().remove()
    $("#statusID").text("");
    database.ref("/chatuser1").set({
        dbchatuser1: " ",
        
    })
    database.ref("/chatuser2").set({
        dbchatuser2: " ",
        
    })
   location.reload();
    }
