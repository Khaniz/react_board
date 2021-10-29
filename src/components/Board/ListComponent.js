import React, {useEffect} from 'react';
import {parse} from "query-string";
import axios from "axios";

const pageInfoState = {
    count:0,
    page:1,
    size:10,
    prev:false,
    next:false,
    start:0,
    end:0,
    dtoList:[]
}

const range = (from, to) => {
    const arr = []
    for(let i= from; i <= to; i++){
        arr.push(i)
    }
    return arr
}

const ListComponent = ({location}) => {

    const params = parse(location.search)

    console.log(params)

    const pageDTO = {page:params.page | 1, size:params.size |10}

    useEffect(() => {
        axios.get(`http://localhost:8080/api/board/list?page=${pageDTO.page}&size=${pageDTO.size}`)
            .then(response => {
                const data = response.data
                console.log(data)
            })
    },[pageDTO])

    console.log(params)

    return (
        <div>
            <h4> 이 자리에 데이터를 뿌려줘야 한다. </h4>
|
        </div>
    );
};

export default ListComponent;