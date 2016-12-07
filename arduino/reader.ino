int mem;

void setup() {
  Serial.begin(9600);
}

void loop() {
  int value = analogRead(A0);
  if (value < mem -1 || value > mem + 1) {
    Serial.println(value);
  }
  mem = value;

  delay(100);
}
