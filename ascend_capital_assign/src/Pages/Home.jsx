import  {useEffect, useState} from 'react';

import DragNDrop from '../components/DragNDrop'

const defaultData = [
  {title: 'List 1', items: ['task1', 'task2', 'task3']},
  {title: 'List 2', items: ['task4', 'task5']},
  {title: 'List 3', items: ['task6', 'task7']},
  {title: 'List 4', items: ['task8', 'task9']},
  {title: 'List 5', items: ['task10', 'task11']}
  
]

function Home() {
  const [data, setData] = useState();  
  useEffect(() => {
    if (localStorage.getItem('List')) {
      console.log(localStorage.getItem('List'))
      setData(JSON.parse(localStorage.getItem('List')))
    } else {
      setData(defaultData)
    }
  }, [setData])
  return (
    <div className="App">
      <header className="App-header">
      <DragNDrop data={data} />
      </header>
    </div>
  );
}

export default Home;