import { FaqApp2Page } from './app.po';

describe('faq-app2 App', () => {
  let page: FaqApp2Page;

  beforeEach(() => {
    page = new FaqApp2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
