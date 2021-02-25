import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/ChallengeBox.module.css'


export function ChallengeBox() {
  const {activeChallenge} = useContext(ChallengesContext)

  return (
    <div className={styles.container}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
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