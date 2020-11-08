import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';


export function MenuBlog() {
   
    return (
        <div>
            <ul className={styles.menu}>
                <li className={styles.menu__item + " " + styles["menu__item--ativo"]}>Blog</li>
                <li className={styles.menu__item}>Sobre</li>
                <li className={styles.menu__item}>Descrição</li>
            </ul>
        </div>
    )
}