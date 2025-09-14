import React from 'react';
import styles from './HomePage.module.css';
import Sidebar from './components/Sidebar';
const HomePage:React.FC = () => {
    return (
        <div className={styles.container}>
            <Sidebar/>
            <div className={styles.leftContent}>
                <h1>欢迎访问湄潭硅谷</h1>
                <div>这里将会有最全的八股文，各种方向应有尽有</div>
                <div>这里也会有我们独立自主的开源项目（以后），希望能够互相借鉴学习</div>
                <h1>
                    团队名单
                </h1>
            </div>
        </div>
    )
}

export default HomePage;