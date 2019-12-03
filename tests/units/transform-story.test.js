const transformStory = require('../../utils/transform-story')

describe('transformStory function', () => {
  test('call transformStory should be return a object with id transformed', () => {
    const data = {
      name: 'Home',
      lang: 'default',
      id: 123456,
      path: null
    }

    const result = {
      name: 'Home',
      lang: 'default',
      id: 'story-123456-default',
      real_path: null
    }
    expect(transformStory(data)).toEqual(result)
  })

  test('call transformStory with more data should be return a object with id transformed does not affecting the rest of object', () => {
    const data = {
      slug: 'home',
      full_slug: 'pt/home',
      name: 'Home',
      lang: 'pt',
      id: 123456,
      path: null
    }

    const result = {
      slug: 'home',
      full_slug: 'pt/home',
      name: 'Home',
      lang: 'pt',
      id: 'story-123456-pt',
      real_path: null
    }
    expect(transformStory(data)).toEqual(result)
  })
})
