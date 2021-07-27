import React from "react";
import './index.scss'

const Test:React.FC = () => {
    return (<div className={'grandDom'}>
        <div className={'fatherDom'}>
            <div>DOM1</div>
            <div>DOM2</div>
            <div>DOM3</div>
        </div>
    </div>)
}

export  default Test;