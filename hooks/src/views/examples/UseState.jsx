import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from "../../components/layout/SectionTitle"
const UseState = (props) => {

    /*
        Usa a desestruturação para criar a variavel que será alterada
        (count) quem irá alterada-la(setCount) e qual é o valor inicial(0).
    */
    const [count, setCount] = useState(0);
    const[name, setName] = useState("");
    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />

        <SectionTitle title="Exercício #01"/>
            <div className="center">
                <span className="text">{count}</span>
                <div>
                <button className="btn" 
                    onClick={()=>setCount(count -1)}>
                    -1</button>
                <button className="btn"  
                    onClick={()=>setCount(count +1)}>
                    +1</button>
                    <button 
                        className="btn"  
                        onClick={() => setCount(current => {
                            alert(current);
                            return current;
                        })}
                        >
                        Valor atual
                    </button>
                </div>
            </div>
        <SectionTitle title="Exercício #02"/>
            <input type="text" className="input" 
            value={name} placeholder='Type something...' onChange={e=>{
                    setName(e.target.value)     
                }}/> 

                <span className="text">Value typed: {name}</span>           
        </div>
    )
}

export default UseState
