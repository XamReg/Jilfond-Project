import { useEffect, useState } from "react";
import styles from "../styles/layout/EmployeeSearch.module.scss";
import BlockPerson from "./BlockPerson";
import {useDebounce} from "./hooks/useDebounce";
import { useFetch } from "./hooks/useFetch";
import {useDispatch} from "react-redux";
import {addFilter} from "../store/filterSlice";

const EmployeeSearch = () => {
    const [val,setVal] = useState('');
    const [filtering,setFiltering] = useState([]);
    const dispatch = useDispatch();

    useDebounce(() => {
        start()
        },1000,[val]);

    const start = () => {
        refetch({
            params: {
                _limit: 20
            }
        })
    }

    const {
        data,
        error,
        isLoading,
        refetch
        } = useFetch('https://jsonplaceholder.typicode.com/users');

    const filteredItems = () => {
        let arInput = val.split(',')
        let res =  data.filter(
                item => 
                    arInput.toString().toLowerCase().includes(item.username.toString().toLowerCase()) ||
                    arInput.toString().toLowerCase().includes(item.id.toString().toLowerCase()))
        return(res)
    };

    useEffect(() => {
        setFiltering(() => filteredItems())
    },[data])

    useEffect(() => {
        addValueFilter()
    },[filtering])
    
    const addValueFilter = () => dispatch(addFilter(filtering));
    
    return(
        
        <div className={styles.search_block}>
            <div className={styles.search_block__serch}>
                <h1 className={styles.search_block__serch_text}>Поиск сотрудников</h1>
                <input placeholder="Введите Id или имя "
                    value={val}
                    onChange={(e) => setVal(e.target.value)}/>
                <div>
            </div>
            <div className={styles.search_block__result}>
                <h1 className={styles.search_block__result__textResult}>Результаты</h1>
                {val.length === 0 ?
                    <h2 className={styles.search_block__result__startSerch}>начните поиск </h2>
                        :
                    (isLoading ? 
                        <h2 className={styles.search_block__result__startSerch}>Загрузка...</h2>
                            :
                        
                        (error ?  
                            <h2 className={styles.search_block__result__startSerch}>Произошла ошибка</h2> 
                        :
                        (data && !isLoading && filtering[0]?.length !== 0 ?
                            <BlockPerson/>
                            :
                            <h2 className={styles.search_block__result__startSerch}>ничего не найдено</h2>)))
                    }
            </div>
        </div>
    </div>
    )
};

export default EmployeeSearch;