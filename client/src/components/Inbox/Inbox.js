import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import clsx from 'clsx'
import {
    Card, Input, Sidebar, Text,
} from './components'
import { LoadingIndicator } from '../Form/components'
import { getUsers } from '../../actions'
import classes from '../../modules/inbox.module.css'
import src from '../../assets/plant.svg'

const Inbox = ({
    inbox, users, loading, getUsers,
}) => {
    const { title, messages } = inbox

    const Filler = () => (
        <div className={classes.fill}>
            <img className={classes.img} src={src} width={75} height={75} alt="filler" />
            <Text>This is your first conversation with your team</Text>
            <Text>Start the conversation!</Text>
        </div>
    )

    useEffect(() => {
        async function loadUsers() {
            await getUsers()
        }
        loadUsers()
    }, [])

    return (
        loading
            ? <LoadingIndicator />
            : (
                <div className={classes.root}>
                    <Sidebar />
                    <div className={clsx(classes.container, classes.inbox)}>
                        <div className={classes.chat}>
                            <Text>{title}</Text>
                            <div className={classes.messages}>
                                {messages.length === 0
                                    ? <Filler />
                                    : messages.map(({ id, message, timestamp }, i) => (
                                        <div key={i} className={classes.card}>
                                            <Card
                                                message={message}
                                                timestamp={timestamp}
                                                user={users.find(user => user._id === id)}
                                            />
                                        </div>
                                    ))}
                            </div>
                            <Input />
                        </div>
                    </div>
                </div>
            )
    )
}

const mapStateToProps = ({ conversations, conversation: id, users }) => ({
    inbox: conversations[id],
    loading: users.loading,
    users: users.data,
})

export default connect(mapStateToProps, { getUsers })(Inbox)
