import React , {useState, useEffect} from 'react'
import Styles from './App.module.css'
import SendMassage from './components/sendMessage/sendMessage'
import MessageBox from './components/messagesBox/messagesBox'
import Loading from './components/loading/loading'


const App = () => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    setTimeout( () =>{
      setLoading(false)
    } , 4000)

  }, [])

  return (
    <>
      {
        loading ? <Loading />:null
      }
      <div className={Styles.container}>
        <MessageBox />
        <SendMassage/>
      </div>
    </>
  )

}

export default App;
