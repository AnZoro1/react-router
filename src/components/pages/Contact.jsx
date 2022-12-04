import React from 'react'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <YMaps>
      <div className={styles.div}>
        <Map className={styles.map}
          defaultState={{
            center: [43.324675, 45.692376],
            zoom: 6,
          }}
        >
          <Placemark geometry={[43.324675, 45.692376]} />
        </Map>
      </div>
    </YMaps>
  )
}

export default Contact
