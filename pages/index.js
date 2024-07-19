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
    if (text.length > 0){
      setArray((prevArray) =>{
        const newArray = [...prevArray,text]
        return newArray;
      });
      setText("")
    };
  },[text]);

const handleRemove = (index) =>{
    const newArray = [...array];
    newArray.splice(index,1 );
    setArray(newArray);
  };

const handleSubmit = (e)=> {
    handleAdd();
    e.preventDedault();
  }; 
    
  return (
    <div className={styles.container}>
      <Head>
        <title>todo-study</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>TODOリスト</h1>
        <div className={styles.todo}>
          <form onSubmit={handleSubmit} >
            <input  type='text' value={text} onChange={handleChange}/>
          </form>
          <button  onClick={handleAdd}>追加</button>
          <ul>
            {array.map((item,index) => {
              return <div key={index} className={styles.todoRemove}>
                <li>{item}</li>
                <button onClick={() => handleRemove(index)}>削除</button>
                </div>
            })}
          </ul>
          
        </div>
      </main>
    </div>
  )
}
