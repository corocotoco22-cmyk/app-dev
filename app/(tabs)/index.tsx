'use dom'; // 👈 Isso ativa o HTML tradicional no seu aplicativo!

export default function TabOneScreen() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Meu App em HTML! 🚀</h1>
      <div style={styles.separator}></div>
      
      <p style={styles.text}>
        Agora você pode editar esta tela usando tags de site normais como div, h1, p e button.
      </p>

      <button 
        onClick={() => alert('HTML funcionando no Expo Go!')}
        style={styles.button}
      >
        Clique Aqui
      </button>
    </div>
  );
}

// Estilos usando CSS tradicional em formato de objeto JavaScript
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'sans-serif',
    padding: '20px',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: '28px',
    color: '#0084FF',
    margin: '0px',
  },
  separator: {
    margin: '20px 0',
    height: '2px',
    width: '60%',
    backgroundColor: '#eee',
  },
  text: {
    fontSize: '16px',
    color: '#444',
    textAlign: 'center' as const,
    marginBottom: '20px',
  },
  button: {
    padding: '12px 24px',
    backgroundColor: '#0084FF',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
  }
};
