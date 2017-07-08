import { SharingDataPage } from './app.po';

describe('sharing-data App', () => {
  let page: SharingDataPage;

  beforeEach(() => {
    page = new SharingDataPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
