/** @jsxImportSource @emotion/react */
import * as S from "./style.js";
import { useEffect, useState } from "react";
import { useGetItem } from "./hooks/useGetItem";
import { changeDate } from "./hooks/changeDate";

function App() {
  const getTodoList = useGetItem();
  const[todoList, setTodoList] = useState(getTodoList);
  const[showTodoList, setShowTodoList] = useState([]);
  const[newContent, setNewContent] = useState("");
  const[showStatus, setShowStatus] = useState("전체");
  
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

  //todoList 필터 전체/완료/미완료
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

  // 수정 onChange 함수
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
    <div css={S.layout}>
      <div css={S.container}>

      <div css={S.titleLayout}>
        <div css={S.title}>JUST DO IT</div>
      </div>
      
      <div css={S.addLayout}>
        <input css={S.addInput} onChange={handleAddInputChange} value={newContent}/>
        <button css={S.addButton} onClick={() => addContent()}>+</button>
      </div>

      {/* todo 목록 필터 */}
      <div css={S.viewLayout}>
        <button onClick={() => setShowStatus("전체")}>All</button>
        <button onClick={() => setShowStatus("완료")}>Completed</button>
        <button onClick={() => setShowStatus("미완료")}>Incomplete</button>
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

    </div>
  );
}

export default App;
