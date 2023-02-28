import React, { useState } from 'react'
import { Box, Text, Heading, Container, Button, Input, useToast
    , TableContainer, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react'
import axios from 'axios'
import config from '../config'

const UserDashboard = ({ data }) => {
    const { name, email, password } = data;
    const [details, setDetails] = useState({
        name, email, password
    })
    const [ edit, setEdit ] = useState(false);

    const toast = useToast()

    const storeDetails = (e) => {
        setDetails({
            ...details,
            [e.target.name]: e.target.value
        })
    } 

    const updateData = async () => {
        setEdit(false);
        try {
            const token = localStorage.getItem('token') || 'token';
            let res = await axios.patch(`${config.API_URL}/api/users/update-user`, {...details}, {
                headers: {
                    'authorization' : `Bearer ${token}`
                }
            })
            if(res.data.success){
                toast({
                    title: res.data.message,
                    position: 'top',
                    status: 'success',
                    isClosable: true,
                })
            }
            // console.log(res);
        } catch (err) {
            console.log(err.response.data.message);
            toast({
                title: err.response.data.message,
                position: 'top',
                status: 'error',
                isClosable: true,
            })
            setDetails({
                name, email, password
            })
        }
    }
  return ( 
    <Container maxW='container.lg' py="2rem" textAlign="center">
        <Heading size='md' fontSize="30px" >User Dashboard</Heading>
        <Box boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" mt="2rem" maxWidth="70%" mx="auto">
            <TableContainer maxWidth="100%" p="2rem">
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th fontSize="16px">User details</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Name</Td>
                            {
                                (edit) ? (
                                    <Td> <Input value={details.name} onChange={ storeDetails } placeholder="Name" 
                                        name="name"
                                    /> </Td>
                                ): <Td> {details.name}</Td>
                            }
                            
                        </Tr>
                        <Tr>
                            <Td>Email</Td>
                            {
                                (edit) ? (
                                    <Td> <Input value={details.email} onChange={ storeDetails } placeholder="Email" 
                                        name="email"
                                    /> </Td>
                                ): <Td> {details.email}</Td>
                            }
                        </Tr>
                        <Tr>
                            <Td>Password</Td>
                            {
                                (edit) ? (
                                    <Td> <Input value={details.password} onChange={ storeDetails } placeholder="Password" 
                                        name="password"
                                    /> </Td>
                                ): <Td> {details.password}</Td>
                            }
                        </Tr>
                    </Tbody>
                </Table>
                {
                    (edit) ? (
                        <Button mt="1rem" colorScheme='blue' onClick={ updateData }>
                            Update
                        </Button>
                    ):(
                        <Button mt="1rem" colorScheme='blue' onClick={ ()=> setEdit(true)}>
                            Edit
                        </Button>   
                    )
                }
            </TableContainer>
            
        </Box>
    </Container>
  )
}

export default UserDashboard
