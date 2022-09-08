import React, {useEffect} from 'react'
import studentList from './student_list.json';

export default function Student({keyword}) {

  return (
        <>
            {
                studentList.students.map((student, index) => {
                    keyword = keyword.toLowerCase();

                    if (keyword!==''){
                        const position = student.toLowerCase().indexOf(keyword);
                        if (position!==-1){
                            const before = student.slice(0, position);
                            const middle = <span style={{background: 'yellow'}}>{student.slice(position, position+keyword.length)}</span>;
                            const after = student.slice(position+keyword.length);
                           
                            return <p key={index}>{before}{middle}{after}</p>
                        }
                    }

                    return <p key={index}>{student}</p>
                    
                })
            }
        </>
  )
}
