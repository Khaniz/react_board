import React, {useState} from 'react';
import axios from "axios";
import {useHistory} from "react-router-dom";

const dtoState = {
    title:'샘플 제목',
    content:'샘플 내용',
    writer:'작성자'
}

const RegisterComponent = () => {

    const [dto, setDTO] = useState({...dtoState})

    const history = useHistory()

    const changeDTO = (e) => {
        dto[e.target.name] = e.target.value
        setDTO({...dto})
    }

    const sendAjax = async () => {
        const response = await axios.post("http://localhost:8080/api/board/register", dto)
        //
        // history.push("/board/register")

    }
    return (
        <div>
            <div>
                <input type={'text'} name={'title'} value={dto.title} onChange={(e) => {changeDTO(e)}}/>
            </div>
            <div>
                <input type={'text'} name={'content'} value={dto.content} onChange={(e) => {changeDTO(e)}}/>
            </div>
            <div>
                <input type={'text'} name={'writer'} value={dto.writer} onChange={(e) => {changeDTO(e)}}/>
            </div>
            <div>
                <button onClick={()=>sendAjax()}>Register</button>
            </div>
        </div>
    );
};

export default RegisterComponent;