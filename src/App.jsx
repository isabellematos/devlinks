import { useEffect, useState } from 'react'
import Profile from './components/Profile'
import ThemeToggle from './components/ThemeToggle'
import LinkButton from './components/LinkButton'
import SocialLinks from './components/SocialLinks'
import Footer from './components/Footer'
import { links } from './data/links'
import avatarImg from './assets/isabelle.jpg'
import './App.css'

function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('devlinks-theme') === 'light' ? 'light' : 'dark'
    } catch {
      return 'dark'
    }
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('devlinks-theme', theme)
    } catch {
      // A troca continua funcionando se o navegador bloquear o armazenamento.
    }
  }, [theme])

  const isLight = theme === 'light'

  return (
    <main className="devlinks" aria-label="Links do perfil">
      <Profile
        avatarSrc={avatarImg}
        avatarAlt="Foto de Isabelle M"
        username="Isabelle M"
        avatarSize={112}
        isLight={isLight}
      />
      <ThemeToggle
        isLight={isLight}
        onToggle={() => setTheme(current => current === 'dark' ? 'light' : 'dark')}
      />
      <nav aria-label="Links de Isabelle M">
        <ul className="link-list">
          {links.map(link => (
            <li key={link.id}>
              <LinkButton label={link.label} href={link.href} />
            </li>
          ))}
        </ul>
      </nav>
      <SocialLinks isLight={isLight} />
      <Footer />
    </main>
  )
}

export default App
