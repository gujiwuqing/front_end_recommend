import {useEffect, useState} from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    axios.post('https://api.juejin.cn/recommend_api/v1/article/recommend_all_feed?aid=2608&uuid=6996871449340708367', {
      data: {
        client_type: 2608,
        cursor: "0",
        id_type: 2,
        limit: 20,
        sort_type: 300
      }
    }).then(res=>{
      console.log(res);
    })
  }, [])
  return (
    <div className="App">
      <h2>前端每日推荐文章</h2>
    </div>
  )
}

export default App
