import numpy as np
import matplotlib.pyplot as plt

import datetime
import os
import json


def line_break():
    print('-' * 30 + '\n')


def print_levels(levels):
    print("")
    for level in levels:
        height, date = inches_to_gallons(level['level']), level['date']
        print(f" {date} -> {height:4.0f} gallons ({level['level']:2.1f} in)")
    print("")


class UserQuitingException(Exception):
    pass


class WaterMonitor(object):
    def __init__(self):
        self.dontQuit = True
        self.new_levels = []

        levels = load()
        self.levels = make(levels)

    def run(self):
        print("Monica and William's water levels!")
        line_break()

        dontQuit = True

        while self.dontQuit:
            try:
                self.main()
            except UserQuitingException as e:
                break

        line_break()
        if len(self.new_levels) > 0:
            print('saving levels...')
            print_levels(self.new_levels)

            levels = sorted(self.levels, key=lambda l: l['date'])
            save(levels)
            print('\n')

            print('exiting...')

    def main(self):
        print('Select and option:')
        print('\t1.) list levels')
        print('\t2.) add a level')
        print('\t3.) scatter plot')
        print('\t4.) tank inches to gallons')

        option = input('-> (enter to quit): ')

        if option == '':
            raise UserQuitingException()

        try:
            option = int(option)
        except:
            print(f'option must be a number')
            return

        self.selected_action(option)

    def selected_action(self, option):
        if option == 1:
            print_levels(self.levels)
        elif option == 2:
            self.add_level()
        elif option == 3:
            self.scatter_plot()
        elif option == 4:
            self.converter()
        else:
            print(option)
            print('\nnot a valid option')

    def scatter_plot(self):
        readings, dates = zip(
            *[(l['level'], l['date']) for l in self.levels])

        time_diffs = [(d - dates[0]).days for d in dates[1:]]
        time_diffs = [0, *time_diffs]
        readings = list(map(inches_to_gallons, readings))

        plt.scatter(time_diffs, readings)
        plt.xlabel('Time (days)')
        plt.ylabel('Gallons')
        plt.grid(True)
        plt.show()

    def converter(self):
        try:
            inches = float(input('-> number of inches: '))
        except:
            print('not valid number...\n')
            return
        else:
            gals = inches_to_gallons(inches)

            print(f'{gals: 6.0f} gallons')
            print("")

    def add_level(self):
        try:
            level = input('-> Add a level (enter to quit): ')

            if level == '':
                return

            level = float(level)
        except:
            print('input needs to be a number...\n')
            self.add_level()

        while True:
            try:
                new_date = input(
                    '\n-> Enter date or nothing for todays date (q to quit)\n-> (year, month, day): ')

                if new_date == '':
                    new_date = datetime.date.today()
                elif new_date == 'q':
                    dontQuit = False
                    break
                else:
                    new_date = [int(t) for t in new_date.split(',')]
                    new_date = datetime.date(*new_date)
            except Exception as e:
                print('date entered is invalid...\n')
                continue
            else:
                new = {
                    'date': new_date,
                    'level': level
                }

                self.new_levels.append(new)
                self.levels.append(new)

                print('level has been succesfully logged.\n')
                break


def load():
    path = get_levels_path()

    if not os.path.isfile(path):
        with open(path, 'w') as f:
            f.write('[]')

    with open(path, 'r') as f:
        levels = json.loads(f.read())

    return levels


def make(levels):
    for level in levels:
        date_tuple = level['date']
        level['date'] = datetime.date(*date_tuple)

    return levels


def get_levels_path():
    monitor_dir = os.path.dirname(os.path.realpath(__file__))
    return os.path.join(monitor_dir, 'levels.json')


def save(levels):
    for level in levels:
        date_obj = level['date']
        level['date'] = (date_obj.year, date_obj.month, date_obj.day)

    path = get_levels_path()
    with open(path, 'w') as f:
        f.write(json.dumps(levels, indent=2))


def inches_to_gallons(inches):
    lookup = {
        76: 1619, 75: 1618, 74: 1614, 73: 1609, 72: 1603, 71: 1595, 70: 1587,
        69: 1578, 68: 1568, 67: 1557, 66: 1545, 65: 1532, 64: 1519, 63: 1505, 62: 1490, 61: 1474, 60: 1458,
        59: 1441, 58: 1424, 57: 1405, 56: 1387, 55: 1367, 54: 1348, 53: 1327, 52: 1306, 51: 1285, 50: 1264,
        49: 1241, 48: 1219, 47: 1196, 46: 1173, 45: 1150, 44: 1126, 43: 1102, 42: 1077, 41: 1052, 40: 1027,
        39: 1002, 38: 977, 37: 951, 36: 925, 35: 899, 34: 873, 33: 847, 32: 820, 31: 793, 30: 767,
        29: 740, 28: 713, 27: 685, 26: 658, 25: 631, 24: 603, 23: 575, 22: 547, 21: 519, 20: 491,
        19: 464, 18: 437, 17: 410, 16: 383, 15: 356, 14: 329, 13: 302, 12: 276, 11: 249, 10: 223,
        9: 197, 8: 171, 7: 145, 6: 120, 5: 95, 4: 70, 3: 47, 2: 28, 1: 12, 0: 0
    }

    # hs, gals = list(lookup.keys()), list(lookup.values())
    # print(np.poly1d(np.polyfit(hs, gals, 3)))
    # plt.plot(np.unique(hs), np.poly1d(np.polyfit(hs, gals, 3))(np.unique(hs)))
    # plt.scatter(hs, gals, alpha=.3)
    # plt.show()

    def lookup(x):
        return -0.00296 * x ** 3 + \
            0.2176 * x ** 2 + \
            22.14 * x**1 - 15.59

    return lookup(inches)


if __name__ == "__main__":
    WaterMonitor().run()
