import datetime
import random
import string
import time
import json
from urllib import request, error

import boto3
import click

import dist

lambda_client = boto3.client('lambda')
SAMPLE_RATE = 5

@click.command()
@click.option('--monitor-file', default='levels.json')
@click.option('--sample-rate-seconds', default=5)
def main(monitor_file, sample_rate_seconds):
    with dist.setup():
        while True:
            sample = dist.sample()
            print("Measured Distance = {:0.2f} cm".format(sample))

            if has_connection():
                save(sample, monitor_file)

            print('waiting...')
            time.sleep(sample_rate_seconds)


def save(sample, filename):
    level_data = json.dumps({
        'date': str(datetime.datetime.utcnow()),
        'level': round(sample, 2),
        'filename': filename
    })

    print('posting data: \n', level_data)

    lambda_client.invoke(
        FunctionName='post-monitor-data',
        InvocationType='Event',
        Payload=level_data,
    )


def has_connection():
    try:
        request.urlopen('http://216.58.192.142', timeout=1)
        return True
    except error.URLError as err:
        print('cannot reach network with error:', err)
        return False


if __name__ == '__main__':
    main()
