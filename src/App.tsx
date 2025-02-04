import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { ISeminar } from './@types/seminar'
import SeminarItem, { Obj } from './components/SeminarItem'

function App() {
  const [data, setData] = useState<ISeminar[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Можно было подключить redux и юзать RTK Query, 
  // разбить приложение на компоненты, поработать над стилями, но вряд ли кто-то 
  // кроме меня это прочтет так что :) 

  // get запрос
  const getData = async () => {
    try {
      setLoading(true)
      setError('')
      const response = await axios.get('http://localhost:3000/seminars/')
      
      setData(response.data)
      setLoading(false)
    } catch (error) {
      if (error instanceof Error)
        setError(error.message)
      setLoading(false)
    }
  }
  // put запрос
  const putData = async (id: string, obj: Obj) => {
    try {
      await axios.put(`http://localhost:3000/seminars/${id}`, obj );
      getData()
    } catch (error) {
      if (error instanceof Error){
        setError(error.message)
      }
      setLoading(false)
    }
  };

  // gelete запрос
  const deleteData = async (id: string) => {
    try {
      await axios.delete(`http://localhost:3000/seminars/${id}`);
      getData()
    } catch (error) {
      if (error instanceof Error){
        setError(error.message)
      }
      setLoading(false)
    }
  };

  useEffect(() => {
    getData()
    alert("Картинки не работают :(")
  }, [])

  return (
    <div className='container'>
      {loading && <h1>Загрузка...</h1>}
      {data.map((seminar) => <SeminarItem key={seminar.id} putData={putData} deleteData={deleteData} {...seminar} />)}
      {error && <h1 style={{ color: "red" }}>{error}</h1>}
    </div>
  )
}

export default App
