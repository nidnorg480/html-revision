
//On ecoute le click 

$('.nav.item').click(function (event)  {
    $('.nav.item').removeClass('active');
    $(this).addClass ("active");
    });

//On vide la div qui contient le mot
var word = $('#tap-text').text().trim();

$('#tap-text').text('');

//Parcourir les lettres du mot 
for (let i = 0; i < word.length; i++) {
    console.log(word[i]);


setTimeout(function(){
    console.log(word[i]);

    $("#tap-text").append(word[i]);
    
}, 300 * i);
}
