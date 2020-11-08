import dynamic from 'next/dynamic'

import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'


const BannerPrincipal = dynamic(() =>
  import('../components/BannerPrincipal').then((mod) => mod.BannerPrincipal)
)

 const UltimasNoticias = dynamic(() =>
   import('../components/UltimasNoticias').then((mod) => mod.UltimasNoticias)
 )

export function Blog() {
    return (

          <Container>
              <div>
                <BannerPrincipal></BannerPrincipal>
              </div>
              <div className={styles["blog__conteudo"]}>
                <UltimasNoticias></UltimasNoticias>
              </div>
          </Container>
        )
  }

  