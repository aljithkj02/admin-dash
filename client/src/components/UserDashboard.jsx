import React from 'react'
import { Box, Text, Heading, Container, Button, Input, useToast
    , TableContainer, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react'

const UserDashboard = () => {
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
                            <Td>Aljith KJ</Td>
                        </Tr>
                        <Tr>
                            <Td>Email</Td>
                            <Td>aljithkj02@gmail.com</Td>
                        </Tr>
                        <Tr>
                            <Td>Password</Td>
                            <Td>123456787</Td>
                        </Tr>
                    </Tbody>
                </Table>
                <Button mt="1rem" colorScheme='blue'>
                    Update
                </Button>
            </TableContainer>
            
        </Box>
    </Container>
  )
}

export default UserDashboard
