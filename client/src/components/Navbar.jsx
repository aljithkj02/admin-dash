import React from 'react'
import { Box, Text, useToast } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <Box bgColor="black" p="20px 60px" display="flex" justifyContent="space-between" >
            <Box>
                <Link style={{ color: 'white'}} to='/dashboard'>Dashboard</Link>
            </Box>
            <Box display="flex" gap="60px">
                <Link style={{ color: 'white'}} to='/login'>Login</Link>
                <Link style={{ color: 'white'}} to='/admin-signup'>Admin signup</Link>
            </Box>
        </Box>
    </nav>
  )
}

export default Navbar
