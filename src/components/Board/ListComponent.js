import React, {useEffect, useState} from 'react';
import {parse} from "query-string";
import axios from "axios";
import {useHistory} from "react-router-dom";

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

    const [pageInfo, setPageInfo] = useState(pageInfoState)
    const [reload, setReload] = useState(false)

    const history = useHistory()
    console.log(history)
    const params = parse(location.search)

    console.log(params)

    const pageDTO = {page:params.page || 1, size:params.size || 10}

    useEffect(() => {
        axios.get(`http://localhost:8080/api/board/list?page=${pageDTO.page}&size=${pageDTO.size}`)
            .then(response => {
                console.log(response.data)
                setPageInfo(response.data)

            })
    },[pageDTO.page, reload])

    const dtoLi = pageInfo.dtoList.map(dto => <li key={dto.bno}>{dto.bno}-- {dto.title}</li>)

    const movePage = (pageNum) => {
        // alert("to the "+ pageNum)
        setReload(!reload)
        history.push(`/board/list?page=${pageNum}`)
    }

    const pageLi = range(pageInfo.start, pageInfo.end)
        .map(pageNum=> <li key={pageNum} onClick={()=>movePage(pageNum)}>{pageNum}</li>)

    console.log(pageDTO)

    return (
        <div>
            <h4> 이 자리에 데이터를 뿌려줘야 한다. </h4>
            <ul>
                {dtoLi}
            </ul>
            <ul>
                {pageLi}
            </ul>
        </div>
    );
};

export default ListComponent;