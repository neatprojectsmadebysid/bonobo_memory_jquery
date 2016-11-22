$(document).ready(function() {
  var app = {
    cards : //[1,1,2,2,3,3,4,4,5,5,6,6],
    [{
        "id": 0,
        "name_id": "loretta",
        clickable: true,
        "avatar": "photos/loretta1.png",
        "question": "photos/paisley.png"
    }, {
        "id": 1,
        "name_id": "loretta",
        clickable: true,
        "avatar": "photos/loretta2.png",
        "question": "photos/paisley.png"
    }, {
        "id": 2,
        "name_id": "maddie",
        clickable: true,
        "avatar": "photos/maddie1.jpg",
        "question": "photos/paisley.png"
    }, {
        "id": 3,
        "name_id": "maddie",
        clickable: true,
        "avatar": "photos/maddie2.png",
        "question": "photos/paisley.png"
    }, {
        "id": 4,
        "name_id": "makasi",
        clickable: true,
        "avatar": "photos/makasi1.png",
        "question": "photos/paisley.png"
    }, {
        "id": 5,
        "name_id": "makasi",
        clickable: true,
        "avatar": "photos/makasi2.png",
        "question": "photos/paisley.png"
    }, {
        "id": 6,
        "name_id": "mali",
        clickable: true,
        "avatar": "photos/mali1.png",
        "question": "photos/paisley.png"
    }, {
        "id": 7,
        "name_id": "mali",
        clickable: true,
        "avatar": "photos/mali2.png",
        "question": "photos/paisley.png"
    }, {
        "id": 8,
        "name_id": "vic",
        clickable: true,
        "avatar": "photos/vic2.png",
        "question": "photos/paisley.png"
    }, {
        "id": 9,
        "name_id": "vic",
        clickable: true,
        "avatar": "photos/vic1.png",
        "question": "photos/paisley.png"
    }, {
        "id": 10,
        "name_id": "lisa",
        clickable: true,
        "avatar": "photos/lisa1.png",
        "question": "photos/paisley.png"
    }, {
        "id": 11,
        "name_id": "lisa",
        clickable: true,
        "avatar": "photos/lisatest2.png",
        "question": "photos/paisley.png"
    }],

    init: function() {
      app.shuffle(app.cards);
    },
  shuffle: function(array) {
      var i = 0
    , j = 0
    , temp = null

    for (i = array.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    // return array
    app.assignCards();
  },
  assignCards: function() {
    $('.card').each(function(index) {
      $(this).attr('data-card-value',app.cards[index].name_id);
      //adding a second attr, to see if i can get pictures working
      $(this).attr('data-card-value2',app.cards[index].avatar);
    });
    app.clickHandlers();
  },
  // assignCards: function() {
  //   $('.card').each(function(index) {
  //     $(this).attr('data-card-value',app.cards[index]);
  //   });
  //   app.clickHandlers();
  // },
  clickHandlers: function() {
    $('.card').on('click', function() {
        $(this).html('<img src='+$(this).data('cardValue2')+'>').addClass('selected');

        //trying to get the name to appear in sidebar div
        $('.showName').html('<p>'+$(this).data('cardValue')+'</p>');

      app.checkMatch();})
      // app.checkMatch();

  },

  checkMatch: function() {
    if ($('.selected').length === 2) {
      if($('.selected').first().data('cardValue') === $('.selected').last().data('cardValue')) {
        //remove cards
        console.log('matched')
        $('.selected').each(function() {
          $(this).animate({opacity:0}).removeClass('unmatched');
        });
        $('.selected').each(function() {
          $(this).removeClass('selected');
        });
        app.checkWin();
      }
      else {
        //flip cards back over
        setTimeout(function() {
          $('.selected').each(function() {
            $(this).html('').removeClass('selected');
          })
        }, 1000);
      }
    }
  },
    checkWin: function() {
      if($('.unmatched').length === 0) {
        $('.container').html('<h1>You won! press f5 to play again</h1>');
      }
    }
  };
  app.init();
})
