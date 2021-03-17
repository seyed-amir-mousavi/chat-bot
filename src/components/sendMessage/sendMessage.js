import React from 'react'
import {useState , useRef} from 'react'
import compareStrings from 'string-similarity'
import Styles from './sendMessage.module.css'
import Button from '../../assets/images/send.svg'
import {useDispatch, useSelector} from 'react-redux'

const SendMessage = () => {

    const dispath = useDispatch()
    const datas = useSelector(state => state.messages.data)
    const lastType = useSelector(state => state.messages.lastType)
    const [showSendButton, setshowSendButton] = useState(false)
    const input = useRef(null)

    const Send = () =>{

        dispath({type : 'addMessage' , val : { sender : 'human' , message : input.current.value}})


        let type = {
            score : 0,
            type : null
        }

        let selectedData = null


        for( let data of datas ){

            for( let model of data.models ){
                let score = compareStrings.compareTwoStrings( input.current.value, model)
                if( score > 0.4 && score > type.score){
                    type = {
                        score : score,
                        type : data.type 
                    }
                    selectedData = data
                }
            }
        }

        let answer

        if( type.score > 0.4 ){

            let randomIndex = Math.floor( Math.random() * selectedData.responses[selectedData.level].length )
            answer = selectedData.responses[selectedData.level][randomIndex]

            if( selectedData.level < selectedData.responses.length - 1 && lastType === type.type )
                dispath({type : 'increaseLevel' , val : { type : type.type }})
            else if( selectedData.level === selectedData.responses.length - 1 && selectedData.responses.length > 2 )
                dispath({type : 'angery'})
        }
        else
            answer = "نگرفتم چی می گی"

        dispath({type : 'addMessage' , val : { sender : 'bot' , message : answer}, lastType : type.type})

        input.current.value = ""
        setshowSendButton(false)

    }

    const SendWhitEnter = e =>{
        if(e.key === 'Enter'){
            Send()
        }
    }

    const changeSendButtonDisplay = e =>{

        if(e.target.value !== "")
            setshowSendButton(true)
        else
            setshowSendButton(false)

    }

    return (
        <div className={Styles.container}>
            <button 
                className={showSendButton ? Styles.button:Styles.hideButton} 
                onClick={Send}
            >
                <img src={Button} alt=""/>
            </button>   
            <input
                ref={input} 
                className={Styles.input} 
                placeholder="  پیام خود را بنویسید ..." 
                onChange={changeSendButtonDisplay}
                onKeyPress={SendWhitEnter}
            />
        </div>
    )
}

export default SendMessage
