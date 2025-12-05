import { createRoot } from 'react-dom/client';
const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    width: '250px',
    textAlign: 'center',
    boxShadow: '2px 2px 12px rgba(0, 0, 0, 0.1)',
  },
  name: {
    margin: '0 0 10px 0',
  },
  info: {
    margin: '5px 0',
  },
};

const ContactCard = ({ name, email, phone }) => {
  return (
    <div style={styles.card}>
      <h2 style={styles.name}>{name}</h2>
      <p style={styles.info}>📧 {email}</p>
      <p style={styles.info}>📞 {phone}</p>
    </div>
  );
};

function App() {
  return (
    <>
      <ContactCard name="sagar" email="s@s.com" phone="97778" />
      <ContactCard name="Sagar" email="sagar@example.com" phone="+91 987654321" />
    </>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
