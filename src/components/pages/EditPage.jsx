import { Box, Button, Container, Typography } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import getRandomInt from '../../utils/getRandomInt'

function EditPage() {
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
                    <Typography variant='h6'>Name: {user.name}</Typography>
                    <Typography variant='h6'>Nickname: {user.username}</Typography>
                    <Typography variant='h6'>City: {user.address.city}</Typography>
                    <Typography variant='h6'>Email: {user.email}</Typography>
                    <Typography variant='h6'>Phone: {user.phone}</Typography>
                    <Typography variant='h6'>Company: {user.company.name}</Typography>
                </Box>
                <Container sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Link to={`/users/${getRandomInt(1, 10)}/profile/edit`}>
                        <Button size='large' variant='contained' sx={{ mt: 4 }}>
                            Go to another user page
                        </Button>
                    </Link>
                    <Link to='/users'>
                        <Button size='large' variant='contained' sx={{ mt: 2 }}>
                            Go to Users list page
                        </Button>
                    </Link>
                    <Link to={`/users/${userId}/profile`}>
                        <Button size='large' variant='contained' sx={{ mt: 2 }}>
                            Go to user page
                        </Button>
                    </Link>
                </Container>
            </Container>
        )
    }
}

export default EditPage
