
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export function TituloBlog() {
    return (    
        <div className={styles['titulo-blog']}>       
            <div className={styles["titulo-blog--nome"]}>
                Seu nome
            </div> 
            <div className={styles["titulo_blog--descricao"]}>            
                Coloque aqui sua biografia de forma resumida.Coloque aqui sua biografia de forma resumida. Coloque aqui sua biografia de forma resumida.Coloque aqui sua biografia de forma resumida. Coloque aqui sua biografia de forma resumida.Coloque aqui sua biografia de forma resumida.
            </div>                          
        </div>        
    )    
}