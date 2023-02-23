import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { fetch } from 'cross-fetch'
import { server } from './src/mocks/server'
import { beforeAll, afterEach, afterAll } from 'vitest'

// fetch関数がテストで使えるように。
global.fetch = fetch

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
