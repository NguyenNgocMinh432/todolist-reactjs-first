import React, { useEffect } from 'react';
import TodoList from './components/TodoList';
import Textfield from '@atlaskit/textfield';
import Button from '@atlaskit/button';
import { useState } from 'react';
import { v4 } from 'uuid';
import { useCallback } from 'react';
// import {useEffect} from 'react';
function App() {
  const TODO_APP_STORAGE_KEY = 'TODO_APP';
  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState("");
  useEffect(() => {
    const StoragedTodoList = localStorage.getItem(TODO_APP_STORAGE_KEY);
    if ((StoragedTodoList)) {
      setTodoList(JSON.parse(StoragedTodoList));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem(TODO_APP_STORAGE_KEY, JSON.stringify(todoList));
  }, [todoList])
  const onTextInputChange = useCallback((e) => {
    setTextInput(e.target.value);
  }, []);
  const onAddButtonClick = useCallback((e) => {
    setTodoList([{ id: v4(), name: textInput, isComplete: false }, ...todoList]);
    setTextInput("");
  }, [textInput, todoList]);
  const onCheckbtnClick = useCallback((id) => {
    setTodoList(prevState => prevState.map(todo => todo.id === id ? { ...todo, isComplete: true } : todo))
  }, [])


  return (
    <div className="App">
      <h3>Danh sách cần làm </h3>
      <Textfield
        name="add-todo"
        placeholder="Thêm việc cần làm..."
        elemAfterInput={<Button isDisabled={!textInput} appearance="primary"
          onClick={onAddButtonClick}
        >Thêm</Button>}
        css={{ padding: '2px 4px 2px' }}
        value={textInput}
        onChange={onTextInputChange}
      />
      <TodoList
        todoList={todoList}
        onCheckbtnClick={onCheckbtnClick}
      />
  
    </div>
  );
}

export default App;


