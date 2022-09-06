import React, {useState, useCallback} from 'react'
import Map from './Map'
import Form from './Form';


export default function Contact() {

  const iframe = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32500833.71559819!2d110.05808625175595!3d-6.078450257429531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abea3262f5ef%3A0x368a4e7687e647d5!2zQ8O0bmcgdHkgY-G7lSBwaOG6p24gY8O0bmcgbmdo4buHIHbDoCBnacOhbyBk4bulYyBUZWNoMg!5e0!3m2!1sen!2s!4v1662438015971!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;  

  const [name, setName] = useState('');

  const changeName = useCallback((e) => {
    setName(e.target.value);
  }, []);

  return (
        <>
           <Map iframe={iframe}/>
           <Form onChangeName={changeName}/>
        </>
  )
}
