import React from "react";
import { Navigate, useNavigate } from 'react-router-dom'; // eslint-disable-line no-unused-vars
import styles from "./start.css"; // eslint-disable-line no-unused-vars
import QnaBtn from "../components/QnaBtn";  
import { useState } from "react";
import Qlist from "../components/QList";
import Alist from './../components/AList';
import QnAlist from "./QnAlist";

function QuestionPage() {
   
    const [page, setPage]= useState(0);
    const navigate = useNavigate();
   
    const NextQ = ()  => {
        setPage(page + 1);
        if (page==11) {
            navigate("/result")
        }
    }
    const PreQ = ()  => {
        if (page==0) {
            navigate("/")
        }
        setPage(page - 1);
        
    }
        
    

    return (
        <div className="qna_page">
            <div className="qna_div">
                    <div className="qna_text">
                    <h3>{QnAlist[page].q}</h3>
                    <h5>{page+1}</h5>
                    </div>

                    
                    <div className="qna_buttons">
                    
                        <QnaBtn className="abtn">{QnAlist[page].a[0].text[0]}</QnaBtn>
                        <QnaBtn className="abtn">{QnAlist[page].a[1].text[0]}</QnaBtn>
                        <QnaBtn className="abtn">{QnAlist[page].a[0].text[1]}</QnaBtn>
                        <QnaBtn className="abtn">{QnAlist[page].a[1].text[1]}</QnaBtn>
                    </div>
                
                
            </div>
            <h3>{page+1}/12</h3>
            <button className="set_btn" onClick={PreQ}>뒤로</button> <button className="set_btn" onClick={NextQ}>다음</button>
        </div>
    );
};

export default QuestionPage;