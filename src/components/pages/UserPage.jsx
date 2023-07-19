import { Box, Button, Container, Typography } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function UserPage() {
    const { userId } = useParams()
    const [user, setUser] = useState(null)

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => setUser(response.data))
    }, [userId])

    if (user) {
        return (
            <Container maxWidth='xs' sx={{ textAlign: 'center', pt: 5 }}>
                <Box>
                    <Typography variant='h6'>Id: {userId}</Typography>
                    <Typography variant='h5'>{user.name}</Typography>
                </Box>
                <Container sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Link to='/users'>
                        <Button size='large' variant='contained' sx={{ mt: 4 }}>
                            Go to Users list page
                        </Button>
                    </Link>
                    <Link to={`/users/${userId}/profile/edit`}>
                        <Button size='large' variant='contained' sx={{ mt: 4 }}>
                            Go to edit user page
                        </Button>
                    </Link>
                </Container>
            </Container>
        )
    }
}

export default UserPage
