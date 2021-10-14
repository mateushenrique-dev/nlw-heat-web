import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import styles from './styles.module.scss';

type Message = {
  id: string;
  text: string;
  user: {
    name: string;
    avatar: string;
  }
}

export function MessageList() {
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    api.get<Message[]>('messages').then(response => {
      setMessages(response.data)
    })
  }, [])

  return (
    <div className={styles.messageListWrapper}>
      <ul className={styles.messageList}>
        {messages.map(message => {
          return (
            <li key={message.id}>
              <p className={styles.messageContent}>{message.text}</p>
              <div className={styles.messageUser}>
                <img src={message.user.avatar} alt={message.user.name} />
                <span>{message.user.name}</span>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}