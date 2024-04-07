import React, { Component } from 'react';
import HeaderView from './headerView';
import {auth, provider} from '../../index';
import { GoogleAuthProvider,getAuth, signInWithPopup } from "firebase/auth";


class Header extends Component {
    
    
    render()
    {
        const signIn = () => signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
        const t = ["A","B","C"];
        return (<HeaderView textMenu={t} auth={signIn}/>);
    }
}

export default Header;
