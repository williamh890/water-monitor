import RPi.GPIO as GPIO
import time

PIN = 37

GPIO.setwarnings(False)    # Ignore warning for now
GPIO.setmode(GPIO.BOARD)   # Use physical pin numbering
GPIO.setup(PIN, GPIO.OUT, initial=GPIO.LOW)

while True: # Run forever
    GPIO.output(PIN, GPIO.HIGH) # Turn on
    time.sleep(1)                  # Sleep for 1 second
    GPIO.output(PIN, GPIO.LOW)  # Turn off
    time.sleep(1)
