Playing with arduino, IoT, crossbar and websockets 
======

Project components:
* arduino: Reads analog imput from potentiometer and send value via serial port (reader.ino)
* backend: Reads serial port and emit event to crossbar. Emits iot.serial.reader event
* crossbar server: publish 
 * iot.serial.get method. Client can use this method to get the first value when connects
* frontend: Web client to show data.
 * calls to iot.serial.get method when connect and subscribe to iot.serial.reader event

[![Playing with arduino, IoT, crossbar and websockets](http://img.youtube.com/vi/5R82chk01Rs/0.jpg)](http://www.youtube.com/watch?v=5R82chk01Rs)