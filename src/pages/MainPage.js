import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import ProductTable from '../components/ProductTable'
import Orderdetails from '../components/Orderdetails'

function MainPage() {

 const  Breadcrumbpaths = [
    {
      title : "Order",path:"#"
    },
    {
      title : "3745938",path:"#"
    }
  ]

  return (
    <section className='container-fluid'>
        <Breadcrumb Breadcrumbpaths={Breadcrumbpaths}/>
        <Orderdetails/>
        <ProductTable/>
    </section>
    
    
  )
}

export default MainPage