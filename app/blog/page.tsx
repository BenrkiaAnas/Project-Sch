const posts = [
  {
    id: 1,
    title: 'Getting Started with Next.js 16',
    excerpt:
      'Explore the latest features and breaking changes in Next.js 16, including new file conventions, improved performance, and enhanced developer experience.',
    date: 'Apr 20, 2026',
    category: 'Tutorial',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Mastering Tailwind CSS v4',
    excerpt:
      'Deep dive into Tailwind CSS version 4 — the new CSS-first configuration, custom variants, and performance improvements that change how we style applications.',
    date: 'Apr 15, 2026',
    category: 'Design',
    readTime: '8 min read',
  },
  {
    id: 3,
    title: 'Server Components vs Client Components',
    excerpt:
      'Understanding when to use server and client components in your Next.js application for optimal performance and user experience.',
    date: 'Apr 10, 2026',
    category: 'Development',
    readTime: '6 min read',
  },
  {
    id: 4,
    title: 'Building Accessible UI Components',
    excerpt:
      'A comprehensive guide to building accessible React components that work for everyone, following WCAG guidelines and best practices.',
    date: 'Apr 5, 2026',
    category: 'Accessibility',
    readTime: '10 min read',
  },
  {
    id: 5,
    title: 'Performance Optimization Techniques',
    excerpt:
      'Learn advanced techniques for optimizing your Next.js application — from code splitting to image optimization and caching strategies.',
    date: 'Mar 28, 2026',
    category: 'Performance',
    readTime: '7 min read',
  },
]

const categories = ['All', 'Tutorial', 'Design', 'Development', 'Accessibility', 'Performance']

export default function BlogPage() {
  return (
    <div>
      {/* Hero */}
      <section
        style={{
          background: 'var(--hero-bg)',
          borderBottom: '1px solid var(--border)',
          padding: '5rem 1.5rem',
          textAlign: 'center',
          transition: 'background-color 0.15s ease',
        }}
      >
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              marginBottom: '1rem',
              color: 'var(--fg)',
            }}
          >
            Blog
          </h1>
          <p
            style={{
              fontSize: '1.125rem',
              color: 'var(--muted)',
              lineHeight: 1.65,
            }}
          >
            Thoughts, tutorials, and insights about modern web development.
          </p>
        </div>
      </section>

      {/* Content */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '3rem 1.5rem',
          display: 'grid',
          gridTemplateColumns: '1fr 300px',
          gap: '3rem',
          alignItems: 'start',
        }}
      >
        {/* Posts */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {posts.map((post) => (
            <article
              key={post.id}
              style={{
                background: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: '0.75rem',
                padding: '1.75rem',
                transition: 'background-color 0.15s ease, border-color 0.15s ease',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  marginBottom: '0.875rem',
                  flexWrap: 'wrap',
                }}
              >
                <span
                  style={{
                    background: 'var(--badge-bg)',
                    color: 'var(--badge-fg)',
                    padding: '0.2rem 0.65rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                  }}
                >
                  {post.category}
                </span>
                <span style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>{post.date}</span>
                <span style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>·</span>
                <span style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>{post.readTime}</span>
              </div>
              <h2
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  marginBottom: '0.625rem',
                  color: 'var(--fg)',
                  lineHeight: 1.35,
                }}
              >
                {post.title}
              </h2>
              <p
                style={{
                  color: 'var(--muted)',
                  lineHeight: 1.65,
                  marginBottom: '1.25rem',
                  fontSize: '0.9375rem',
                }}
              >
                {post.excerpt}
              </p>
              <a
                href="#"
                style={{
                  color: 'var(--accent)',
                  fontWeight: 500,
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                }}
              >
                Read more →
              </a>
            </article>
          ))}
        </div>

        {/* Sidebar */}
        <aside style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div
            style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: '0.75rem',
              padding: '1.5rem',
              transition: 'background-color 0.15s ease, border-color 0.15s ease',
            }}
          >
            <h3
              style={{
                fontWeight: 700,
                fontSize: '1rem',
                marginBottom: '0.75rem',
                color: 'var(--fg)',
              }}
            >
              About the Blog
            </h3>
            <p
              style={{
                color: 'var(--muted)',
                lineHeight: 1.65,
                fontSize: '0.875rem',
              }}
            >
              Shinobi Blog covers modern web development — Next.js, React, TypeScript, and design systems. New posts every week.
            </p>
          </div>

          <div
            style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: '0.75rem',
              padding: '1.5rem',
              transition: 'background-color 0.15s ease, border-color 0.15s ease',
            }}
          >
            <h3
              style={{
                fontWeight: 700,
                fontSize: '1rem',
                marginBottom: '1rem',
                color: 'var(--fg)',
              }}
            >
              Categories
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {categories.map((cat, i) => (
                <li key={cat}>
                  <a
                    href="#"
                    style={{
                      color: 'var(--muted)',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '0.5rem 0',
                      borderBottom: i < categories.length - 1 ? '1px solid var(--border)' : 'none',
                    }}
                  >
                    <span>{cat}</span>
                    <span style={{ fontSize: '0.75rem' }}>→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}
