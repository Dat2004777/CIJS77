import React, {useState} from 'react';
import data from './data';
import './App.css';
import './components/Todolist/style.scss'
import {TodolistItem,InputItem,Footer} from './components/Todolist'

function App() {
  /*
    Ở đây sử dụng 2 state. Một để thêm task vào trong data sau đó render lên danh sách. Một để đếm số task còn lại và render lên n tasks left.
  */
  const [tasks, setTasks] = useState(data);
  const [count, setCount] = useState(tasks.length);

  /*
    Hàm checkTask() để kiểm tra xem ô input đã được check chưa rồi add thêm css vào.
  */
  const checkedTask = () => {
    tasks.forEach(e => { 
      const obj = document.getElementById(e.id);
      if(obj.checked) {
          obj.nextElementSibling.classList.add('done_item');
      }  
      else if (obj.checked === false){
          obj.nextElementSibling.classList.remove('done_item');
      }
    })     
  }

  /*
    Bắt đầu sử dụng state ở đây. Cái này là tự research tự làm hehe:
    addTask() nhận một event làm param.
    arr và oldId để tìm ra id hiện tại lớn nhất để sau đó add thêm data vào datalist sẽ có id mới.
    Nếu ở ô input nhận được key là Enter thì sẽ tạo một list mới và chạy setTasks nhận list mới này của state.
  */
  const addTask = (event) => {
    const arr = tasks.map(e=> e.id);
    const oldId = Math.max(...arr);
    if (event.key === 'Enter') {
      const newTasks = tasks.concat({id: oldId+1, name:event.target.value, isCompleted: false});
      setTasks(newTasks);
      const unCompletedTasks = newTasks.filter((task) => task.isCompleted === false);
      setCount(unCompletedTasks.length)
    }
  }

  /*
    Hàm updateTasks() này được anh thầy gợi ý khá kĩ mà buồn ngủ quá load mãi mới ra.
    updateTasks() nhận status và id làm param.
    Tìm index của task có id trùng với id truyền vào bằng findIndex().
    Sau khi tìm được index thì set isCompleted của nó bằng với status.
    Status này chính là cái target.checked của event onChange trong file index.js
    Tạo một array các task có isCompleted là false để đếm số task còn lại và length arr vào setCount().
  */
  const updateTasks = (status, id) => {
    const index = tasks.findIndex(task => task.id === id)
    tasks[index].isCompleted = status;
    const unCompletedTasks = tasks.filter((task) => task.isCompleted === false);
    setCount(unCompletedTasks.length)
  }


  return (  
    <div className='page'>
      <header className='container'>
        <InputItem addTask={addTask}></InputItem>
      </header>
      <body>
        <div className='content_container container'>
          {tasks.map(e => {
            return (
              <TodolistItem text={e.name} id={e.id} checked={e.isCompleted} checkedTask={checkedTask} updateTasks={updateTasks}/>
            )
          })}
        </div>
      </body>
      <footer className='container'>
        <Footer count ={count}></Footer>
      </footer>
    </div>
  );
}

export default App;
