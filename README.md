Playing with arduino, IoT, crossbar and websockets 
======

Project components:
* arduino: Reads analog impunt and send value via serial port (reader.ino)
* backend: Reads serial port and emit event to crossbar. Emits iot.serial.reader event
* crossbar server: publish 
 * iot.serial.get method. Client can use this method to get the first value when connects
* frontend: Web client to show data.
 * calls to iot.serial.get method when connect and subscribe to iot.serial.reader event

(https://www.youtube.com/watch?v=5R82chk01Rs "IoT")