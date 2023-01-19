import {useState} from 'react'

export default function Form({liftTitle}){
    const [type, setType] = useState('');

    function handleChange(e) {
        setType(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        liftTitle(type);
        setType('');
    }

    return (
        <form className="gif-form" onSubmit={handleSubmit}>
            <input id="gifType" name="type" onChange={handleChange} placeholder="type of giphy" value={type}/> 
            <button>Submit</button>
        </form>
    )
}