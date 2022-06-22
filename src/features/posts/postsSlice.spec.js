import postsReducer, { addPost } from './postsSlice';

describe('posts reducer', () => {
  const initialState = {
    collection: {}
  };
  it('should handle initial state', () => {
    expect(postsReducer(undefined, { type: 'unknown' })).toEqual({
      collection: {}
    });
  });

  it('should handle addPost', () => {
    const actual = postsReducer(initialState, addPost({id:4, title: 'wew', text: 'dsfs'}));
    expect(actual.collection).toEqual({'4':{title: 'wew', text: 'dsfs'}});
  });
});
