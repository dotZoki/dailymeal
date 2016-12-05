import { DailyMealPage } from './app.po';

describe('daily-meal App', function() {
  let page: DailyMealPage;

  beforeEach(() => {
    page = new DailyMealPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
