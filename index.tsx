import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Rivalry</title>
        <meta name="description" content="Explore the universe of possibilities" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '60px' }}>
        <h1 style={{ fontSize: '48px', marginBottom: '40px' }}>Welcome to Rivalry</h1>

        <div style={{ marginTop: '40px' }}>
          <a href="https://app.genn.lu/auth/rivalry" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-block',
            padding: '12px 24px',
            backgroundColor: '#4F46E5',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '16px',
            cursor: 'pointer',
            margin: '10px'
          }}>
            Launch Generator
          </a>
        </div>

        <div style={{ marginTop: '20px' }}>
          <a href="https://discord.gg/gfbPJMDW" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-block',
            padding: '12px 24px',
            backgroundColor: '#7289DA',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '16px',
            cursor: 'pointer',
            margin: '10px'
          }}>
            Join Discord
          </a>
        </div>
      </main>
    </>
  )
}