import { CSSProperties, ReactNode } from 'react'

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2
      style={{
        fontSize: '1.375rem',
        fontWeight: 700,
        color: 'var(--fg)',
        marginBottom: '1.25rem',
        paddingBottom: '0.625rem',
        borderBottom: '1px solid var(--border)',
      }}
    >
      {children}
    </h2>
  )
}

function Card({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        background: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: '0.75rem',
        padding: '2rem',
        marginBottom: '3rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
      }}
    >
      {children}
    </div>
  )
}

function Label({ children }: { children: ReactNode }) {
  return (
    <p
      style={{
        fontSize: '0.8rem',
        fontWeight: 600,
        color: 'var(--muted)',
        textTransform: 'uppercase',
        letterSpacing: '0.06em',
        marginBottom: '0.5rem',
      }}
    >
      {children}
    </p>
  )
}

function FormField({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <Label>{label}</Label>
      {children}
    </div>
  )
}

const inputBase: CSSProperties = {
  width: '100%',
  padding: '0.5rem 0.75rem',
  borderRadius: '0.5rem',
  border: '1px solid var(--border)',
  background: 'var(--bg)',
  color: 'var(--fg)',
  fontSize: '0.9375rem',
  outline: 'none',
  boxSizing: 'border-box',
}

const btnBase: CSSProperties = {
  padding: '0.55rem 1.25rem',
  borderRadius: '0.5rem',
  border: 'none',
  cursor: 'pointer',
  fontSize: '0.9375rem',
  fontWeight: 600,
}

const btnPrimary: CSSProperties = { ...btnBase, background: 'var(--accent)', color: '#fff' }
const btnSecondary: CSSProperties = { ...btnBase, background: 'var(--card)', color: 'var(--fg)', border: '1px solid var(--border)' }
const btnOutline: CSSProperties = { ...btnBase, background: 'transparent', color: 'var(--accent)', border: '1px solid var(--accent)' }
const btnGhost: CSSProperties = { ...btnBase, background: 'transparent', color: 'var(--fg)', border: 'none' }
const btnDanger: CSSProperties = { ...btnBase, background: '#ef4444', color: '#fff' }

export default function ComponentsPage() {
  return (
    <div
      style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '3rem 1.5rem 5rem',
      }}
    >
      {/* Page header */}
      <div style={{ marginBottom: '3rem' }}>
        <h1
          style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: 'var(--fg)',
            marginBottom: '0.5rem',
          }}
        >
          Components
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '1.0625rem' }}>
          A showcase of typography, buttons, and form inputs.
        </p>
      </div>

      {/* ── Typography ── */}
      <section>
        <SectionHeading>Typography</SectionHeading>
        <Card>
          <div>
            <Label>Headings</Label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <h1 style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--fg)', letterSpacing: '-0.025em', margin: 0 }}>Heading 1</h1>
              <h2 style={{ fontSize: '1.875rem', fontWeight: 700, color: 'var(--fg)', letterSpacing: '-0.02em', margin: 0 }}>Heading 2</h2>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--fg)', margin: 0 }}>Heading 3</h3>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--fg)', margin: 0 }}>Heading 4</h4>
            </div>
          </div>

          <div>
            <Label>Paragraphs</Label>
            <p style={{ color: 'var(--fg)', lineHeight: 1.7, fontSize: '1rem', margin: '0 0 0.75rem' }}>
              Body text — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <p style={{ color: 'var(--muted)', lineHeight: 1.7, fontSize: '0.875rem', margin: 0 }}>
              Small / muted text — Used for captions, helper text, labels, and secondary information throughout the interface.
            </p>
          </div>

          <div>
            <Label>Inline Text</Label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'baseline' }}>
              <strong style={{ color: 'var(--fg)', fontWeight: 700 }}>Bold</strong>
              <em style={{ color: 'var(--fg)' }}>Italic</em>
              <span style={{ color: 'var(--fg)', textDecoration: 'underline' }}>Underline</span>
              <span style={{ color: 'var(--accent)' }}>Accent</span>
              <span style={{ color: 'var(--muted)' }}>Muted</span>
              <code
                style={{
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  padding: '0.15rem 0.4rem',
                  borderRadius: '0.3rem',
                  fontSize: '0.875rem',
                  fontFamily: 'var(--font-geist-mono), monospace',
                  color: 'var(--accent)',
                }}
              >
                inline code
              </code>
            </div>
          </div>
        </Card>
      </section>

      {/* ── Buttons ── */}
      <section>
        <SectionHeading>Buttons</SectionHeading>
        <Card>
          <div>
            <Label>Variants</Label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <button style={btnPrimary}>Primary</button>
              <button style={btnSecondary}>Secondary</button>
              <button style={btnOutline}>Outline</button>
              <button style={btnGhost}>Ghost</button>
              <button style={btnDanger}>Danger</button>
            </div>
          </div>

          <div>
            <Label>Sizes</Label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
              <button style={{ ...btnPrimary, padding: '0.35rem 0.875rem', fontSize: '0.8125rem' }}>Small</button>
              <button style={btnPrimary}>Medium</button>
              <button style={{ ...btnPrimary, padding: '0.75rem 1.75rem', fontSize: '1.0625rem' }}>Large</button>
            </div>
          </div>

          <div>
            <Label>States</Label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <button style={btnPrimary}>Default</button>
              <button style={{ ...btnPrimary, opacity: 0.5, cursor: 'not-allowed' }} disabled>Disabled</button>
              <button style={{ ...btnOutline }}>Outlined</button>
            </div>
          </div>
        </Card>
      </section>

      {/* ── Form Inputs ── */}
      <section>
        <SectionHeading>Form Inputs</SectionHeading>
        <Card>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '1.25rem',
            }}
          >
            <FormField label="Text">
              <input type="text" placeholder="Enter text..." style={inputBase} />
            </FormField>
            <FormField label="Email">
              <input type="email" placeholder="name@example.com" style={inputBase} />
            </FormField>
            <FormField label="Password">
              <input type="password" placeholder="••••••••" style={inputBase} />
            </FormField>
            <FormField label="Search">
              <input type="search" placeholder="Search..." style={inputBase} />
            </FormField>
            <FormField label="Number">
              <input type="number" placeholder="0" style={inputBase} />
            </FormField>
            <FormField label="Select">
              <select style={{ ...inputBase, cursor: 'pointer' }}>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </FormField>
          </div>

          <FormField label="Textarea">
            <textarea
              placeholder="Enter a longer description..."
              rows={4}
              style={{ ...inputBase, resize: 'vertical' }}
            />
          </FormField>

          <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
            <div>
              <Label>Checkboxes</Label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {['Option A', 'Option B', 'Option C'].map((opt, i) => (
                  <label
                    key={opt}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      cursor: 'pointer',
                      fontSize: '0.9375rem',
                      color: 'var(--fg)',
                    }}
                  >
                    <input
                      type="checkbox"
                      defaultChecked={i === 0}
                      style={{ width: '1rem', height: '1rem', accentColor: 'var(--accent)' } as CSSProperties}
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <Label>Radio Buttons</Label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {['Choice 1', 'Choice 2', 'Choice 3'].map((opt, i) => (
                  <label
                    key={opt}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      cursor: 'pointer',
                      fontSize: '0.9375rem',
                      color: 'var(--fg)',
                    }}
                  >
                    <input
                      type="radio"
                      name="radio-group"
                      defaultChecked={i === 0}
                      style={{ width: '1rem', height: '1rem', accentColor: 'var(--accent)' } as CSSProperties}
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>

            <div style={{ flex: 1, minWidth: '200px' }}>
              <Label>Range Slider</Label>
              <input
                type="range"
                defaultValue={60}
                style={{ width: '100%', accentColor: 'var(--accent)' } as CSSProperties}
              />
            </div>
          </div>
        </Card>
      </section>
    </div>
  )
}
