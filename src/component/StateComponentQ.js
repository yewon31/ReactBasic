import { useState } from "react";

//실습
const StateComponentQ = () => {
    
    const [data, setData] = useState(0);

    let increase = () => {
        //setData(data + 1); 
        //setData( 함수 ); // 함수의 첫번째 매개변수에 이전값을 넣어줌
        setData( prev => prev + 1 ); //prev는 state의 이전값을 받을 수 있음.
    }
    
    return (
        <div>
            <hr/>
            <h3>실습</h3>
            <h3>카운트:{data}</h3>

            <button onClick={increase}>증가</button>
            <button onClick={ () => setData(data - 1) }>감소</button>
            <button onClick={ () => setData(0) }>초기화</button>
        </div>        
    )
}

export default StateComponentQ;