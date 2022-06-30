import postsReducer, { addPost } from './postsSlice';

describe('Posts reducer', () => {
  const initialState = {
    collection: {},
    topic: 'popular',
    searchTerm: '',
    status: '',
    response: ''
  };
  it('should handle initial state', () => {
    expect(postsReducer(undefined, { type: 'unknown' })).toEqual({
      collection: {},
      topic: 'popular',
      searchTerm: '',
      status: '',
      response: ''
    });
  });

  it('should handle addPost', () => {
    const actual = postsReducer(initialState, addPost({ id: 'id', title: 'title', media: 'media', mediaType: 'mediaType', topic: 'subreddit' }));
    expect(actual.collection).toEqual({ 'id': { title: 'title', media: 'media', mediaType: 'mediaType', topic: 'subreddit' } });
  });
});
