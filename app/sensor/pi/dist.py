import contextlib
import RPi.GPIO as GPIO
import time

GPIO_TRIGGER = 37
GPIO_ECHO = 35


def avg(samples=100):
    dists = [sample() for _ in range(samples)]

    return sum(dists) / samples


def sample():
    GPIO.output(GPIO_TRIGGER, True)

    time.sleep(0.00001)
    GPIO.output(GPIO_TRIGGER, False)

    StartTime = time.time()
    StopTime = time.time()

    while GPIO.input(GPIO_ECHO) == 0:
        StartTime = time.time()

    while GPIO.input(GPIO_ECHO) == 1:
        StopTime = time.time()

    TimeElapsed = StopTime - StartTime
    distance = (TimeElapsed * 34300) / 2

    return distance


@contextlib.contextmanager
def setup():
    try:
        setup_pins()
        yield
    except KeyboardInterrupt:
        teardown()
        print("Measurement stopped by User")
    except Exception as e:
        teardown()
        raise e
    else:
        teardown()


def setup_pins():
    GPIO.setmode(GPIO.BOARD)

    GPIO.setup(GPIO_TRIGGER, GPIO.OUT)
    GPIO.setup(GPIO_ECHO, GPIO.IN)


def teardown():
    GPIO.cleanup()
