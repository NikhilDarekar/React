import styles from './Navigation.module.css'

const Navigation = () => {


    return(
        <nav className={`${styles.navigation} container`}>
            <div className="logo">
                <img src="./images/phone.png" alt="" width="40" height="40" />
            </div>
            <ul>
                <li href="#">Home</li>
                <li href="#">About</li>
                <li href="#">Contact</li>
            </ul>
        </nav>
    )
}

export default Navigation;