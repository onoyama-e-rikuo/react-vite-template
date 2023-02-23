import { render, screen } from '@testing-library/react'
import { test, expect } from 'vitest'
import App from './App'

test('初期レンダリングされること', () => {
  render(<App />)
  expect(screen.getAllByRole('link')).toHaveLength(3)
})
test('「ページ一覧」の文言があること', () => {
  render(<App />)
  expect(screen.getByText('ページ一覧')).toBeInTheDocument()
})
