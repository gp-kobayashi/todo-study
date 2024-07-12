import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useCallback, useState } from 'react'


export default function Home() {

  const [text,setText] = useState("");
  const [array,setArray] = useState([]);
  
  const handleChange =(e) =>{
    setText(e.target.value.trim());
  }
  
  const handleAdd = useCallback(() =>{
    setArray((prevArray) =>{
      const newArray = [...prevArray,text]
      return newArray;
    });
  },[text]);

  return (
    <div className={styles.container}>
      <Head>
        <title>todo-study</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>TODOリスト</h1>
        <div className={styles.todo}>
          <form>
            <input type='text' value={text} onChange={handleChange}/>
          </form>
          <button onClick={handleAdd}>追加</button>
          <ul>
            {array.map(item => {
              return <div>
                <li key ={item}>{item}</li>
                <button>削除</button>
                </div>
            })}
          </ul>
          
        </div>
      </main>
    </div>
  )
}
