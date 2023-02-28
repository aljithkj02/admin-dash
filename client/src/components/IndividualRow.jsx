import React, { useState } from 'react'
import { Box, Text, Button, Input,  Tr, Th, Td, Select, useToast } from '@chakra-ui/react'
import axios from 'axios'
import config from '../config'

const IndividualRow = ({ userData, updateChanges }) => {
    const { name, role } = userData;
    const [ userRole, setUserRole ] = useState(role);
    const [ edit, setEdit ] = useState(false);

    const toast = useToast();

    const updateRole = () => {
        updateData();
        setEdit(false);
    }

    const updateData = async () => {
        try {
            const token = localStorage.getItem('token') || 'token';
            let res = await axios.patch(`${config.API_URL}/api/users/update-role`, 
            {_id: userData._id, role: userRole}, {
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
            updateChanges();
            console.log(res);
        } catch (err) {
            console.log(err.response.data.message);
            toast({
                title: err.response.data.message,
                position: 'top',
                status: 'error',
                isClosable: true,
            })
        }
    }

  return (
    <Tr>
        <Td w="35%">{ name }</Td>
        {
            (edit) ? (
                <Td w="30%">
                    <Select variant='filled' value={ userRole } onChange={ (e) => setUserRole(e.target.value)} >
                        <option value='admin'>admin</option>
                        <option value='user'>user</option>
                    </Select>
                </Td>
            ):(
                <Td w="35%">{ role }</Td>
            )
        }

        <Td w="30%" textAlign='center'>
            {
                (edit) ? (
                    <Button bgColor='transparent' onClick={ updateRole }>
                        Update
                    </Button>
                ):(
                    <Button bgColor='transparent'  onClick={ ()=> setEdit(true)}>
                        Edit
                    </Button>
                )
            }
        </Td>
    </Tr>
  )
}

export default IndividualRow
