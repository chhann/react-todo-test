import "./App.css";
import { useEffect, useState } from "react";
import { useGetItem } from "./hooks/useGetItem";
import { useChangeDate } from "./hooks/useChangeDate";

function App() {
  const getTOdoList = useGetItem();
  const[todoList, setTodoList] = useState(getTOdoList);
  const[showTodoList, setShowTodoList] = useState([]);
  const[newContent, setNewContent] = useState("");
  const[showStatus, setShowStatus] = useState("전체");
  // const changeDate = useChangeDate();
  
  // todo 내용 변경 될때마다 실행
  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
    
    // todoList가 변경될 때마다 showTodoList를 업데이트
    setShowTodoList(todoList.map(todo => (
      { ...todo, updateStatus: false, inputValue: todo.title }
    )));

    todoListFilter(showStatus);
  }, [todoList, showStatus]);



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

  ///////////
  //타임스탬프 값 변경
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

  ///////////
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
        }).map((todo) => ({
          ...todo,
          showStatus: filterValue,
        }))
    )
  }

  // todo 내용 변경 Input창 열기
  const openUpdateInput = (todoId) => {
    setShowTodoList(showTodoList.map(todo => {
      if (todo.id === todoId) {
        return { ...todo, updateStatus: true, inputValue:todo.title};
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
    const updateVlaue = showTodoList.filter(todo => todo.id === todoId)[0]
    
    setTodoList(todoList.map(todo => {
      if (todo.id === todoId) {
        return {...todo, title: updateVlaue.inputValue }
      }
      return todo;
    }));
    
    updateCancle(todoId);
  };

  //삭제하기
  const deleteTodo = (todoId) => {
    setTodoList(todoList.filter(todo => todo.id !== todoId))
  }

  return (
    <div className="App">
      <h1>Todo List 기술과제</h1>
      
      <input onChange={handleAddInputChange} value={newContent}/>
      <button onClick={() => addContent()}>추가</button>

      {/* todo 목록 필터 */}
      <div>
        <button onClick={() => setShowStatus("전체")}>전체</button>
        <button onClick={() => setShowStatus("완료")}>완료</button>
        <button onClick={() => setShowStatus("미완료")}>미완료</button>
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
                  <button onClick={() => {deleteTodo(todo.id)}}>삭제</button>
                  
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
