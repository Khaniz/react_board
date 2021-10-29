import React from 'react';
import PageTemplate from "../template/PageTemplate";
import HelloComponent from "../components/HelloComponent";

const HelloPage = () => {
    return (
        <PageTemplate>
            <HelloComponent></HelloComponent>
        </PageTemplate>
    );
};

export default HelloPage;