import { render, screen } from '@testing-library/react'
import { fetch } from 'cross-fetch'
import App from './App'

global.fetch = fetch

test('モックデータが2件表示されていること', async () => {
  render(<App />)
  expect(await screen.findAllByRole('list')).toHaveLength(2)
})
