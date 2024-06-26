import React from 'react';
import { NavLink } from 'react-router-dom';

import { HomeOutlined, SyncOutlined, TeamOutlined } from '@ant-design/icons';
import './styles.css';



const Navigation = () => {
    return (
        <>
            <div className="sidebar">
                <div className="id">
                    <div className="idContent">
                        <img src="./media/babar.jpg" alt="profil-pic" />
                        <h3>Babar Leroi</h3>
                    </div>
                </div>

                <div className="navigation">
                    <ul>
                        <li >
                            <NavLink exact to="/profil/" activeClassName="navActive" className='HomeNavLink'>
                                <cyan><HomeOutlined /><span>Accueil</span></cyan>
                            </NavLink>
                        </li>
                        <li >
                            <NavLink exact to="/Evenements" activeClassName="navActive">
                                <cyan><SyncOutlined spin /><span>Evenement</span></cyan>
                            </NavLink>
                        </li>
                        <li >
                            <NavLink exact to="/Groupe" activeClassName="navActive">
                                <cyan><TeamOutlined /><span>Groupe</span></cyan>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                
            </div>
        </>
    );
};

export default Navigation;