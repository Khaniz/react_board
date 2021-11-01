import React from 'react';
import PageTemplate from "../../template/PageTemplate";
import RegisterComponent from "../../components/Board/RegisterComponent";

const BoardRegisterPage = () => {
    return (
        <PageTemplate>
            <h1>board register</h1>
            <RegisterComponent></RegisterComponent>
        </PageTemplate>
    );
};

export default BoardRegisterPage;