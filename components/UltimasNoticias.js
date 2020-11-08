import dynamic from 'next/dynamic'

import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

const Noticias = dynamic(() =>
  import('../components/Noticias').then((mod) => mod.Noticias)
)

export function UltimasNoticias() {

    let noticias = [];
        
    noticias = obterNoticias();

    return (
        <Row>
            <Col className="col-sm-4">            
            </Col>
            <Col className={"col-sm-8 col-12" + " " + styles["ultimas-noticias"]}> 
                <div className={styles["ultimas-noticias__titulo"]}>
                    Últimas do blog
                </div>
                {                   

                    noticias.map((item,index) => {
                        return  <div key={index}>                                
                                    <Noticias titulo={item.titulo} descricao={item.descricao} visualizada={item.visualizada}></Noticias>  
                                </div>
                    })
                }
                <div className={styles["ultimas-noticias__link-todos"]}>
                    Ver tudo
                </div>
            </Col>
        </Row>
        )
  }

  function obterNoticias() {      

    let noticias = [];

    for (var i = 0; i <= 3; i++) {
        let noticia = {
            titulo: '5 dicas para sua carreira profissional',
            descricao: 'Confira algumas dicas que podem ajudar a alavancar sua carreira como desenvolvedor front end',
            visualizada: i===0
        }
        noticias.push(noticia);            
    }

    return noticias;
}

