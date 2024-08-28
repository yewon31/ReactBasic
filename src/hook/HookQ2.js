import { useReducer } from "react";

const HookQ2 = () => {
    /*
    실습(할일목록 만들기)
    1. state는 {todo: '', list: []} 로 관리합니다.
    2. 할일 목록을 작성하고 클릭시, list에 인풋이 입력한 값을 추가하고 map을 이용해서 반복처리해주세요
    3. 등록 이후에는 ref를 활용해서 input태그에 포커싱해주세요.
    */

    const [state, action] = useReducer(todoReducer, {todo: '', list: []})
    const handleClick = (e) => {
        action(e.target);
    }
    return (
        <div>
            <h3>실습</h3>

            <input type="text" placeholder="할일 목록을 작성하세요" value={state.todo} onChange={(e) => action(e.target) } />
            <button type="button" onClick={ handleClick }>등록</button>
            <ul>
                {
                    state.list.map( (item, index) => <li key={index}>{index+1}. {item}</li>)
                }
            </ul>
        </div>
    )
}

//리듀스
const todoReducer = (state, action) => {
    if(action.type == "text" ) {
        state = {...state, ["todo"] : action.value}
    } else if(action.type == "button" ){
        state.list.push( state.todo );
        state = {...state, ["todo"] : ''}
    }
    return state;
}

export default HookQ2;