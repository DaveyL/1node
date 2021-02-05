const { group } = require("console");
const { read } = require("fs");

voegToeAanGroep = (datum) => {
    var groep = 1 + (datum % 7);
    console.log("Je bent toegevoegd aan de groep " + groep)
}

voegToeAanGroep2 = () => {
    const readline = require("readline");
    const readdatum = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readdatum.question("Geef je geboortedatum volgens dit formaat JJJJMMDD bv 20010727: ", function(geboortedatum) {
    var groep = 1+ (geboortedatum % 7);
    console.log("Je bent toegevoegd aan de groep " + groep)
    readdatum.close;
 })
}

voegToeAanGroep3 = () => {
    const readline = require("readline");
    const readdatum = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readdatum.question("Geef je geboortedatum volgens dit formaat JJJJMMDD bv 20010727: ", function(geboortedatum) {
    var groep = 1+ (geboortedatum % 7);
    console.log("Je bent toegevoegd aan de groep " + groep)
    console.log("Je quote of the day is: ")

    switch(groep) {
        case 1:
          console.log("Deze quote is voor groep 1")
          break;
        case 2:
            console.log("Deze quote is voor groep 2")
          break;
          case 3:
            console.log("Deze quote is voor groep 3")
          break;
        case 4:
            console.log("Deze quote is voor groep 4")
          break;
        case 5:
            console.log("Deze quote is voor groep 5")
          break;
        case 6:
            console.log("Deze quote is voor groep 6")
        break;
        default:
            console.log("Deze quote is voor groep 7")
      }
      readdatum.close;
 })
}

voegToeAanGroep(20010727)
voegToeAanGroep2()
voegToeAanGroep3()