import { AppBar, Toolbar, Typography } from '@mui/material'

function Navbar() {
    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h5'>Welcome to React Router 6 mini App</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
