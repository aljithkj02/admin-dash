import React, { useState } from 'react'
import { Box, Text, Heading, Container, Button, Input, useToast
    , InputGroup, InputRightElement } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import config from '../config'

const Login = () => {
    const [ details, setDetails ] = useState({
        email: '',
        password: ''
    })
    
    const [show, setShow] = useState(false)

    const toast = useToast()
    
    const handleClick = () => setShow(!show);
    
    const storeDetails = (e) => {
        setDetails({
            ...details,
            [e.target.name]: e.target.value
        })
    } 

    const loginUser = (e) => {
        e.preventDefault();
        console.log(details)
    }
  return (
    <Container p="20px" display="flex" alignItems="center" h="100vh" >
        <Box w="full" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" p="4rem 3rem" borderRadius="10px">
            <Heading size='md' fontSize="30px" >Login</Heading>
            <form onSubmit={ loginUser }>
                <Input name="email" mt="6" type="email" variant='flushed' placeholder="Email" 
                    onChange={ storeDetails } required={true}
                /> 

                <InputGroup size='md'  mt="6">
                    <Input
                        pr='4.5rem'
                        type={show ? 'text' : 'password'}
                        placeholder="Password" 
                        variant='flushed'
                        name="password"
                        onChange={ storeDetails } required={true}
                    />
                    <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' bgColor="transparent" onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>
                </InputGroup>

                <Button type="submit" mt="6"
                    w="50%" colorScheme='messenger'
                > Login </Button>
            </form>
            <Text mt="5" fontSize="14px" fontWeight="400"> Don't you have an account? 
                <Link to="/signup" style={{ fontSize:"15px", color: "blue", marginLeft: "10px"}}>
                    Signup
                </Link>
            </Text>
        </Box>
    </Container>
  )
}

export default Login
