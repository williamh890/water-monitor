from typing import NamedTuple, List
import json
import pathlib as pl
import os

import boto3

s3_resource = boto3.resource('s3')
bucket = s3_resource.Bucket('water-monitor')

local_path = (
    pl.Path(__file__).parent if
    'AWS_EXECUTION_ENV' not in os.environ
    else pl.Path('/tmp')
)

bucket_path = pl.Path('assets')


def save(level_file, levels):
    with (local_path / level_file).open('w') as f:
        json.dump(levels, f)

    bucket.upload_file(
        str(local_path / level_file),
        str(bucket_path / level_file)
    )


def load(level_file, default):
    try:
        bucket.download_file(
            str(bucket_path / level_file),
            str(local_path / level_file)
        )
    except Exception as e:
        print('Returning default value from bucket: ', e)
        return default

    with (local_path / level_file).open('r') as f:
        return json.load(f)


def add_level(new_level_event):
    water_level = WaterLevel(new_level_event['level'], new_level_event['date'])
    level_file = new_level_event['filename']

    levels = load(level_file, default=[])
    levels.append(water_level._asdict())

    print(f'current levels: \n{json.dumps(levels, indent=2)}')

    save(level_file, levels)


class WaterLevel(NamedTuple):
    level_cm: float
    date: str


if __name__ == "__main__":
    event = {
        "level": 5.05,
        "date": "2018-10-25 08:07:55.298652",
        "filename": "testing-I8S9.json"
    }
    add_level(event)
