import React, { FC } from 'react'
import { Obj } from './SeminarItem';

interface MoadalProps {
    time: string;
    date: string;
    titleState: string;
    descripnionState: string;
    setTitleState: (e:string) => void;
    setDescriptiontate: (e: string) => void;
    setOpen: (bol: boolean) => void;
    putData: (id: string, obj: Obj) => void;
    id: string
}

const Modal: FC<MoadalProps> = ({titleState, descripnionState, setOpen, setDescriptiontate, setTitleState, putData, id, date, time}) => {

  const seminarUpdate = () => {
    const today = new Date()
    const formattedDate = today.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' });
    const formattedTime = today.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit'});
    // код выше для актуальной даты и времени
    putData(id, {description: descripnionState, title: titleState, time: formattedTime, date: formattedDate})
    setOpen(false)
  }

  return (
    <div className="modal">
        <input value={titleState}  onChange={(e) => setTitleState(e.target.value)}/>
        <input value={descripnionState} onChange={(e) => setDescriptiontate(e.target.value)} />
        <div className="btns">
          <button onClick={() => setOpen(false)}>X</button>
          <button onClick={seminarUpdate}>OK</button>  
        </div>
    </div>
    
  )
}

export default Modal