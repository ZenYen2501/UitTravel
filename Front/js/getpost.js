var header = $('#title-header');
var tourName = $('#tour-name');
var postTitle = $('#post-title');
var price = $('#price');
var imgHeader = $('.parallax-slider');
var content = $('#content');
var indicator = $('#indicator')
var listImage = $('#list-image')
var id = $("#id").html().toString()
$(document).ready(
$(function(){
    $.ajax({
        type: 'GET',
        url:'http://localhost:8080/rest/tour/20',
        success: function(item){
            header.text(item.tour.name);
            tourName.text(item.tour.name);
            imgHeader.attr("src",item.tour.image);
            postTitle.text(item.title);
            content.text(item.detail);
            price.text(item.price + " VNĐ")
        }
    })
})
)
$.getJSON("http://localhost:8080/rest/tour/20", function(jsons) {
    for(i = 0 ; i <jsons.images.length;i++)
    {
        if(i==0)
        {
            indicator.append("<li"+" "+"data-target=#carousel-example-2"+" "+"data-slide-to="+i+" class="+"\"active\"></li>");
            listImage.prepend("<div class=\"carousel-item active\">\n"+"<div class=\"view\">\n"+"<img class=\"d-block w-100\" src=\""+jsons.images[i].url+"\">\n"+"</div>\n"+"</div>");
        }
        else
        {
            indicator.append("<li"+" "+"data-target=#carousel-example-2"+" "+"data-slide-to="+i+"></li>");
            listImage.prepend("<div class=\"carousel-item\">\n"+"<div class=\"view\">\n"+"<img class=\"d-block w-100\" src=\""+jsons.images[i].url+"\">\n"+"</div>\n"+"</div>");
        }
    } // this will show the info it in firebug console
});
$(".parallax-slider")
    .on('load', function() { console.log("image loaded correctly"); })
    .on('error', function() { console.log("error loading image"); })
;