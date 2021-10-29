import React from 'react';
import Nav from "./Nav";

const PageTemplate = ({children}) => {
    return (
        <div>
            <Nav></Nav>

            <div className="container-fluid">
                {children}
            </div>

        </div>
    );
};

export default PageTemplate;