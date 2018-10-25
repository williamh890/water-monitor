import { LevelsChartModule } from './levels-chart.module';

describe('LevelsChartModule', () => {
  let levelsChartModule: LevelsChartModule;

  beforeEach(() => {
    levelsChartModule = new LevelsChartModule();
  });

  it('should create an instance', () => {
    expect(levelsChartModule).toBeTruthy();
  });
});
