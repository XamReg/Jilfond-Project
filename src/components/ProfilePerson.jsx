import { useEffect, useState } from "react";
import styles from "../styles/layout/ProfilePerson.module.scss";
import photo from './assets/img/imgEmptuPhotoFullSize.png';
import {useSelector} from "react-redux";

const ProfilePerson = () => {

    const objValueStore = useSelector((state) => state.valueFilter.valuePerson);
    const[objVal,setObjVal] = useState({});

    useEffect(() => {
        setObjVal(() => objValueStore)
    },[objValueStore]);


    return(
        (Object.keys(objVal).length !== 0) ?
          <div className={styles.profile}>
            <div className={styles.profile__blockImg}>
                <img src={photo} width="424" height="286" />
            </div>
            <div className={styles.profile__blockText}>
                <h1 className={styles.profile__blockText_name}>{objVal?.name}</h1>
                <div className={styles.profile__blockText_blockData}>
                    <h2 className={styles.profile__blockText_blockData_firstP}>email:</h2>
                    <h3 className={styles.profile__blockText_blockData_secondP}>{objVal?.email}</h3>
                </div>
                <div className={styles.profile__blockText_blockData}>
                    <h2 className={styles.profile__blockText_blockData_firstP}>phone:</h2>
                    <h3 className={styles.profile__blockText_blockData_secondP}>{objVal?.phone}</h3>
                </div>
                <div className={styles.profile__blockText_about}>
                    <h1 className={styles.profile__blockText_about_aboutText}>О себе:</h1>
                    <span className={styles.profile__blockText_about_text}>{objVal?.company?.catchPhrase}</span>
                </div>
            </div>
        </div> 
        :
        <div className={styles.profile}>
            <h1 className={styles.profile_emptyP}>Выберите сотрудника, чтобы посмотреть его профиль</h1>
        </div>
    )
}

export default ProfilePerson;