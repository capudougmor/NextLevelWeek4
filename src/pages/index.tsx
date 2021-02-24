
import Head from 'next/head';
import { CompletedChallenger } from '../components/CompletedChallenger';
import { Countdown } from '../components/Countdown';
import ExperienceBar from "../components/ExperienceBar";
import { Profile } from '../components/Profile';

import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | move.it</title>
      </Head>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenger />
          <Countdown />
        </div>
        <div>

        </div>
      </section>
    </div>
  )
}
