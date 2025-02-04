import React, { FC, useState } from 'react'
import Modal from './Modal';

export interface Obj {
  title: string
  description: string
  date: string;
  time: string
}

interface SeminarItemProps {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  photo: string;
  deleteData: (id: string) => void
  putData: (id: string, obj: Obj) => void
}

const SeminarItem: FC<SeminarItemProps > = ({date, description, id, photo, time, title, deleteData, putData}) => {
  const [titleState, setTitleState] = useState(title)
  const [descripnionState, setDescriptiontate] = useState(description)
  const [open, setOpen] = useState(false)


  const deleteSeminarItem = () => {
    if(window.confirm("УДАЛИТЬ?")) {
      deleteData(id)
    }
  }
  return (
    <div className='item'>
        <h2>{id}. {titleState}</h2>
        <p>{descripnionState}</p>
        <img src={photo} alt="photo" />
        <div className="item__buttons">
          <button onClick={deleteSeminarItem}>Удалить</button>
          <button onClick={() => setOpen(true)}>Редактировать</button>
        </div>
        <div className="item__date">
          <p>{date}</p>
          <p>{time}</p>
        </div>
        {open && <Modal
          date={date} 
          time={time} 
          id={id} 
          titleState={titleState} 
          putData={putData} 
          setOpen={setOpen} 
          descripnionState={descripnionState} 
          setTitleState={setTitleState} 
          setDescriptiontate={setDescriptiontate} 
        />}
    </div>
  )
}

export default SeminarItem