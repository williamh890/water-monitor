from typing import NamedTuple, List
import json
import pathlib as pl

import boto3

s3_resource = boto3.resource('s3')
bucket = s3_resource.Bucket('water-monitor')

levels_file = 'levels.test.json'
local_path = pl.Path(__file__).parent / levels_file
bucket_path = pl.Path('assets') / levels_file


def save(levels):

    with local_path.open('w') as f:
        json.dump(levels, f)

    bucket.upload_file(str(local_path), 'assets/'+levels_file)


def load(default):
    try:
        bucket.download_file('assets/'+levels_file, str(local_path))
    except Exception as e:
        print('Returning default value from bucket: ', e)
        return default

    with local_path.open('r') as f:
        return json.load(f)


def add_level(water_level):
    level_json = [water_level._asdict()]

    levels = load(default=[])
    levels.append(water_level._asdict())

    print(f'current levels: \n{json.dumps(levels, indent=2)}')

    save(levels)


def dummy_level():
    return WaterLevel(20, [2018, 8, 8])


class WaterLevel(NamedTuple):
    level_inches: float
    date: List[int]  # Year, Month, Day


if __name__ == "__main__":
    add_level(dummy_level())
