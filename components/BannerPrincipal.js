import dynamic from 'next/dynamic'

import styles from '../styles/Home.module.css'
import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'



const MenuBlog = dynamic(() =>
  import('../components/MenuBlog').then((mod) => mod.MenuBlog)
)

 const TituloBlog = dynamic(() =>
   import('../components/TituloBlog').then((mod) => mod.TituloBlog)
)

export function BannerPrincipal() {
    return (   

        <Row className={styles["banner-principal"]}>
            <Col className="col-sm-4" >                 
                <div className={styles['banner-principal__logo']}>
                    <img></img>
                </div>
            </Col>
            <Col className={styles['banner-principal__titulo-blog']}>
                <Row>
                    <Col className="col-sm-12">                        
                        <MenuBlog></MenuBlog>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-sm-12">
                        <TituloBlog></TituloBlog>                    
                    </Col>
                </Row>              
            </Col>
        </Row>    
        )
  }