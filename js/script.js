$(window).on('load', function () {
    setTimeout(function () {
        $('.carousel').css({'display': 'none'});
        $('.content').fadeIn().css({'display': 'flex'});
    }, 700);
});

(function () {
    var meals = {
        "Spaghetti bolognese and a fresh orange juice.": [true, true, true],
        "Polish pierogi with blueberries and a sweet cream nute.": [false, true, false],
        "Fresh ribs in a barbecue sauce and a glass of a good beer.": [true, false, true],
        "Spaghetti bolognese with a fresh rucola leaves.": [true, true, false],
        "Pasta with a fresh sweet cottage cheese.": [false, true, true],
        "Hmm, a scrambled eggs, maybe?": [false, false, false],
        "Pizza ala capricciosa with a fresh Prosciutto di Parma slices.": [true, false, false],
        "A fresh and slightly frozen strawberry shake.": [false, false, true]
    };

    $('#qButton1Y').click(function () {
        if (this.id == 'qButton1Y') {
            answers.push(true);
        }
    });
    $('#qButton1N').click(function () {
        if (this.id == 'qButton1N') {
            answers.push(false);
        }
    });
    $('#qButton2Y').click(function () {
        if (this.id == 'qButton2Y') {
            answers.push(true);
        }
    });
    $('#qButton2N').click(function () {
        if (this.id == 'qButton2N') {
            answers.push(false);
        }
    });
    $('#qButton3Y').click(function () {
        if (this.id == 'qButton3Y') {
            answers.push(true);
        }
    });
    $('#qButton3N').click(function () {
        if (this.id == 'qButton3N') {
            answers.push(false);
        }
    });

    var answers = [];

    function check() {
        Object.keys(meals).map(function (value, index) {
            if (meals[value].every(function (v, i) {
                    return v == answers[i]
                })) {
                document.getElementById('result').innerHTML = value;
            }
        });
    }

    $('.startButton').click(function () {
        $('.msgDiv').fadeOut(200);
        $('.firstPic').fadeOut(200);
        setTimeout(function () {
            $('#firstQ').fadeIn(200);
            $('.secondPic').fadeIn(200);
        }, 200)
    });

    $('#qButton1Y, #qButton1N').click(function () {
        $('#firstQ').fadeOut(200);
        $('.secondPic').fadeOut(200);
        setTimeout(function () {
            $('#secondQ').fadeIn(200);
            $('.thirdPic').fadeIn(200);
        }, 200)
    });

    $('#qButton2Y, #qButton2N').click(function () {
        $('#secondQ').fadeOut(200);
        $('.thirdPic').fadeOut(200);
        setTimeout(function () {
            $('#thirdQ').fadeIn(200);
            $('.fourthPic').fadeIn(200);
        }, 200)
    });

    $('#qButton3Y, #qButton3N').click(function () {
        check();
        $('#thirdQ').fadeOut(200);
        $('.fourthPic').fadeOut(200);
        setTimeout(function () {
            $('#finalScreen').fadeIn(200);
            $('.fifthPic').fadeIn(200);
        }, 200)
    });

    $('#tryAgainButton').click(function () {
        $('.content').css({'display': 'none'});
        location.reload();
    });
})();
