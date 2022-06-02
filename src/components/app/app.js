import React, { useState } from 'react'
import NumberFormat from 'react-number-format'
import './app.css'

const App = () => {
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [name, setName] = useState('')
  const [town, setTown] = useState('')
  const [linkMethod, setLinkMethod] = useState('')
  const [requestTheme, setRequestTheme] = useState('')
  const [question, setQuestion] = useState('')
  const [approve, setApprove] = useState(false)

  const towns = ['Иркутск', 'Усолье-Сибирское', 'Ангарск', 'Шелехов', 'Братск']
  const linkMethods = ['email', 'звонок', 'sms']
  const requestThemes = [
    'Доставка',
    'Качество товара',
    'Сервис',
    'Акции и скидки',
    'Вакансии'
  ]

  const handleSubmit = e => {
    e.preventDefault()

    const postData = {
      email,
      phoneNumber,
      name,
      town,
      linkMethod,
      requestTheme,
      question,
      approve
    }

    fetch('url - /feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(postData)
    })

    console.log(postData)
    alert('sent data')
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Создать аккаунт</legend>
          <div className='form-group row'>
            <label htmlFor='sampleEmail' className='col-sm-2 col-form-label'>
              Эл. адрес
            </label>
            <div className='col-sm-10'>
              <input
                type='text'
                className='form-control-plaintext'
                id='sampleEmail'
                value='email@example.com'
                readOnly
              />
            </div>
          </div>
          <div className='form-group'>
            <label htmlFor='email' className='form-label mt-4'>
              Адрес электронной почты
            </label>
            <input
              type='text'
              className='form-control'
              id='email'
              aria-describedby='emailHelp'
              placeholder='Введите адрес электронной почты'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <small id='emailHelp' className='form-text text-muted'>
              Мы никогда не будем делиться вашей электронной почтой с кем-либо
              еще.
            </small>
          </div>
          <div className='form-group'>
            <label htmlFor='phoneNumber' className='form-label mt-4'>
              Номер телефона
            </label>

            <NumberFormat
              className='form-control btn-phone'
              format='+7(###)###-##-##'
              placeholder='+7(___)___-__-__'
              id='phoneNumber'
              minLength='18'
              maxLength='18'
              value={phoneNumber}
              onChange={e => setPhoneNumber(e.target.value)}
            />
            <small id='phoneHelp' className='form-text text-muted'>
              Пример ввода +7(999) 999-99-99
            </small>
          </div>
          <div className='form-group'>
            <label htmlFor='name' className='form-label mt-4'>
              Ваше имя
            </label>
            <input
              type='text'
              className='form-control'
              id='name'
              placeholder='Имя'
              required
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='town' className='form-label mt-4'>
              Выберите город
            </label>
            <select
              className='form-select'
              id='town'
              value={town}
              onChange={e => setTown(e.target.value)}
            >
              {towns.map(item => {
                return <option key={item}>{item}</option>
              })}
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='linkMethod' className='form-label mt-4'>
              Предпочитаемый способ связи
            </label>
            <select
              className='form-select'
              id='linkMethod'
              value={linkMethod}
              onChange={e => setLinkMethod(e.target.value)}
            >
              {linkMethods.map(item => {
                return <option key={item}>{item}</option>
              })}
            </select>
          </div>
          linkMethod
          <div className='form-group'>
            <label htmlFor='requestTheme' className='form-label mt-4'>
              Выберите тему вашего вопроса
            </label>
            <select
              className='form-select'
              id='requestTheme'
              value={requestTheme}
              onChange={e => setRequestTheme(e.target.value)}
            >
              {requestThemes.map(item => {
                return <option key={item}>{item}</option>
              })}
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='question' className='form-label mt-4'>
              Задайте вопрос
            </label>
            <textarea
              className='form-control'
              id='question'
              rows='3'
              required
              value={question}
              onChange={e => setQuestion(e.target.value)}
            ></textarea>
          </div>
          <fieldset className='form-group'>
            <div className='form-check checkbox'>
              <input
                className='form-check-input'
                type='checkbox'
                id='approve'
                value={approve}
                onChange={e => setApprove(e.target.value)}
                required
              />
              <label className='form-check-label' htmlFor='approve'>
                согласие на обработку персональных данных (обязательный выбор
                для отправки формы)
              </label>
            </div>
          </fieldset>
          <fieldset className='form-group checkbox'>
            <button type='submit' className='btn btn-primary'>
              Отправить
            </button>
          </fieldset>
        </fieldset>
      </form>
    </div>
  )
}
export default App
