import React, { useState } from 'react'
import './contact.css'
const Contact = () => {

    const[user, setUser] = useState(
        {
            Name:'', email:'', subject: '', Message: ''
        }
    )
    let values, names
    const data = (e) => 
    {
        values = e.target.value
        names = e.target.name
        setUser({...user, [names]: values})
    }

    const send = async (e) => 
    {
        const {Name, email, subject, Message} = user
        e.preventDefault()
        const option = {
            method: 'POST',
            headers: {
                'Content-Type': 'aplication/json'
            },
            body: JSON.stringify({
                Name, email, subject, Message
            })
        }

        const send = await fetch(
            'https://finalekz-default-rtdb.firebaseio.com//Message.json', option
            )

        if (send) {
            alert("Сообщение отправлено")
        }
        else
        {
            alert("Сообщение не отправлено")
        }

    }

  return (
    <>
    <div className='contact'>
        <div className='container'>
            <div className='form'>
                <h2>Напишите нам</h2>
                <form method='POST'>
                    <div className='box'>
                        <div className='lable'>
                            <h4>Имя</h4>
                        </div>
                        <div className='input'>
                            <input type='text' placeholder='Имя' value={user.Name} name='Name' onChange={data}></input>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='lable'>
                            <h4>E-mail</h4>
                        </div>
                        <div className='input'>
                            <input type='email' placeholder='E-mail' value={user.email} name='email' onChange={data}></input>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='lable'>
                            <h4>Тема</h4>
                        </div>
                        <div className='input'>
                            <input type='text' placeholder='Тема' value={user.subject} name='subject' onChange={data}></input>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='lable'>
                            <h4>Сообщение</h4>
                        </div>
                        <div className='input'>
                            <textarea placeholder='Сообщение' value={user.Message} name='Message' onChange={data}></textarea>
                        </div>
                    </div>
                    <button type='sublit' onClick={send}>Отправить</button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact