
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
socket.on('bspd_sd', function(arg1) {

  //  console.log(arg1)
    $('#bspd_sd').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#bspd_sd').addClass(' green'); // Add the 'green' color class
    } else {
      $('#bspd_sd').addClass(' red'); // Add the 'red' color class
    }

});

socket.on('air+_state', function(arg1) {

    console.log("in")
  //  console.log(arg1)
    $('#air+_state').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#air+_state').addClass(' green'); // Add the 'green' color class
    } else {
      $('#air+_status').addClass(' red'); // Add the 'red' color class
    }

});

socket.on('air-_state', function(arg1) {

  //  console.log(arg1)
    $('#air-_status').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#air-_state').addClass(' green'); // Add the 'green' color class
    } else {
      $('#air-_state').addClass(' red'); // Add the 'red' color class
    }

});

socket.on('imd_sd', function(arg1) {

  //  console.log(arg1)
    $('#imd_sd').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('').addClass(' green'); // Add the 'green' color class
    } else {
      $('').addClass(' red'); // Add the 'red' color class
    }

})

socket.on('ams_sd', function(arg1) {

  //  console.log(arg1)
    $('#ams_sd').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#ams_sd').addClass(' green'); // Add the 'green' color class
    } else {
      $('#ams_sd').addClass(' red'); // Add the 'red' color class
    }

})

socket.on('cockpit_sd', function(arg1) {

  //  console.log(arg1)
    $('#cockpit_sd').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#cockpit_sd').addClass(' green'); // Add the 'green' color class
    } else {
      $('#cockpit_sd').addClass(' red'); // Add the 'red' color class
    }

})

socket.on('left_sd', function(arg1) {

  //  console.log(arg1)
    $('#left_sd').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#left_sd').addClass(' green'); // Add the 'green' color class
    } else {
      $('#left_sd').addClass(' red'); // Add the 'red' color class
    }

})

socket.on('right_sd', function(arg1) {

  //  console.log(arg1)
    $('#right_sd').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#right_sd').addClass(' green'); // Add the 'green' color class
    } else {
      $('#right_sd').addClass(' red'); // Add the 'red' color class
    }

})

socket.on('as_sd', function(arg1) {

  //  console.log(arg1)
    $('#as_sd').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#as_sd').addClass(' green'); // Add the 'green' color class
    } else {
      $('#as_sd').addClass(' red'); // Add the 'red' color class
    }

})

socket.on('res_sd', function(arg1) {

  //  console.log(arg1)
    $('#res_sd').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#res_sd').addClass(' green'); // Add the 'green' color class
    } else {
      $('#res_sd').addClass(' red'); // Add the 'red' color class
    }

})

socket.on('inertia_sd', function(arg1) {

  //  console.log(arg1)
    $('#inertia_sd').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#inertia_sd').addClass(' green'); // Add the 'green' color class
    } else {
      $('#inertia_sd').addClass(' red'); // Add the 'red' color class
    }

})

socket.on('bots_sd', function(arg1) {

  //  console.log(arg1)
    $('#bots_sd').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#bots_sd').addClass(' green'); // Add the 'green' color class
    } else {
      $('#bots_sd').addClass(' red'); // Add the 'red' color class
    }

})

socket.on('hvd_sd', function(arg1) {

  //  console.log(arg1)
    $('#hvd_sd').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#hvd_sd').addClass(' green'); // Add the 'green' color class
    } else {
      $('#hvd_sd').addClass(' red'); // Add the 'red' color class
    }

})

socket.on('tsms_sd', function(arg1) {

  //  console.log(arg1)
    $('#tsms_sd').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#tsms_sd').addClass(' green'); // Add the 'green' color class
    } else {
      $('#tsms_sd').addClass(' red'); // Add the 'red' color class
    }

})

socket.on('ebs_sd', function(arg1) {

  //  console.log(arg1)
    $('#ebs_sd').removeClass('red green')
    console.log()
    if (arg1 == 1) {
      $('#ebs_sd').addClass(' green'); // Add the 'green' color class
    } else {
      $('#ebs_sd').addClass(' red'); // Add the 'red' color class
    }

})