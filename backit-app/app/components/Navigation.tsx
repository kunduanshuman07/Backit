'use client'
import React, { use } from 'react'
import { FaHome } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import {useRouter} from "next/navigation"

interface NavigationProps{
    title: any;
}

const Navigation:React.FC<NavigationProps> = ({title}) => {
    const router = useRouter();
    const handleHomePage = () => {
        router.push('/');
    }
    const handleDashboardPage = () => {
        router.push('/dashboard');
        
    }
    const handleProfilePage = () => {
        router.push('/profile');
        
    }
    const handleLogoutPage = () => {
        router.push('/login');
        
    }
    return (
        <div className="navbar h-0">
            <div className="navbar-start">
                <div className="drawer z-10">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <label htmlFor="my-drawer" className="btn drawer-button">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-70 min-h-full bg-base-200 text-base-content">
                            <li className='font-bold mt-3' onClick={handleHomePage}><a><FaHome className='mr-2'/> Home</a></li>
                            <li className='font-bold mt-3' onClick={handleDashboardPage}><a><MdDashboard className='mr-2'/> Dashboard</a></li>
                            <li className='font-bold mt-3' onClick={handleProfilePage}><a><CgProfile className='mr-2'/> Profile</a></li>
                            <li className='font-bold mt-3' onClick={handleLogoutPage}><a><CiLogout className='mr-2'/> Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="navbar-center">
                <button className="btn btn-sm btn-accent text-white font-bold">{title}</button>
            </div>
            <div className="navbar-end">
                <div className="flex-none">
                    <ul className="menu menu-horizontal">
                        <li>
                            <button className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                                    <span className="badge badge-xs badge-primary indicator-item"></span>
                                </div>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navigation