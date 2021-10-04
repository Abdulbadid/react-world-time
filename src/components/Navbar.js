import React,{useContext} from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import {AuthContext} from '../contexts/AuthContext';

const Navbar=()=>{

    const {isLightTheme,light,dark}=useContext(ThemeContext);
    const theme=isLightTheme ? light:dark;
    const {toggleAuth,isAuthenticated}=useContext(AuthContext);
    return(
        <nav style={{background:theme.ui,color:theme.syntax}}>
            <h1>Context App</h1>
            <div onClick={toggleAuth}>
                {isAuthenticated?'Çıkış Yap':'Giriş Yap'}
            </div>
            <ul>
                <li>Anasayfa</li>
                <li>Hakkımızda</li>
                <li>İletişim</li>
            </ul>
        </nav>
    )
}
export default Navbar;