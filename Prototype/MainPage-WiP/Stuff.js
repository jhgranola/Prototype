var images = [

]

function populatePetNest() {

    document.getElementById("profileimg").src = images[Math.floor(Math.random() * images.length)];

    document.getElementById("name").innerHTML = names[Math.floor(Math.random() * names.length)] + " " + names[Math.floor(Math.random() * names.length)];

    document.getElementById("age").innerHTML = Math.floor(Math.random() * (maxAge - minAge + 1) + minAge);

    document.getElementById("distance").innerHTML = Math.floor(Math.random() * 50);

    var string1 = nouns[Math.floor(Math.random() * nouns.length)];
    var string2 = nouns[Math.floor(Math.random() * nouns.length)];

    document.getElementById("noun1").innerHTML = string1.charAt(0).toUpperCase() + string1.slice(1);
    document.getElementById("noun2").innerHTML = string2.charAt(0).toUpperCase() + string2.slice(1);

    document.getElementById("likes1").innerHTML = likes[Math.floor(Math.random() * likes.length)];
    document.getElementById("likes2").innerHTML = likes[Math.floor(Math.random() * likes.length)];

    document.getElementById("quirky").innerHTML = quirks[Math.floor(Math.random() * quirks.length)];

};

