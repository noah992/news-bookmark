import { NewsDescriptionPipe } from './news-description.pipe';

describe('NewsDescriptionPipe', () => {
  it('create an instance', () => {
    const pipe = new NewsDescriptionPipe();
    expect(pipe).toBeTruthy();
  });
});
