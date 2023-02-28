import React, { useState, useEffect, useRef } from 'react'
import { useToast, Text } from '@chakra-ui/react'
import axios from 'axios'
import { AdminDashboard, UserDashboard } from '../components'
import config from '../config'

const Dashboard = () => {
    const [data, setData] = useState([]);
    const [role, setRole] = useState('');
    const [loading, setLoading] = useState(false);
    const [updateUi, setUpdateUi ] = useState(false);
    const debouncerId = useRef(null);

    useEffect(() => {
        setLoading(true);
        fetchData();
    }, [updateUi]);
    const toast = useToast()

    const fetchData = async (query) => {
        try {
            const token = localStorage.getItem('token') || 'token';
            let res = await axios.get(`${config.API_URL}/api/users/${query}`, {
                headers: {
                    'authorization': `Bearer ${token}`
                }
            });
            // console.log(res);
            if(res.data.success){
                setData(res.data.data);
                setRole(res.data.dashboard);
            }
            setLoading(false);
        } catch (err) {
            console.log(err.response.data.message);
            setLoading(false);
        } 
    }

    const debouncer = (query) => {
        debouncerId.current && clearTimeout(debouncerId.current);
        debouncerId.current = setTimeout(() => {
            if(query === ''){
                fetchData('undefined');
            }else{
                fetchData(query);
            }
        }, 1000)
    }

    const updateChanges = () => {
        setUpdateUi(!updateUi);
    }

    return (
        <>
            { (loading) ? <Text> Loading... </Text> : null }
            { (role === 'user') ? <UserDashboard data={ data }/> : null }
            { (role === 'admin') ? <AdminDashboard data={ data } 
                updateChanges={ updateChanges } debouncer={ debouncer } /> : null }
        </>
    )
}

export default Dashboard
