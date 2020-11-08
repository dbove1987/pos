import Head from 'next/head'
import dynamic from 'next/dynamic'
// import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const Blog = dynamic(() =>
  import('../components/blog').then((mod) => mod.Blog)
)

function Home() {
  return (
    <div className="container">
      <Head>
        <title>Blog - Exercício 02</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="App">
      <Blog></Blog>
    </div>
    
    </div>
     
     
  )
}

export default Home