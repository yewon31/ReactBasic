import { useState } from "react";

const IterationComponentQ2 = () => {
    //1 - select는 컴포넌트반복으로 option태그를 생성합니다.
    const select = ['HTML', 'Javascript', 'CSS', 'Java', 'Oracle', 'Mysql'];
    const optionList = ['all', ...select].map((item, index) => <option key={index}>{item}</option>);
    //2 - 아래 데이터는 state로 관리하고 화면에 li태그로 반복해주세요 .
    const data = [
        {id: 1, type: 'Java', teacher: '이순신'},
        {id: 2, type: 'Java', teacher: '홍길자'},
        {id: 3, type: 'Javascript', teacher: '홍길동'},
        {id: 4, type: 'Oracle', teacher: '이순신'},
        {id: 5, type: 'Mysql', teacher: '이순신'},
        {id: 6, type: 'CSS', teacher: '박찬호'},
        {id: 7, type: 'HTML', teacher: 'coding404'}
    ];
    const [list, setList] = useState(data)
    const liList = list.map( item => <li key={item.id}>{item.type} : <span>{item.teacher}</span></li>)

    //3 - 셀렉트박스가 체인지되면 이벤트객체를 활용해서 선택된 값만 필터링해주세요.
    const handleChange = (e) => { // select
        let option = e.target.value;
        if (option === 'all') { // 'all' 옵션 추가하여 모든 항목을 표시
            setList(data);
        } else {
            let newList = data.filter(item => item.type === option);
            setList(newList);
        }
    }
	
	//4- input값은 state로 관리합니다.
    const [searchKeyword, setSearchKeyword] = useState('');
    const handleSearchChange = (e) => {
        setSearchKeyword(e.target.value);
    }
	
	//5 - 검색기능 - 원본 data에서 필터링으로 검색값을 찾아 state를 업데이트 합니다.
	const searchClick = () => {
		let newList = data.filter( item => item.type.toUpperCase().includes(searchKeyword.toUpperCase()) || item.teacher.includes(searchKeyword) )
		setList(newList);
    }
    // Enter 키가 눌렸을 때 검색 기능 실행
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            searchClick();
        }
    };

    return (
        <div>
			<hr/>
            <h3>실습</h3>
            Search: <input type="text" onChange={handleSearchChange} value={searchKeyword} onKeyDown={handleKeyDown} />
            <button onClick={searchClick}>검색</button>

            <br/>
            
			과목찾기:
            <select onChange={handleChange}>
                {optionList}
            </select>
            <ul>
                {liList}
            </ul>
        </div>
    )
}

export default IterationComponentQ2;