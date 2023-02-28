import React from 'react'
import { Box, Text, useToast, Button } from '@chakra-ui/react'
import { useSelector } from  'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const { isAuth } = useSelector( data => data );
  return (
    <nav>
        <Box bgColor="black" p="20px 60px" display="flex" justifyContent="space-between" >
            <Box>
                <Link style={{ color: 'white'}} to='/dashboard'>Dashboard</Link>
            </Box>
            {
                (isAuth) ? (
                    <Button >Logout</Button>
                ) : (
                    <Box display="flex" gap="60px">
                        <Box display="flex" gap="60px">
                            <Link style={{ color: 'white'}} to='/login'>Login</Link>
                            <Link style={{ color: 'white'}} to='/admin-signup'>Admin signup</Link>
                        </Box>
                    </Box>
                )
            }
        </Box>
    </nav>
  )
}

export default Navbar
