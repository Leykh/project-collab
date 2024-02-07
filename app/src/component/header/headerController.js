import React, { Component } from 'react';
import HeaderView from './headerView';

class Header extends Component {
    render()
    {
        const t = ["A","B","C"];
        return (<HeaderView textMenu={t}/>);
    }
}

export default Header;
