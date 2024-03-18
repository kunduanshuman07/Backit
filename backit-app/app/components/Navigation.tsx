import React from 'react'
import { MdManageAccounts } from "react-icons/md";
const Navigation = () => {
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabindex="0" role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Homepage</a></li>
                        <li><a>Portfolio</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <a className="font-bold text-xl">BackIt</a>
            </div>
            <div className="navbar-end">
                <div className="flex-none">
                    <ul className="menu menu-horizontal">
                        <li>
                            <div className="form-control">
                                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto input-sm" />
                            </div>
                        </li>
                        <li>
                            <button className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                                    <span className="badge badge-xs badge-primary indicator-item"></span>
                                </div>
                            </button>
                        </li>
                        <li>
                            <div className="avatar placeholder">
                                <div className="bg-neutral text-neutral-content rounded-full w-8">
                                    <span className="text-xs">A</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navigation