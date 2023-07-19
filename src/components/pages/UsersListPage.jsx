import { Button, Container, MenuItem, Stack, Typography } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function UsersListPage() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(response => setUsers(response.data))
    }, [])

    return (
        <>
            <Container
                maxWidth='xl'
                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pt: 5 }}
            >
                <Typography variant='h2' sx={{ mb: 5 }}>
                    Users List Page
                </Typography>
                {users.map(user => (
                    <Stack key={user.id}>
                        <Link to={`/users/${user.id}/profile`} style={{ textDecoration: 'none' }}>
                            <MenuItem>{user.name}</MenuItem>
                        </Link>
                    </Stack>
                ))}
                <Link to='/'>
                    <Button size='large' variant='contained' sx={{ mt: 15 }}>
                        Go to Home Page
                    </Button>
                </Link>
            </Container>
        </>
    )
}

export default UsersListPage
