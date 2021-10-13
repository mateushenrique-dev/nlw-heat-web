import styles from './styles.module.scss';

export function MessageList() {
  return (
    <div className={styles.messageListWrapper}>
      <ul className={styles.messageList}>
        <li>
          <p className={styles.messageContent}>
            Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamoo pra cima 🔥🔥
          </p>
          <div className={styles.messageUser}>
            <img src="https://github.com/diego3g.png" alt="Diego Fernandes" />
            <span>Diego Fernandes</span>
          </div>
        </li>
        <li>
          <p className={styles.messageContent}>
            Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamoo pra cima 🔥🔥
          </p>
          <div className={styles.messageUser}>
            <img src="https://github.com/diego3g.png" alt="Diego Fernandes" />
            <span>Diego Fernandes</span>
          </div>
        </li>
        <li>
          <p className={styles.messageContent}>
            Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamoo pra cima 🔥🔥
          </p>
          <div className={styles.messageUser}>
            <img src="https://github.com/diego3g.png" alt="Diego Fernandes" />
            <span>Diego Fernandes</span>
          </div>
        </li>
      </ul>
    </div>
  )
}