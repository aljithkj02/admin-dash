import React, { useState, useEffect } from 'react'
import { useToast, Text } from '@chakra-ui/react'
import axios from 'axios'
import { AdminDashboard, UserDashboard } from '../components'
import config from '../config'

const Dashboard = () => {
    const [data, setData] = useState([]);
    const [role, setRole] = useState('');
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetchData();
    }, []);
    const toast = useToast()

    const fetchData = async () => {
        try {
            const token = localStorage.getItem('token') || 'token';
            let res = await axios.get(`${config.API_URL}/api/users`, {
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

    return (
        <>
            { (loading) ? <Text> Loading... </Text> : null }
            { (role === 'user') ? <UserDashboard data={ data }/> : null }
            { (role === 'admin') ? <AdminDashboard data={ data } /> : null }
        </>
    )
}

export default Dashboard
