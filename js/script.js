$( "document" ).ready(function() {
    $(".container").keyup(function (event) {
        if (event.keyCode === 13) {
            $("#button").click();
        }
    });
    $("#button").click(function(){
        let word = $(".input").val();
        let letters = word.split('');
        if (word[0] === "a" || word[0] === "e" || word[0] === "i" || word[0] === "o" || word[0] === "u") {
            letters.push("ay");
        }else{
            letters.push(word[0]);
            letters.shift();
            letters.push("ay");
        }
        $(".output").text(letters.join(''));
    });
});