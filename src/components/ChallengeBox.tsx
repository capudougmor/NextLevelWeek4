import styles from '../styles/components/ChallengeBox.module.css'



export function ChallengeBox() {
  const hasActiveChallenge = true

  return (
    <div className={styles.container}>
      {hasActiveChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe 400 xp</header>

          <main>
            <img src="icons/body.svg" />
            <strong>Novo desafio</strong>
            <p>Levante e faça uma caminhada</p>
          </main>

          <footer>
            <button
              type='button'
              className={styles.challengeFaileButton}
            >
              Falhei
            </button>
            <button
              type='button'
              className={styles.challengeSuceededButton}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
          <div className={styles.challengeNotActive}>
            <strong>Inicie um ciclo para receber desafios a serem completados</strong>
            <p>
              <img src="icons/level-up.svg" alt="Level-up" />
                Avance de level completando desafios.
              </p>
          </div>
        )}
    </div>
  )
}