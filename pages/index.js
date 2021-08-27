import Head from 'next/head'
import a from "../styles/full.module.scss"

export default function Home() {
  return (
    <div >
<Head>
  
  <title>Supo Pedia </title>
  <meta name='keywords' content='nextJS programming' />
  </Head>  
  <div className={a.main}>
  <h1>Welcome To Supo Pedia</h1> 
  <div className={a.btn}>

  <a className={a.button} href='/chapters'>→</a>


</div>
  </div>
   </div>
  )
}
