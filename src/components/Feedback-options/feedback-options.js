import React from "react";
import PropTypes from 'prop-types';
import './feedback-options.css'

export default function FeedbackOptions({options, onLeavefeedback}){
    return (
        <ul className="options-list">
            {options.map(opt => <li key={opt}><button type="button" onClick={()=>onLeavefeedback(opt)} className="btn">{opt}</button></li>)}
            
    </ul>
)
}
FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeavefeedback:PropTypes.func.isRequired,
}