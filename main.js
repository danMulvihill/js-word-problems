//1. reverse a string

function reverseAString(str){
    var strArr = str.split("");
    var strLen = strArr.length;
    var revStrArr = [];
    console.log(strArr.length, revStrArr.length);
    for (var i=0; i<strLen; i++){
        revStrArr.push(strArr.pop());
    }
    var revStr = revStrArr.join("");
    return revStr
}

console.log(reverseAString("a nut for a jar of tuna"));

//2. fizz buzz

function fizzBuzz(){
    var x = "";
    for (var i=1; i<=100; i++){
        if (i%3==0 && i%5 == 0){
            x += "Fizz Buzz\n";
        }else if (i%5==0){
            x += "Fizz\n";
        }else if (i%3==0){
            x += "Buzz\n";
        }else{
            x+= i+'\n';
        }        
    }
    return x;
}

console.log(fizzBuzz());


// 3. Pig latin;

function pigLatin(phrase){

    var word = phrase.split(' ');
    var pigPhrase = "";
    for (i=0; i<word.length; i++){
        word[i] = word[i].toLowerCase();
       
        if (word[i].endsWith(".") || word[i].endsWith(',')){
            //var punc = word[i].slice(word[i].length-1);
            word[i] = word[i].slice(0, word[i].length-1);
        }

        var w = word[i].charAt(0);
        var w1 = word[i].charAt(1);
        var w2 = word[i].charAt(2);
        var w3 = word[i].charAt(3);
        if ( w == "a" || w == "e" || w =="i" || w == "o" || w =="u"){
            word[i] = word[i] + "ay ";
            pigPhrase += word[i];
        }else if ( w1 == "a" || w1 == "e" || w1 =="i" || w1 == "o" || w1 =="u"){
            word[i] = word[i].slice(1) + word[i].slice(0,1) + "ay "
            pigPhrase += word[i];
        }else if ( w2 == "a" || w2 == "e" || w2 =="i" || w2 == "o" || w2 =="u" ){
            word[i] = word[i].slice(2) + word[i].slice(0,2) + "ay ";
            pigPhrase += word[i];
        }else if ( w3 == "a" || w3 == "e" || w3 =="i" || w3 == "o" || w3 =="u" ){
            word[i] = word[i].slice(3) + word[i].slice(0,3) + "ay ";
            pigPhrase += word[i];
        }
        //console.log(word[i], punc)
        // if (punc){
        //     word[i].trim();
        //     word[i] += word[i]+punc;
        // }
        
        //I didn't put the puncuations or cases back in, 
        //since Latin originally had no puncuations or cases, 
        //so I assume the same rules hold of Pig Latin.  I did try though. 
        
    }
    return pigPhrase;
}

console.log(pigLatin("The quick brown fox jumped over the lazy dog."));