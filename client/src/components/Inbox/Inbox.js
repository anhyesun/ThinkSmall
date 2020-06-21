import React, { useState } from 'react'
import { connect } from 'react-redux'
import clsx from 'clsx'
import {
    Card, Input, Sidebar, Text,
} from './components'
import src from '../../assets/yoga.png'
import classes from '../../modules/inbox.module.css'

const Inbox = ({ inbox }) => {
    const [selected, setSelected] = useState()
    const { title, messages } = inbox

    const Filler = () => (
        <div className={classes.fill}>
            <img className={classes.img} src={src} width={150} height={150} alt="filler" />
            <Text>This is your first conversation with your team</Text>
            <Text>Start the conversation!</Text>
        </div>
    )

    return (
        <div className={classes.root}>
            <Sidebar />
            <div className={clsx(classes.container, classes.inbox)}>
                <div className={classes.chat}>
                    <Text>{title}</Text>
                    <div className={classes.messages}>
                        {messages.length === 0
                            ? <Filler />
                            : messages.map(({ id = 0, message, timestamp }, i) => (
                                <div
                                    key={i}
                                    className={classes.card}
                                    onClick={() => setSelected(i)}
                                >
                                    <Card id={id} message={message} timestamp={timestamp} />
                                </div>
                            ))}
                    </div>
                    <Input />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ conversations, conversation: id }) => ({ inbox: conversations[id] })

export default connect(mapStateToProps)(Inbox)
