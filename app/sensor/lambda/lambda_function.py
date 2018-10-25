import json

import add_level from add_level


def lambda_handler(event, context):
    print(json.dumps(event))
    add_level(event)
