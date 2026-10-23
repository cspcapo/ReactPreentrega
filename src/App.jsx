// /src/App.jsx
import './App.css';
import { Layout } from './componentes/Layout';
function App() {
return (
<Layout>
{/* Todo lo que pongamos acá adentro irá donde estaba {children} */}
<h1>¡Bienvenidos a mi página!</h1>
<p>Este es el contenido principal.</p>
</Layout>
);
}
export default App;