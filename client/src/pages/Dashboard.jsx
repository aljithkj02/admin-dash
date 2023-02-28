import React from 'react'
import { useParams } from 'react-router-dom'
import { AdminDashboard, UserDashboard } from '../components'

const Dashboard = () => {
    const { role } = useParams();
    if(role === 'admin'){
        return <AdminDashboard />
    }
    if(role === 'user'){
        return <UserDashboard />
    }
}

export default Dashboard
