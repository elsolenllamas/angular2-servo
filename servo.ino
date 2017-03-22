#include <Bridge.h>
#include <BridgeServer.h>
#include <BridgeClient.h>
#include <Servo.h>

BridgeServer server;
Servo servo1; 

void setup() {
  servo1.attach(5); // pin number where servo is connected
  Bridge.begin();
  server.listenOnLocalhost();
  server.begin();
}

void loop() {
  BridgeClient client = server.accept();
  if (client) {
    process(client);
    client.stop();
  }
  delay(15);
}

void process(BridgeClient client) {
  String command = client.readStringUntil('/');
  if (command == "servo") {
    servoCommand(client);
  }
}

void servoCommand(BridgeClient client) {
  int pin, value;
  pin = client.parseInt();
  if (client.read() == '/') {
    value = client.parseInt();
    if (pin == 5)
      servo1.write(value);
  }
}

