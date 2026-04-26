import Link from 'next/link'

export default function Home() {
  return (
    <div
      style={{
        minHeight: 'calc(100vh - 64px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1.5rem',
        textAlign: 'center',
      }}
    >
      <h1
        style={{
          fontSize: 'clamp(5rem, 14vw, 9rem)',
          fontWeight: 800,
          letterSpacing: '-0.045em',
          lineHeight: 1,
          marginBottom: '1.5rem',
          color: 'var(--fg)',
        }}
      >
        Shinobi
      </h1>

      <p
        style={{
          fontSize: '1.2rem',
          color: 'var(--muted)',
          maxWidth: '480px',
          lineHeight: 1.65,
          marginBottom: '3rem',
        }}
      >
        Welcome to Shinobi — a modern platform for developers. Explore our blog and discover our UI component library.
      </p>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link
          href="/blog"
          style={{
            padding: '0.7rem 2rem',
            borderRadius: '0.5rem',
            background: 'var(--accent)',
            color: '#ffffff',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '1rem',
          }}
        >
          Visit Blog
        </Link>
        <Link
          href="/components"
          style={{
            padding: '0.7rem 2rem',
            borderRadius: '0.5rem',
            background: 'transparent',
            color: 'var(--fg)',
            border: '1px solid var(--border)',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '1rem',
          }}
        >
          View Components
        </Link>
      </div>
    </div>
  )
}
