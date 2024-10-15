import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const getTodoList = () => {
    const StorageTodoList = localStorage.getItem('todoList');
    return StorageTodoList ? JSON.parse(StorageTodoList) : [];
  }
  
  const[todoList, setTodoList] = useState(getTodoList);
  const[showTodoList, setShowTodoList] = useState([]);
  const[newContent, setNewContent] = useState("");
  
  // todo 내용 변경 될때마다 실행
  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
    
    // todoList가 변경될 때마다 showTodoList를 업데이트
    setShowTodoList(todoList.map(todo => (
      { ...todo, updateStatus: false, inputValue: todo.title }
    )));
  }, [todoList]);


  // console.log(todoList);

  // 할일 추가
  const addContent = () => {
    let id = Date.now();
    let newSaveContent = { id: id, title: newContent, status: false };

    setTodoList([...todoList, newSaveContent]);
    setNewContent("");
  }

  // 할일 input
  const handleAddInputChange = (e) => {
    setNewContent(e.target.value);
  }

  // 타임스탬프 값 변경
  const changeDate = (timestamp) => {
    let date = new Date(timestamp);

    const year = date.getFullYear();
    const month = date.getMonth() + 1; 
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const resultDate = `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분 ${seconds}초`

    return resultDate
  }

  // 할일 완료/미완료 체크 onChange
  const handleCheckOnChange = (e) => {
    const todoId = parseInt(e.target.value);

    setTodoList(() =>
      todoList.map(todo => {
        if(todo.id === todoId) {
          return {
            ...todo,
            status: e.target.checked
          }
        }
        return todo
      }));
  }

  // todoList 필터 전체/완료/미완료
  const todoListFilter  = (filterValue) => {

    setShowTodoList(() => 
      todoList.filter((todo) => {
        switch(filterValue) {
          case "전체" : 
            return true;
            break;
  
          case "완료" : 
            return todo.status === true;
            break;
  
          case "미완료" : 
            return todo.status === false; 
            break;
          
          default:
            return true;
          }
        })
      
    )
  }

  // todo 내용 변경 Input창 열기
  const openUpdateInput = (todoId) => {
    setShowTodoList(showTodoList.map(todo => {
      if (todo.id === todoId) {
        return { ...todo, updateStatus: true };
      }
      return todo;
    }));
  }

  // 타이틀 입력값 변경 함수
  const handleUpdateInputChange = (e, todoId) => {
    const value = e.target.value;

    setShowTodoList(showTodoList.map(todo => {
      if (todo.id === todoId) {
        return { ...todo, inputValue: value };
      }
      return todo;
    }));
  };
  
console.log(showTodoList);


// 수정 취소
const updateCancle = (todoId) => {
  setShowTodoList(showTodoList.map(todo => {
    if (todo.id === todoId) {
      return { ...todo, updateStatus: false };
    }
    return todo;
  }));
};

// 수정하기 
const updateContent = (todoId) => {
  console.log(todoList);
  
  setTodoList(showTodoList.map(todo => {
    if (todo.id === todoId) {
      const { inputValue, updateStatus, ...rest } =todo;
      return { ...rest, title: inputValue }
    }
    return todo;
  }));

  updateCancle(todoId);
};

  return (
    <div className="App">
      <h1>Todo List 기술과제</h1>
      
      <input onChange={handleAddInputChange} value={newContent}/>
      <button onClick={() => addContent()}>추가</button>

      {/* todo 목록 필터 */}
      <div>
        <button onClick={() => todoListFilter("전체")}>전체</button>
        <button onClick={() => todoListFilter("완료")}>완료</button>
        <button onClick={() => todoListFilter("미완료")}>미완료</button>
      </div>

      {/* todo 목록 */}
      <div>
        <ul>
          {
            showTodoList.map((todo, i) => {
              return(
                <li key={i}>
                  {/* 제목 */}
                  {
                    todo.updateStatus ? 
                      <>
                        <input
                          value={todo.inputValue || ""}
                          onChange={(e) => handleUpdateInputChange(e, todo.id)}
                        />

                        <div>
                          <button onClick={() => updateCancle(todo.id)}>수정취소</button>
                          <button onClick={() => updateContent(todo.id)}>수정하기</button>    
                        </div>
                      </>
                      :
                      <div>
                        {todo.title}
                      </div>
                  }
                  

                  {/* 날짜 */}
                  <div>
                    {changeDate(todo.id)}
                  </div>

                  {/* 완료/미완료 */}
                  <input
                    type="checkbox"
                    value={todo.id}
                    checked={todo.status}
                    onChange={handleCheckOnChange}
                  />

                  {/* 수정버튼 */}
                  <button onClick={() => {openUpdateInput(todo.id)}}>수정</button>
                  {/* 삭제버튼 */}
                  <button>삭제</button>
                </li>
              )
            })
          }
        </ul>

      </div>
















    </div>
  );
}

export default App;
