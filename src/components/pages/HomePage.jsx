import { Button, Container, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

function HomePage() {
    return (
        <Container maxWidth='xl' sx={{ textAlign: 'center', pt: 5 }}>
            <Typography variant='h1'>Home Page</Typography>
            <Link to='users'>
                <Button size='large' variant='contained' sx={{ mt: 25 }}>
                    Go to Users List
                </Button>
            </Link>
        </Container>
    )
}

export default HomePage
