
import s from "../styles/chapters.module.scss"
import Head from 'next/head'


const chapters = () => {

    return (
      <>
<Head>
  
  <title>Chapters</title>
  </Head>
<div className={s.container}>
        <div className={s.card}>
            <img className={s.img} src="https://png.pngtree.com/thumb_back/fh260/back_pic/05/07/67/8859771be60cd3d.jpg" alt="image" />
            <div className={s.body}>
                <h3 className={s.title}>Robotics</h3>
                <p className={s.text} >....detailing Here.....</p>
                <div className={s.btn}>
                <a className={s.button} href='/robotics'>Next</a>      </div>
            </div>
        </div>
    


        
       





  
        <div className={s.card}>
            <img className={s.img} src="https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2019/07/UAVs-help2.jpg" alt="image" />
            <div className={s.body}>
                <h3 className={s.title}>Drones</h3>
                <p className={s.text} >....detailing Here....</p>
                <div className={s.btn}>
                <a className={s.button} href='/drones'>Next</a>      </div>
            </div>
        </div>
    





       
        <div className={s.card}>
            <img className={s.img} src="https://i.pinimg.com/originals/f5/bf/75/f5bf7571226123f16f2344804dfed527.jpg" alt="image" />
            <div className={s.body}>
                <h1 className={s.title}>Ships & Boats</h1>
                <p className={s.text} >....detailing Here.....</p>
                <div className={s.btn}>
                <a className={s.button} href='/ships'>Next</a>      </div>
            </div>
    
        </div>





        </div>   
      
</>
    )
}

export default chapters
