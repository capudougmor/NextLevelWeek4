import { createContext, ReactNode, useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import challenges from '../../challenges.json'
import { LevelUpModal } from '../components/LevelUpModal'

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengeContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  activeChallenge: Challenge;
  experienceToNextLevel: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallege: () => void;
  completeChallenge: () => void;
}

interface ChallengesProvaderProps {
  children: ReactNode
  level: number
  currentExperience: number
  challengesCompleted: number
}
export const ChallengesContext = createContext({} as ChallengeContextData)

export function ChallengesProvider({ children, ...rest }: ChallengesProvaderProps) {
  const [level, setLevel] = useState(rest.level ?? 1)
  const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0)
  const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0)
  const [activeChallenge, setActiveChalleng] = useState(null)
  const [activeChallenge, setActiveChalleng] = useState(null)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  useEffect(() => {
    Notification.requestPermission
  }, [])

  useEffect(() => {
    Cookies.set('level', level.toString())
    Cookies.set('currentExperience', currentExperience.toString())
    Cookies.set('challengesCompleted', challengesCompleted.toString())
  }, [level, currentExperience, challengesCompleted])

  function levelUp() {
    setLevel(level + 1)
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex]
    setActiveChalleng(challenge)

    new Audio('/notification.mp3').play()

    if (Notification.permission == 'granted') {
      new Notification('Novo desafio', {
        body: `Valendo ${challenge.amount}xp`
      })
    }
  }

  function resetChallege() {
    setActiveChalleng(null)
  }

  function completeChallenge() {
    if (!activeChallenge) {
      return
    }

    const { amount } = activeChallenge
    let finalExperience = currentExperience + amount

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel
      levelUp()
    }

    setCurrentExperience(finalExperience)
    setActiveChalleng(null)
    setChallengesCompleted(challengesCompleted + 1)
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,
        activeChallenge,
        levelUp,
        startNewChallenge,
        resetChallege,
        experienceToNextLevel,
        completeChallenge
      }}>
      {children}

      <LevelUpModal />
    </ChallengesContext.Provider>
  )
}