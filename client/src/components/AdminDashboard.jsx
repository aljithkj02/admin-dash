import React from 'react'
import { Box, Text, Heading, Container, Button, Input, useToast
    , TableContainer, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react'

const AdminDashboard = () => {
  return (
    <Container maxW='container.lg' py="2rem" textAlign="center">
        <Heading size='md' fontSize="30px" >Admin Dashboard</Heading>
        <Box boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" mt="2rem">
            <TableContainer maxWidth="100%" p="2rem">
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th fontSize="15px">Name</Th>
                            <Th fontSize="15px">Role</Th>
                            <Th textAlign='center' fontSize="15px">Update</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Aljith KJ</Td>
                            <Td>User</Td>
                            <Td textAlign='center'>
                                <Button bgColor='transparent'>
                                    Edit
                                </Button>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Aljith KJ</Td>
                            <Td>User</Td>
                            <Td textAlign='center'>
                                <Button bgColor='transparent'>
                                    Edit
                                </Button>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Aljith KJ</Td>
                            <Td>User</Td>
                            <Td textAlign='center'>
                                <Button bgColor='transparent'>
                                    Edit
                                </Button>
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
            
        </Box>
    </Container>
  )
}

export default AdminDashboard
