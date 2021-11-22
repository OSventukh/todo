import React from "react";

import './app-header.css';

const AppHeader = ({todo, done}) => {
    return (
        <div className="app-header d-flex">
            <h1>Список справ</h1>
            <h2>{todo} ще треба зробити, {done} зроблено</h2>
        </div>
    )
    
    
}

export default AppHeader;