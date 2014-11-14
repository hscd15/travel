// JavaScript Document

document.addEventListener("DOMContentLoaded", init);

function init(){

var startValue = 1000;

$(".sliderUI").slider({
                         min: 100, 
                         max: 2000, 
                         value: 1000, 
                         create: function( event, ui ){
                             $(".price").text('$' + startValue);
                         },
                         slide: function( event, ui){
                             $(".price").text('$' + ui.value);
                         }
});
}