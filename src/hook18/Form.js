import React from 'react'
import Input from './Input'
import Select from './Select'

export default function Form() {

  const statusData = [
    {
        value: 0,
        name: 'Chưa kích hoạt'
    },

    {
        value: 1,
        name: 'Kích hoạt',
        isSelected: true
    }
  ]  

  return (
    <div>
        <form>
            <div>
                <Input type={'text'} name={'username'} placeholder={'Tên...'} label={'Tên người dùng'} />
            </div>
            <div>
                <Input type={'text'} name={'email'} placeholder={'Email...'} label={'Email'} />
            </div>
            <div>
                <Select name={'status'} label={'Trạng thái'} data={statusData}/>
            </div>
            <button type={'submit'}>Submit</button>
        </form>
    </div>
  )
}
