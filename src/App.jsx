//import './App.css';
import { Layout } from './componentes/Layout';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

function App() {
return (
<Layout>
{/* Todo lo que pongamos acá adentro irá donde estaba {children} */}
<h1>¡Bienvenidos a mi página!</h1>
<p>Este es el contenido principal.</p>
<ItemListContainer Mensaje="Nuestros productos destacados" />
</Layout>
);
}
export default App;
