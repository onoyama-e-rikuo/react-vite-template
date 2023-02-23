import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { fetch } from 'cross-fetch'

// fetch関数がテストで使えるように。
global.fetch = fetch
