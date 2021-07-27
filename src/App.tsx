import React from 'react';
import './App.css';
import Login from "./pages/home/Login";
import TaskList from "./pages/list/TaskList";
import Search, {WrapperCard} from "./pages/search/Search";
import {Button, Modal} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {SearchActions, selectModalVisible} from "./pages/search/Search.slice";
import styled from "@emotion/styled";

function App() {
    const dispatch = useDispatch();
    const modalVisible = useSelector(selectModalVisible);
    return (
        <div>
            {/*<Login />*/}
            <WrapperCard>
                <h1>父组件<Button type={'primary'} onClick={() => dispatch(SearchActions.openModal())}>打开弹框</Button></h1>
                <TaskList/>
                <Search/>
            </WrapperCard>
            <Modal visible={modalVisible}
                   centered
                   closable
                   title={'我是弹框'}
                   onCancel={() => dispatch(SearchActions.closeModal())}
            >
                <Content>
                    我是弹框，你来打我了呀~
                </Content>
            </Modal>
        </div>
    );
}

const Content = styled.div`
  height: 30vh;
`

export default App;
