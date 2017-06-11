import { TasksAndComponentsPage } from './app.po';

describe('tasks-and-components App', () => {
  let page: TasksAndComponentsPage;

  beforeEach(() => {
    page = new TasksAndComponentsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
