import React, {useEffect, useRef} from 'react'
import Styles from "./messagesBox.module.css"
import MessagesRow from './messageRow/messageRow'
import {useSelector} from 'react-redux'

const MessagesBox = () => {

    const box = useRef(null)

    useEffect(() => {
        box.current.scrollTop += 1000
    })

    let messages = useSelector(state => state.messages.messages)

    return (
        <div ref={box} className={Styles.container}>
            <div className={Styles.messageBox}>
                {
                    messages.map( (message , i) =>{
                        return(
                            <MessagesRow sender={message.sender} message={message.message} key={i} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MessagesBox
