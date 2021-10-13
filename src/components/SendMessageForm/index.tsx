import { FormEvent, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

import styles from './styles.module.scss';

export function SendMessageForm() {
  const [message, setMessage] = useState('')
  const [isSendingMessage, setIsSendingMessage] = useState(false)

  const { user, signOut } = useAuth()

  async function handleSendMessage(event: FormEvent) {
    event.preventDefault()

    setIsSendingMessage(true)

    try {

    } finally {
      setIsSendingMessage(false)
    }
  }

  return (
    <div className={styles.sendMessageFormWrapper}>
      <button onClick={signOut} className={styles.signOutButton}>
        Sair
      </button>

      <header className={styles.signedUserInformation}>
        <img src={user?.avatar_url} alt={user?.name} />
        <span className={styles.signedUserGithub}>{user?.login}</span>
      </header>

      <form 
        onSubmit={handleSendMessage} 
        className={styles.sendMessageForm}
      >
        <label htmlFor="message">Mensagem</label>
        <textarea
          name="message"
          id="message"
          placeholder="Qual sua expectativa para o evento?"
          onChange={e => setMessage(e.target.value)}
          value={message}
        />

        <button 
          disabled={isSendingMessage} 
          type="submit"
        >
          Enviar mensagem
        </button>
      </form>
    </div>
  )
}