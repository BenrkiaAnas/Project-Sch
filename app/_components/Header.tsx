import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        borderBottom: '1px solid var(--border)',
        backgroundColor: 'var(--bg)',
        backdropFilter: 'blur(8px)',
        transition: 'background-color 0.15s ease, border-color 0.15s ease',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link
          href="/"
          style={{
            fontSize: '1.25rem',
            fontWeight: 700,
            color: 'var(--fg)',
            textDecoration: 'none',
            letterSpacing: '-0.03em',
          }}
        >
          Shinobi
        </Link>
        <nav style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <Link href="/about" style={{ fontSize: '0.9375rem', color: 'var(--muted)', textDecoration: 'none' }}>
            About
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
