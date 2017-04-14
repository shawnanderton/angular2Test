import { TemplateApp2Page } from './app.po';

describe('template-app2 App', () => {
  let page: TemplateApp2Page;

  beforeEach(() => {
    page = new TemplateApp2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
