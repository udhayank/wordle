var words = "which there their about bould these other words could write first water after where right think three years place sound great again still every small found those never under might while house world below asked going large until along shall being often earth began since study night light above paper parts young story point times heard whole white given means music miles thing today later using money lines order group among learn known space table early trees short hands state black shown stood front voice".split(" ");

var randomIndex = Math.floor( Math.random() * words.length );

var word = words[randomIndex];
// console.log(word);
var input = [];

var rowIndex = 0;
var index = 0;



var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {

    document.body.addEventListener("click", () => {
        var elem = document.getElementById("hidden-input");
        console.log("clicked");
        elem.focus();
    });

    document.body.addEventListener("input", (event) => {
        var chVal = event.target.value;
        var ch = chVal.charCodeAt(chVal.length-1);
        console.log(ch);
        if (ch >= 97 && ch <= 122) {
            input.push(String.fromCharCode(ch));
            var rows = document.querySelectorAll(".row");
            var row = rows[rowIndex];
            var cell = row.children[index];
            index++;
            cell.children[0].innerText = String.fromCharCode(ch-32);
            
            if (index == 5) {
                checkWord(row);
                rowIndex++;
                index = 0;
            }
    
            if (rowIndex > 5){
                setTimeout(gameOver, "2 second");
            }
    
        }
    });

}

document.body.addEventListener("keydown", (event) => {
    var ch = event.key.charCodeAt(0);
    if (ch >= 97 && ch <= 122) {
        input.push(String.fromCharCode(ch));
        var rows = document.querySelectorAll(".row");
        var row = rows[rowIndex];
        var cell = row.children[index];
        index++;
        cell.children[0].innerText = String.fromCharCode(ch-32);
        
        if (index == 5) {
            checkWord(row);
            rowIndex++;
            index = 0;
        }

        if (rowIndex > 5){
            setTimeout(gameOver, "2 second");
        }

    }
});



var checkWord = (row) => {
    let isCorrect = true;
    for (let i=0; i<5; i++){
        // console.log(input[i]);
        // console.log(word.indexOf(input[i]));
        if (input[i] == word[i]){
            row.children[i].style.backgroundColor = "darkgreen";
        } else if (word.indexOf(input[i]) >= 0){            
            row.children[i].style.backgroundColor = "darkgoldenrod";
            isCorrect = false;
        } else {
            row.children[i].style.backgroundColor = "grey";
            isCorrect = false;
        }
    }

    if (isCorrect){
        setTimeout(gameWon, "2 second");  
    }

    input = [];

}

var gameOver = () => {
    alert("Game over!");
    location.reload();
}

var gameWon = () => {
    alert("Won!");
    location.reload();
}
