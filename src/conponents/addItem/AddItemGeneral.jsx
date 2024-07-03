import React, { useState } from 'react';
import FormButton from './FormButton';
import Form from './Form';

const General = () => {
    const [showform, changeState]= useState(false);

const FormButtonClicked=()=>{
    changeState(!showform);
}


const FormClosed = ()=>{
    changeState(!showform);
}

    return (
        <>
          {!showform && <FormButton onClick={FormButtonClicked} /> } 
          {showform && <Form onClose={FormClosed} />}
        </>
    );
}

export default General;
