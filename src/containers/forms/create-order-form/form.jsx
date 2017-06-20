import React from 'react'
import { Field } from 'redux-form'
import normalizePhone from './normalizePhone'
import { TextArea, TextInput, SelectInput } from 'components/form-fields'

const IndustrySelect = props => <SelectInput {...props} options={[
  'Легкая промышленность',
  'Тяжелая промышленность',
  'Сельское хозяйство',
  'Банковское дело',
  'Оптовая торговля',
  'Розничная торговля',
  'Страхование',
  'Общественное питание',
  'Услуги',
  'Сети',
  'Другое',
]}/>

const ServiceSelect = props => <SelectInput {...props} options={[
  'Стратегическое планирование',
  'Решение бизнес проблем',
  'Оптимизация бизнес процессов',
  'Оптимизация организационной культуры',
  'Оптимизация организационной структуры',
  'Финансовый анализ',
  'Оценка персонала',
  'Обучение и развитие персонала',
  'Разработка внутренней документации',
]}/>

export default ({ handleSubmit, pristine, submitting }) => {
  return (
    <form onSubmit={handleSubmit} className='createOrder'>
      <div>
        <Field name="company" component={TextInput} label="Название Компании"/>
        <Field name='industry' component={IndustrySelect} label='Отрасль'/>
        <Field name="service" component={ServiceSelect} label="Услуга"/>
      </div>
      <div>
        <Field name="description" component={TextArea} label="Описание"/>
        <Field name="result" component={TextArea} label="Ожидаемые результаты"/>
      </div>
      <div>
        <Field name="name" component={TextInput} label="Имя контактного лица"/>
        <Field name="surname" component={TextInput} label="Фамилия контактного лица"/>
      </div>
      <div>
        <Field name="phone" component={TextInput} label="Телефон" normalize={normalizePhone}/>
        <Field name="email" component={TextInput} label="Email"/>
      </div>

      <div>
        <button type='submit' disabled={pristine || submitting}>Отправить</button>
      </div>
    </form>
  )
}
