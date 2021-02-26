
import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/LevelUpModal.module.css'

export function LevelUpModal() {
  const { level, closeModalUp } = useContext(ChallengesContext)

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>
        <strong>Parabens</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={closeModalUp} >
          <img src="/icons/close.svg" alt="Fechar modal"/>
        </button>
      </div>
    </div>

  )
}