import React from 'react'
import './app.css'
// import FieldName from '../field-name/field-name'

const App = () => {
  return (
    <div>
      <form>
        <fieldset>
          <legend>Создать аккаунт</legend>
          <div className='form-group row'>
            <label for='staticEmail' class='col-sm-2 col-form-label'>
              Эл. адрес
            </label>
            <div className='col-sm-10'>
              <input
                type='text'
                readonly=''
                class='form-control-plaintext'
                id='staticEmail'
                value='email@example.com'
              />
            </div>
          </div>
          <div className='form-group'>
            <label for='exampleInputEmail1' class='form-label mt-4'>
              Адрес электронной почты
            </label>
            <input
              type='email'
              class='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
              placeholder='Введите адрес электронной почты'
            />
            <small id='emailHelp' class='form-text text-muted'>
              Мы никогда не будем делиться вашей электронной почтой с кем-либо
              еще.
            </small>
          </div>
          <div className='form-group'>
            <label for='exampleInputTel1' class='form-label mt-4'>
              Номер телефона
            </label>
            <input
              type='tel'
              className='form-control bfn-phone'
              data-format='+7 (ddd) ddd-dd-dd'
              id='exampleInputTel1'
              placeholder='+7(___)___-__-__'
              aria-describedby='telHelp'
              value='+7(___)___-__-__'
              pattern='\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}'
              // pattern='[\+]\d{1}\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}'
              minlength='18'
              maxlength='18'
            />
            {/* <span class='form__error'>
              Это поле должно содержать телефон в формате +7 (999) 999-99-99
            </span> */}
            <small id='telHelp' class='form-text text-muted'>
              Пример ввода +7(999) 999-99-99
            </small>
          </div>
          <div className='form-group'>
            <label for='exampleInputPassword1' class='form-label mt-4'>
              Ваше имя
            </label>
            <input
              type='text'
              className='form-control'
              id='exampleInputPassword1'
              placeholder='Имя'
              required
            />
          </div>
          <div className='form-group'>
            <label for='exampleSelect1' className='form-label mt-4'>
              Выберите город
            </label>
            <select class='form-select' id='exampleSelect1'>
              <option>Иркутск</option>
              <option>Усолье-Сибирское</option>
              <option>Ангарск</option>
              <option>Шелехов</option>
              <option>Братск</option>
            </select>
          </div>
          <div className='form-group'>
            <label for='exampleSelect2' class='form-label mt-4'>
              Предпочитаемый способ связи
            </label>
            <select multiple='' class='form-select' id='exampleSelect2'>
              <option>email</option>
              <option>звонок</option>
              <option>sms</option>
            </select>
          </div>
          <div className='form-group'>
            <label for='exampleSelect2' class='form-label mt-4'>
              Выберите тему вашего вопроса
            </label>
            <select ff class='form-select' id='exampleSelect2'>
              <option>Доставка</option>
              <option>Качество товара</option>
              <option>Сервис</option>
              <option>Акции и скидки</option>
              <option>Вакансии</option>
            </select>
          </div>
          <div className='form-group'>
            <label for='exampleTextarea' className='form-label mt-4'>
              Задайте вопрос
            </label>
            <textarea
              className='form-control'
              id='exampleTextarea'
              rows='3'
              required
            ></textarea>
          </div>

          <fieldset className='form-group'>
            <div className='form-check checkbox'>
              <input
                className='form-check-input'
                type='checkbox'
                value=''
                id='flexCheckDefault'
              />
              <label className='form-check-label' for='flexCheckDefault'>
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
