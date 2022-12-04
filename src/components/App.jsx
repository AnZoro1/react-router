import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Features from './pages/Features'
import Contact from './pages/Contact'
import styles from './App.module.css'
import { useState } from 'react'

function App() {
  const [stateLine, setStateLine] = useState(false)
  const [stateLine2, setStateLine2] = useState(false)
  const [stateLine3, setStateLine3] = useState(false)
  const handleChangeColorLineHome = () => {
    setStateLine(true)
  }
  const handleChangeColorLineHome2 = () => {
    // сделал три хука состояния и по дву функции для каждого состояния
    setStateLine(false) // которые меняют false на тру и наоборот
  }
  const handleChangeColorLineFeat = () => {
    setStateLine2(true)
  }
  const handleChangeColorLineFeat2 = () => {
    setStateLine2(false)
  }
  const handleChangeColorLineCont = () => {
    setStateLine3(true)
  }
  const handleChangeColorLineCont2 = () => {
    setStateLine3(false)
  }

  return (
    <>
      <header className={styles.header}>
        <p>Сover</p>
        <Link
          className={!stateLine ? styles.home : styles.home2}
          onMouseOver={handleChangeColorLineHome}
          onMouseOut={handleChangeColorLineHome2}
          to="/"
        >
          Home
        </Link>
        <Link
          className={!stateLine2 ? styles.feat : styles.feat2} // в этом блоке когда хук состояния меняется происходит
          onMouseOver={handleChangeColorLineFeat} // условный рендеринг css классов
          onMouseOut={handleChangeColorLineFeat2}
          to="/features" // присваиваю названия роутам url, благодаря link сайт не перезагруж после перехода по ссылке
        >
          Features
        </Link>
        <Link
          className={!stateLine3 ? styles.cont : styles.cont2}
          onMouseOver={handleChangeColorLineCont}
          onMouseOut={handleChangeColorLineCont2}
          to="/contacts"
        >
          Contact
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />{' '}
        {/* а тут установлено какие компоненты  открываюся при переходе по ссылке в pathe*/}
        <Route path="/contacts" element={<Contact />} />
        <Route path="/bootstrap" element={<Home />} />
      </Routes>
      <footer>
        <div className={styles.footer}>
          {' '}
          Cover template for{' '}
          <Link className={styles.bootstrap} to="/Bootstrap">
            Bootstrap
          </Link>
          , by <Link className={styles.mdo}> @mdo.</Link>
        </div>
      </footer>
    </>
  )
}

export default App
