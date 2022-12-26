import { Route, Routes, Link, Outlet } from 'react-router-dom'
import './App.css'
import { Error } from './routes/error'
import { Home } from './routes/home'
import { Users } from './routes/users'

function Layout() {
  return (
    <div>
      <h1>ページ一覧</h1>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/users">users</Link>
        </li>
        <li>
          <Link to="/nowhere">nowhere</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  )
}

// eslint-disable-next-line import/no-default-export
export default App
