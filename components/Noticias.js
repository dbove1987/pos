import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export function Noticias(props) {       
    return (
        <div className={styles.noticias}>
            <div className={styles.noticias__titulo + " " + (props.visualizada? styles.noticias__titulo__visualizada : "") }>
                {props.titulo }  
            </div>
            <div className={styles.noticias__descricao}>
                {props.descricao}
            </div>
        </div>
    )       
}