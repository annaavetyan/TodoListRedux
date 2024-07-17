import React from 'react';
import './App.css';

import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import { connect, ConnectedProps } from "react-redux";
import { changeInputBox, createNewPost } from "./components/redux/TodoReducer";
import { RootState } from './components/redux/store';

const mapStateToProps = (state: RootState) => ({
    posts: state.todoPage.posts,
    name: state.todoPage.name,
    endDate: state.todoPage.endDate,
    inputBox: state.todoPage.inputBox,
});

const mapDispatchToProps = {
    createNewPost,
    changeInputBox,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

type AppContainerProps = PropsFromRedux;

const AppContainer: React.FC<AppContainerProps> = (props) => {
    return (
        <div className="App">
            <TodoForm {...props} />
            <TodoList {...props} />
        </div>
    );
};

export default connector(AppContainer);