import React from 'react';
import './cover.scss';
import {useHistory} from 'react-router-dom';
import {useState} from 'react';

export default function Cover(){
    const history = useHistory()
    const showSurvey = () =>{
        history.push("/surveySite")
    }

    return(
        <div className='cover'>
            <div className='divCenter'>
                <img src='https://emesaprevencion.com/wp-content/uploads/2018/06/Estadi%CC%81sticas_en_PRL_Madrid.jpg'></img>
                <h1 className='h1Cover' onClick={showSurvey}>View</h1>
            </div>
        </div>
    )
}