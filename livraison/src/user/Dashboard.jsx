import React from 'react'
import { Layout } from '../core/Layout'
import { isAuthenticated } from '../auth/helpers'


const Dashboard = () => {
  const {user: {name,role,email}}=isAuthenticated()

  return (
    <>
       <Layout
       title="Dashboard  "
       description="Dashboard User "
       >
        <h1>Welcome {name}  </h1>
        
       </Layout>



    </>
  )
}

export default Dashboard