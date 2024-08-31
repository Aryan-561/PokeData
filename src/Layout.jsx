import React  from 'react'
import Header from './components/Header/Header'
import FilterSec from './components/FilterSection/FilterSec'
import { Outlet } from 'react-router-dom'

function Layout(){
    return(
        <>
            <Header/>
            <FilterSec/>
            <Outlet/>
        </>
    )
}

export default Layout