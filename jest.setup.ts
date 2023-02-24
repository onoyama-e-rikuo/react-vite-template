import '@testing-library/jest-dom'
import { fetch } from 'cross-fetch'
import { server } from './src/mocks/server'

global.fetch = fetch

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
