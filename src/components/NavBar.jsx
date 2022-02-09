import React from 'react'
import    {FaTint}  from 'react-icons/fa'
export default function NavBar() {
    return (
        <div style={{display: "flex", justifyContent: 'space-between',  height: '100px', background:'gray', alignItems: "center"}}>
            <FaTint />
            <p>Home</p>
            <p>View Purchases</p>
        </div>
    )
}
