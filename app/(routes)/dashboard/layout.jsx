import React from 'react'
import SideNavBar from './_components/SideNavBar'
//this is used to fix a layout for a specific route
function DashboardLayout({children}) {// whatever comes within dashboard layout will be rendered in this
  return (
    <div>
        <div className="hidden md:block md:w-64 h-screen bg-slate-100 fixed">
            <SideNavBar/>
        </div>
        <div className="md:ml-64">
            {children}
        </div>
    </div>
  )
}

export default DashboardLayout