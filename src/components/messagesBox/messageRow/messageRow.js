import React from 'react'
import Styles from './messageRow.module.css'


const MessageRow = ({sender, message}) => {

    let containerStyles = [Styles.container , sender === 'bot' ? Styles.bot:Styles.human]

    return (
        <div className={containerStyles.join(' ')}>
            <p className={Styles.message}>{message}</p>
        </div>
    )
}

export default MessageRow
