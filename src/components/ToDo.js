import React, {useState, useEffect} from 'react'


export default function ToDo() {

    const [dolists, setDoLists] = useState([]);

    const [status, setStatus] = useState(0);

    const [fullname, setName] = useState('');

    const [email, setEmail] = useState('');

    //let isMount = false;

    const test = 1;

    //componentDidMount()
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(dolists => {
            setTimeout(() => {
                setDoLists(dolists);
            }, 3000);
        });

        // console.log('Lần 1');

        // isMount = true;

        // setName('Hoàng An');

        // setEmail('hoangan.web@gmail.com');

        // console.log('Running...');
        
    }, []);

    //componentWillUnmount
    //  useEffect(() => {
        
    //     return () => {
    //         console.log('componentWillUnmount');
    //         isMount = false;
    //     }

    // });

    //componentDidUpdate()
    // useEffect(() => {

    //     //setStatus(Math.random());

    //     console.log('Lần 2 trở đi');
    // });
    
  return (
        <>
            <h1>useEffect</h1>
            <h2>{fullname}</h2>

            {
                dolists.map(item => {
                    return <h2 key={item.id}>{item.title}</h2>
                })
            }
        </>
  )
}
