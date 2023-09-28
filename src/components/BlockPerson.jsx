import styles from "../styles/layout/BlockPerson.module.scss";
import photo from './assets/img/imgEmptuPhoto.jpg'
import {useSelector} from "react-redux";
import { useEffect, useState } from "react";
import {useDispatch} from "react-redux";
import {addValue} from "../store/filterSlice";

const BlockPerson = () => {
    const filterValue = useSelector((state) => state.valueFilter.valueFilter)
    const [value, setValue] = useState([]);
    const [active,setActive] = useState('');
    const dispatch = useDispatch();

    const pushValue = (element) => {
        setActive(() => element.id)
        dispatch(addValue(element))
    }


    const MapPerson = () => {

        useEffect(() => {
            setValue(() => filterValue)
        }, [filterValue])

        return(
            <>
                {value && value.map((element) => (
                    <div 
                        key={element.id}
                        className={
                            element.id === active ? 
                            styles.blockPeson_switch
                            :
                            styles.blockPeson}

                        onClick={() => pushValue(element) }>
                        <div className={styles.blockPeson_img}>
                             <img src={photo} />
                         </div>
                        <div className={styles.blockPeson_person} >
                            <h1 className={styles.blockPeson_person_name}>{element.username}</h1>
                             <h2 className={styles.blockPeson_person_email}>{element.email}</h2>
                        </div>
                    </div>
                ))}
            </>
        )
    }
    return(
        <MapPerson/>
    )
}

export default BlockPerson;