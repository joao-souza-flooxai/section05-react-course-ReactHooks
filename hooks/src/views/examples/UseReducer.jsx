import React, {useReducer} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { initialState, reducer } from '../../store';

//Alterador de estado da aplicação.


const UseReducer = (props) => {

    const [state, dispacth] = useReducer(reducer, initialState);

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">

                {state.user ? 
                    <span className="text">{state.user.name}</span>
                    :
                    <span className="text">No user</span>
                }

                <span className="text">{state.number}</span>
                <div>

                    <button className="btn"
                        onClick={()=>dispacth({type:'login', payload:'Maria'})}>
                        Login</button>

                    <button className="btn" 
                        onClick={()=>dispacth({type:'numberAdd2'})}>
                        +2</button>

                    <button className="btn" 
                        onClick={()=>dispacth({type:'numberMulti7'})}>
                        *7</button>
                    
                    <button className="btn" 
                        onClick={()=>dispacth({type:'numberDiv25'})}>
                        /25</button>

                    <button className="btn" 
                        onClick={()=>dispacth({type:'numberInt'})}>
                        Int</button>


                </div>
            </div>

        </div>
    )
}

export default UseReducer
