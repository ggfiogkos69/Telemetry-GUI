
var socket = io.connect(); //create a socket

socket.on('vdc', function(arg1 ) {

  //  console.log(arg1)
    $('#VDC').remove()
    $('<div id="VDC"></div>').appendTo("#VDC-cont")
    $('#VDC').append(arg1)

});
socket.on('current', function(arg1 ) {

  //  console.log(arg1)
    $('#current').remove()
    $('<div id="current"></div>').appendTo("#current-cont")
    $('#current').append(arg1)

});
socket.on('vout', function(arg1 ) {

  //  console.log(arg1)
    $('#vout').remove()
    $('<div id="vout"></div>').appendTo("#vout-cont")
    $('#vout').append(arg1)

});
socket.on('rpm_rr', function(arg1 ) {

  //  console.log(arg1)
    $('#rpm_rr').remove()
    $('<div id="rpm_rr"></div>').appendTo("#rpm_rr-cont")
    $('#rpm_rr').append(arg1)

});
socket.on('rpm_rl', function(arg1 ) {

  //  console.log(arg1)
    $('#rpm_rl').remove()
    $('<div id="rpm_rl"></div>').appendTo("#rpm_rl-cont")
    $('#rpm_rl').append(arg1)

});
