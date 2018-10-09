from flask_api import FlaskAPI

import water_monitor

app = FlaskAPI(__name__)


@app.route('/water-level/')
def water_level():
    return {
        'water-level': water_monitor.level()
    }

if __name__ == "__main__":
    app.run(debug=True)
