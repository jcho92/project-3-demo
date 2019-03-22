
$(document).ready(function () {
   
  function test(){
      console.log("test")
  }
    // variables for each character
    var thrawn = {
        name: 'Grand Admiral Thrawn',
        health: 120,
        attack: 5,
        counterAttack: 30,
        image: '<img src="assets/thrawn.png" class="character-image">',
        nickname: 'thrawn',
    };
    var yularen = {
        name: 'Admiral Yularen',
        health: 190,
        attack: 3,
        counterAttack: 20,
        image: '<img src="assets/yularen.jpg" class="character-image">',
        nickname: 'yularen',

    };
    var piette = {
        name: 'Captain Piette',
        health: 100,
        attack: 6,
        counterAttack: 40,
        image: '<img src="assets/piette.jpg" class="character-image">',
        nickname: 'piette',

    };
    var ackbar = {
        name: 'Admiral Ackbar',
        health: 500,
        attack: 1,
        counterAttack: 15,
        image: '<img src="assets/ackbar.jpg" class="character-image">',
        nickname: 'ackbar',

    };

    // these variable define the character list
    var characterChosen = false;
    var enemyChosen = false;
    var characterList = [thrawn, yularen, piette, ackbar];
    var yourCharacter;
    var yourCharacterName;
    var yourHealth;
    var yourAttack;
    var enemyCharacter;
    var enemyCharacterName;
    var enemyHealth = [];
    var enemyAttack = [];
    var wins = 0;

   

    // this section creats the character cards with their healths and stats
    for (i = 0; i < characterList.length; i++) {
        var characterCard = $("<div>");
        characterCard.addClass("characters-card");
        characterCard.addClass(characterList[i].nickname);
        characterCard.append('<div class="displayname">' + characterList[i].name);
        characterCard.append(characterList[i].image);
        characterCard.attr('data_name', characterList[i].name)
        characterCard.attr('data_health', characterList[i].health)
        characterCard.attr('data_attack', characterList[i].attack)
        characterCard.attr('id' , characterList[i].nickname)
        characterCard.attr('data_counterAttack', characterList[i].counterAttack)
        $('#character').append(characterCard);
        characterCard.append('<div class="characterHealth">' + characterList[i].health);

    };
    // onlick function to choose characters

    $(".characters-card").on("click", function () {
        
        // if ((characterChosen == true) && (enemyChosen == true)){
        //    return;
        // }

        if (characterChosen == false) {
            if (!$(this).hasClass(".characters-card.player")) {
                $(this).attr('class', 'player');
                $(this).appendTo('#playerCharacter');
                yourCharacter = $(this);
                yourHealth = parseInt(yourCharacter.attr('data_health'));
                yourAttack = parseInt(yourCharacter.attr('data_attack'));
                yourCharacterName = yourCharacter.attr('data_name');
                characterChosen = true;
                console.log(yourCharacterName)
                console.log("yourAttack " + yourAttack);
                console.log("yourHealth " + yourHealth);
            }
        }

        else if (enemyChosen == false) {
            if (!$(this).hasClass(".characters-card.opponent")) {
                $(this).attr('class', 'opponent');
                $(this).appendTo('#enemyCharacter');
                enemyChosen = true;
                enemyCharacter = $(this);
                enemyHealth = parseInt(enemyCharacter.attr('data_health'));
                enemyAttack = parseInt(enemyCharacter.attr('data_counterAttack'));
                enemyCharacterName = enemyCharacter.attr('data_name');
                
                console.log("enemy Character " + enemyCharacterName);
                console.log("enemy attack" + enemyAttack);
                console.log("enemy health" + enemyHealth);
            }
        }
    });// closing brcket for characters function
    // fight function
    
    $(".fight").on("click", function(){

        if ((enemyChosen == true) && (characterChosen == true)) {
            yourHealth = yourHealth - enemyAttack;
            console.log(yourHealth)
            enemyHealth = enemyHealth - yourAttack;
            console.log("this is your enemyHealth" + enemyHealth)
            yourAttack = yourAttack + yourAttack;
            console.log("this is your attack" + yourAttack);
            $('.player > .characterHealth').text(yourHealth);
            $('.opponent > .characterHealth').text(enemyHealth);

            if (enemyHealth <= 0) {
                enemyChosen = false;
                $('.opponent').empty();
                wins++;

            }
            if (yourHealth <= 0) {
                alert('gameover');
            }
        } else {
            alert('pick a character');
        };
        if (wins == 3) {
            alert('you win')
        }
        console.log(characterList.length);
    });

    $('#restart').click(function() {
        location.reload();
    });


});//on load function close



