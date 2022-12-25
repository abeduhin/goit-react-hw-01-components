export const App = ({ children }) => {
  return (
    <div
      style= {{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        
      }}
    >
      { children }
    </div>
  );
};
// Kореневий компонент-App - прописуємо базові стилі до всіх React-компонентів (children)