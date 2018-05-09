var socket = io();

$('form').submit(function () {
  var text = $('#initials').val();
  socket.emit('initials', text);
  $('#initials').val('');
  return false;
});

socket.on('initials', function (ini) {
  $('<li>').text(ini).appendTo('#user');
});

$('form').submit(function () {
  var text = $('#message').val();
  socket.emit('message', text);
  $('#message').val('');
  return false;
});

socket.on('message', function (msg) {
  $('<li>').text(msg).appendTo('#history');
});

