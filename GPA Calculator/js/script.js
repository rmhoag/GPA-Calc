var gparesult = Math.round(100 * totalpoints / totalcredithours) / 100
        document.forms["gpadata"].result.value = gparesult

function gpacalculator(form) {
        var numberOfcourses = 7

        var totalpoints = 0
        var totalcredithours = 0
        for (var coursenumber = 1; coursenumber <= numberOfcourses ;
    coursenumber++) {
            var gradeelement = "grade" + coursenumber
            var credithourselement = "credithours" + coursenumber
            var gradeselection =
    form.elements[gradeelement].options.selectedIndex
            var gradenumber =
    form.elements[gradeelement].options[gradeselection].value
            var credithours = parseFloat(form.elements[credithourselement].value)
            if ((gradenumber > -1) && (credithours > 0)) {
                totalpoints += (gradenumber * credithours)
                totalcredithours += credithours
            }
        }
        var gparesult = Math.round(100 * totalpoints / totalcredithours) / 100
        document.forms["gpadata"].result.value = gparesult
    };

function gpaalert() {
    var x=parseInt(document.getElementById(gparesult))
        if (x == 4) {
            window.open("http://3.bp.blogspot.com/-NP5vtzWrn0Y/UWc0THla3-I/AAAAAAAAAxk/2O_rIXPv14I/s1600/Alana+Blanchard+Hot.jpeg")
        }
        else if (x <= 3.99 && x >= 3.5) {
            window.open("http://sphotos-a.ak.fbcdn.net/hphotos-ak-prn1/531852_500224240011457_108496057_n.jpg")
        }
        else if (x <= 3.49 && x >= 3) {
            window.open("http://25.media.tumblr.com/564a9dbf9d7ae384dc8021e1b0d31055/tumblr_miuirsMBRd1r9p21to1_500.jpg")
        }
        else if (x <= 2.99 && x >= 2.5) {
            window.open("http://images.askmen.com/specials/2010_top_99/marisa-miller.jpg")
        }
        else if (x <= 2.49 && x >= 2) {
            window.open("http://i887.photobucket.com/albums/ac78/Dominate80/Ugly2.jpg")
        }
        else if (x <= 1.99 && x >= 1.5) {
            window.open("http://www.singledudetravel.com/wp-content/uploads/2012/02/fat-chick.jpg")
        }
        else if (x <= 1.49) {
            window.open("http://1.bp.blogspot.com/__3CuGrqKx-Q/Shs8GBC38oI/AAAAAAAAABo/EgX8DJj3Bm8/s320/ugly+bitch.jpg")

        };
    };


    

    
    

    








