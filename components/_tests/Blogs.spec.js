import { shallowMount } from '@vue/test-utils'
import Blogs from '../Blogs'

describe('Blogs', () => {
  let wrapper
  const posts = [
    {
      slug: 'post-1',
      title: 'Post 1',
      thumbnail: [{ url: 'https://example.com/image1.jpg' }],
      alt: 'Alt text',
      tags: ['tag1', 'tag2'],
      description: 'This is a test post',
      created_at: '2023-01-01',
    },
    // Add more post objects for testing as needed
  ]

  beforeEach(() => {
    wrapper = shallowMount(Blogs, {
      propsData: {
        showDetail: true,
        title: 'Test Title',
        posts,
        tagList: ['tag1', 'tag2', 'tag3'],
      },
    })
  })

  // Check if the component is a Vue instance
  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  // Test if correct number of posts are rendered
  test('renders the correct number of posts', () => {
    expect(wrapper.findAll('.project-card').length).toBe(posts.length)
  })

  // Test if post title is rendered correctly
  test('renders post title correctly', () => {
    expect(wrapper.find('.project-card h2').text()).toBe(posts[0].title)
  })

  // Test if formatDate function works correctly
  test('formats date correctly', () => {
    expect(wrapper.vm.formatDate('2023-01-01')).toBe('January 1, 2023')
  })

  // Test if nextPage and prevPage methods work correctly
  test('handles pagination correctly', async () => {
    expect(wrapper.vm.currentPage).toBe(1)
    wrapper.vm.nextPage()
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.currentPage).toBe(2)
    wrapper.vm.prevPage()
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.currentPage).toBe(1)
  })
})
