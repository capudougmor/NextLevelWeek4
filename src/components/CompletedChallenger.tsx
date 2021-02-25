import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/CompletedChallenger.module.css'

export function CompletedChallenger() {
    const { challengesCompleted } = useContext(ChallengesContext)
  return (
    <div className={styles.completedChallengerContainer}>
      <span>Desafios completos</span>
  <span>{challengesCompleted}</span>
    </div>
  )
}