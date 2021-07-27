import styled from '@emotion/styled'
import {Button, Card} from "antd";
import React from "react";

const StyledTest1: React.FC = () => {
    return (<div>
        <RowBox between={true} marginBottom={1} gap={5}>
            <h1>任务组</h1>
            <Button type={"link"}>
                创建任务组
            </Button>
        </RowBox>
        <Card>
            卡片
        </Card>
    </div>)
}

export const RowBox = styled(Card)<{
    gap?: number | boolean;
    between?: boolean;
    marginBottom?: number;
}>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.between ? "space-between" : undefined)};
  margin-bottom: ${(props) => props.marginBottom + "rem"};

  > * {
    margin-top: 0 !important; // 重置上下外边距，以免影响垂直居中效果
    margin-bottom: 0 !important;
    margin-right: ${(props) =>
    typeof props.gap === "number" ? props.gap + "rem" : props.gap ? "2rem" : undefined
};}
`;

export default StyledTest1;