import styles from './Header.module.css';

function Header() {
	return (
		<header className={styles.header}>
			<nav>
				<ul>
					<li><a href="">Inicio</a></li>
					<li><a href="">Productos</a></li>
					<li><a href="">Destacados</a></li>
					<li><a href="">Alta de producto</a></li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
