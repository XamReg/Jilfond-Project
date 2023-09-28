import styles from '../styles/layout/Wrapper_Sidebar.module.scss';
import EmployeeSearch from "./EmployeeSearch";
import ProfilePerson from "./ProfilePerson";
const WrapperSidebar = () => {

    return(
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.commonBlock}> 
                    <div className={styles.wrapper__header}> 
                        <h1 className={styles.wrapper__header__jilfond}>Жилфонд</h1> 
                        <h2 className={styles.wrapper__header__users}>Пользователь</h2>
                    </div>
                    <div className={styles.wrapper__block}>
                        <EmployeeSearch/>
                        <ProfilePerson/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WrapperSidebar;