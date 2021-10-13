import { useAuth } from '../../hooks/useAuth';
import styles from './styles.module.scss';

export function LoginBox() {
  const { signInUrl } = useAuth()

  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Entre e compartilhe sua mensagem</strong>
      <a href={signInUrl} className={styles.signWithGithubButton}>
        Entrar com Github
      </a>
    </div>
  )
}