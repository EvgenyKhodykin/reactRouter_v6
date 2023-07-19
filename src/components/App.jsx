import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import UsersListPage from './pages/UsersListPage'
import UserPage from './pages/UserPage'
import UsersLayout from './layouts/UsersLayout'
import EditPage from './pages/EditPage'

function App() {
    return (
        <Routes>
            <Route path='/' element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path='users' element={<UsersLayout />}>
                    <Route index element={<UsersListPage />} />
                    <Route path=':userId/profile' element={<UserPage />} />
                    <Route path=':userId/profile/edit' element={<EditPage />} />
                </Route>
                <Route path='*' element={<Navigate to='/' />} />
            </Route>
        </Routes>
    )
}

export default App
