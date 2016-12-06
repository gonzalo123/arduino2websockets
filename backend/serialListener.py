import serial
from os import environ
from twisted.internet.defer import inlineCallbacks
from twisted.internet.task import LoopingCall
from autobahn.twisted.wamp import ApplicationSession, ApplicationRunner

arduino = serial.Serial('/dev/tty.usbmodem14231', 9600)

class SeriaReader(ApplicationSession):
    @inlineCallbacks
    def onJoin(self, details):
        def publish():
            return self.publish(u'iot.serial.reader', arduino.readline().strip())

        yield LoopingCall(publish).start(0.1)

if __name__ == '__main__':
    runner = ApplicationRunner(environ.get("GONZALO_ROUTER", u"ws://127.0.0.1:8080/ws"), u"iot")
    runner.run(SeriaReader)
