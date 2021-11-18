import { CursosAppPage } from './app.po';

describe('cursos-app App', function() {
  let page: CursosAppPage;

  beforeEach(() => {
    page = new CursosAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
