import omega from './imagenes/omega.png';
import './App.css';

import ListaDeTareas from './componentes/ListaDeTareas';
function App() {
	return (
		<div className='aplicacion-tareas'>
			<div className='freecodecamp-logo-contenedor'>
				<img src={omega} className='omega-logo' alt='logo' />
			</div>
			<div className='tareas-lista-principal'>
				<h1>Mis Tareas</h1>
				<ListaDeTareas />
			</div>
		</div>
	);
}

export default App;
