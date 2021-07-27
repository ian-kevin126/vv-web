import styled from '@emotion/styled'
import {Button, Card} from "antd";
import React from "react";
import {WrapperCard} from "../search/Search";
import {useDispatch} from "react-redux";
import {SearchActions} from "../search/Search.slice";

const TaskList: React.FC = () => {
    const dispatch = useDispatch();
    return (<WrapperCard>
        <RowBox between={true} marginBottom={1} gap={5}>
            <h1>兄弟组件1</h1>
            <Button type={"primary"} onClick={() => dispatch(SearchActions.openModal())}>打开弹框</Button>
        </RowBox>
    </WrapperCard>)
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

export default TaskList;