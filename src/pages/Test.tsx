import React from "react";
import {Button} from "antd";
import './index.less'

const Test: React.FC = () => {
    return (<div className={'grandPa'}>
        <div className={'father'}>
            <div className={'child'}>
                <Button type={'primary'}>按钮1111</Button>
            </div>
        </div>
    </div>)
}

export default Test;