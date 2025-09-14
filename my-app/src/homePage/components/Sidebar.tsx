import React from "react";
import styles from './Sidebar.module.css';
const Sidebar:React.FC = () => {
    return (
        <div className={styles.container}>
            <img src="https://github.com/shangjincheng/myPictureStore/blob/main/367520_20240504181234_1.png?raw=true"/>
            <h1>湄潭硅谷</h1>
        </div>
    )
}
export default Sidebar;