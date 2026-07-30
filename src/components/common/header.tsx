export default function Header() {
  return (
    <nav style={{
      backgroundColor: '#4a151d',
      borderRadius: '50px',
      padding: '16px 40px',
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '28px',
      alignItems: 'center',
      color: '#fdfbf7',
      fontSize: '0.95rem',
      fontWeight: 600,
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      width: '100%',
      maxWidth: '1400px',
      margin: '0 auto'
    }}>
      <a href="/" style={{ color: '#fdfbf7', textDecoration: 'none', opacity: 0.9 }}> Home</a>
      <a href="/about" style={{ color: '#fdfbf7', textDecoration: 'none', opacity: 0.9 }}>About</a>
      <a href="/hobbies" style={{ color: '#fdfbf7', textDecoration: 'none', opacity: 0.9 }}>Hobbies</a>
    </nav>
  );
}