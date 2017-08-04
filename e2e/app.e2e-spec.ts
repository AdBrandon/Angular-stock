import { ActivePage } from './app.po';

describe('active App', () => {
  let page: ActivePage;

  beforeEach(() => {
    page = new ActivePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
