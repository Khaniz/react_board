import React from 'react';
import PageTemplate from "../../template/PageTemplate";
import ListComponent from "../../components/Board/ListComponent";

const BoardListPage = ({location}) => {

    console.log(location)

    return (
        <PageTemplate>
            <ListComponent location={location}></ListComponent>
        </PageTemplate>
    );
};

export default BoardListPage;