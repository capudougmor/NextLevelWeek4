import { useContext } from 'react'

import styles from '../styles/components/ExperienceBar.module.css'
import { ChallengesContext } from '../contexts/ChallengeContext'

export default function experienceBar() {
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext)

    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel

    return (
        <header className={styles.experienceBar}>
            <span>0 px</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }} ></div>

                <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }} >
                    {currentExperience} xp
                </span>
            </div>
            <span>{experienceToNextLevel} px</span>
        </header>
    )
}