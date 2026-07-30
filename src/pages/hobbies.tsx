import Header from "@/components/common/header";
import { Footer } from "@/components/common/footer";

export default function Hobbies() {
  return (
    <>
      <main className="flex-1 page-main">
        <div className="page-container">
          
          <Header />

          <div className="content-grid">
            
            <div className="content-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '24px' }}>
              <div>
                <p style={{ fontSize: '0.85rem', color: '#666', margin: 0 }}>My Hobbies | Things I love doing</p>
                <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#1a1a1a', margin: '16px 0 0' }}>WHAT I <span style={{ color: '#581c25' }}>ENJOY</span></h2>
                <p style={{ fontSize: '0.95rem', color: '#444', margin: '12px 0 0' }}>Activities that keep me creative, relaxed, and inspired.</p>
              </div>

              <div>
                <p style={{ fontSize: '0.85rem', fontWeight: 600, color: '#333', marginBottom: '10px' }}>Passions & Interests</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  <span style={{ backgroundColor: '#581c25', color: '#fff', padding: '8px 18px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600 }}> Dancing</span>
                  <span style={{ backgroundColor: '#e3d5c6', color: '#333', padding: '8px 18px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600, border: '1px solid #d5c4b0' }}> Watching K-Drama</span>
                  <span style={{ backgroundColor: '#e3d5c6', color: '#333', padding: '8px 18px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600, border: '1px solid #d5c4b0' }}> Listening to Music</span>
                  <span style={{ backgroundColor: '#e3d5c6', color: '#333', padding: '8px 18px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600, border: '1px solid #d5c4b0' }}> Travelling</span>
                </div>
              </div>
            </div>

            <div className="content-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '24px', height: '100%' }}>
              <div className="image-container">
                <img src="/kitkit.jpg" alt="Hobbies Vibe" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>

          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}