function communication() {
  var socket = io.connect('http://localhost:8080', { reconnect: false });
  socket.on('connect', function () {
    var forcedc = false;
    var dcTimeout = null;

    console.log('connected to the server!');

    socket.on('news', function (data) {
      console.log(data);
    });

    socket.on('disconnect', function (data) {
      console.log('disconnected..');
      if (!forcedc) {
        console.log('forcedc is false and the socket has been disconnected');
        setTimeout(function () {
          console.log('Reloading the document in 2 seconds');
          //document.location.reload(true)
        }, 2000);
      }
    });

    document.onmousemove = function (e) {
      console.log('mouse movement detected');
      clearTimeout(dcTimeout);
      dcTimeout = setTimeout(function () {
        if (!forcedc) {
          forcedc = true;
          console.log('disconnecting...setting to true');
          socket.disconnect();
          //$("#dcmodal").modal('show');
          console.log('Disconnected! Do you want to reconnect?');
        }
      }, 5000 * 1);
    };
  });
}
