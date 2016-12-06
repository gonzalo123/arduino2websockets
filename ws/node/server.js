var autobahn = require('autobahn'),
    connection = new autobahn.Connection({
            url: 'ws://0.0.0.0:8080/ws',
            realm: 'iot'
        }
    ),
    mem;

connection.onopen = function (session) {
    session.register('iot.serial.get', function () {
        return mem;
    });

    session.subscribe('iot.serial.reader', function (args) {
        mem = args[0];
        console.log("event for 'iot.serial.reader' received: " + mem);
    });
};

connection.open();