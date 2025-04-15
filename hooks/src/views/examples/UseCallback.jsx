import React, {useState, useCallback} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import UseCallbackButtons from './useCallbackButtons';

const UseCallback = (props) => {

    const [count, setCount] = useState(0);

    //usando a mesma função para rendenizar o componente evitando a rendenização desnecessária do UserCallBackButtons
    const increment = useCallback(function (delta) {
        setCount(curr => curr + delta);
    }, [setCount]);

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memorizada!" 
            />

            <div className="center">
                <span className="text">{count}</span>

               <UseCallbackButtons inc={increment}/>
            </div>
        </div>
    );
}

export default UseCallback
