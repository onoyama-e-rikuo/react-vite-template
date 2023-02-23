import { render, screen } from '@testing-library/react'
import { test, expect } from 'vitest'
import App from './App'

test('初期レンダリングされること', () => {
  render(<App />)
  expect(screen.getAllByRole('link')).toHaveLength(3)
})
test('「Leanne Graham」の文言があること', async () => {
  render(<App />)
  expect(await screen.findByText('Leanne Graham')).toBeInTheDocument()
})
test('リストが10件表示されていること', async () => {
  render(<App />)
  expect(await screen.findAllByTestId('users')).toHaveLength(10)
})
