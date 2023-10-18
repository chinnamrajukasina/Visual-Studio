// $("h1").addClass("big-title");
// $("h1").addClass("margin-50");
//both can be merged
$("h1").addClass("big-title margin-50");

$(document).ready(() => {
    $("#clickButton").click(() => $("#output").text($("#myInput").val()));
    $("#toggleButton").click(() => $("#header").slideToggle());
});