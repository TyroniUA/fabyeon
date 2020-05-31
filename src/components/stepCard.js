import React from 'react';
import './stepCard.css'
function StepCard(props) {

    return(
        <div class='stepCard' style={{margin: props.margin}}>
            
            <div class='spanNumber'style={{background: props.bckg}} ><p style={{color: props.color}}>{props.number}</p></div>
                
            
           <div class='higherRow'> 
            <span class='spanStepTitle'>{props.stepTitle}</span>
            <p class='spanText'>{props.text}</p>
            </div>
        </div>
    )

}

export default StepCard;