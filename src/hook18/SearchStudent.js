import React, {useState, useTransition} from 'react'
import Student from './Student'
import useMagicColor from '../hooks/useMagicColor';

export default function SearchStudent() {

    const [keyword, setKeyword] = useState('');

    const [isPending, startTransition] = useTransition();

    const handleSearch = (e) => {
        const keyword = e.target.value;
        
        //Delay quá trình setState cho keyword
        startTransition(() => {
            setKeyword(keyword);
        });
       
    }

    const color = useMagicColor({});

  return (
    <React.Fragment>
      <div style={{background: color}}>
      <input onChange={handleSearch} type={'search'} name={'keyword'} placeholder={'Từ khoá...'} />
        <hr/>
        <h2>Danh sách sinh viên</h2>
        {isPending?<p>Đang tải...</p>:<Student keyword={keyword}/>}
        
      </div>
       
    </React.Fragment>
  )
}
