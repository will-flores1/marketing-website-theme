<script lang="ts">
	import { page } from '$app/stores';
	import logo from '../lib/images/logo.svg';

	let offset = 0;
	let tolerance = 0;
	let headerClass = 'show';
	let y: number = 0;
	let prevY: number = 0;

	let menuOpen = false;
	let menu = 'menu-screen hide-menu';

	function deriveMenu() {
		if (menuOpen) {
			menu = 'menu-screen show-menu';
		} else {
			menu = 'menu-screen hide-menu';
		}
		// console.log(menu);
	}

	function toggleMenu() {
		menuOpen = !menuOpen;
		deriveMenu();
	}

	function deriveClass(y: number, dy: number) {
		if (y < 56) {
			return 'show';
		}

		if (y < offset) {
			return 'show';
		}

		if (Math.abs(dy) <= tolerance) {
			return headerClass;
		}

		if (dy > 0) {
			return 'show';
		}

		return 'hide';
	}

	function updateClass(y: number) {
		const dy = prevY - y;
		// console.log(dy)
		prevY = y;
		// console.log(prevY)
		return deriveClass(y, dy);
	}

	$: headerClass = updateClass(y);

	const text = {
		companyName: 'globewebsites'
	};
</script>

<svelte:window bind:scrollY={y} />
<header class={headerClass}>
	<div class="nav-container">
		<div class="corner">
			<a href="/">
				<img src={logo} alt="logo" width="180" />
			</a>
		</div>
		<nav class="nav-menu">
			<ul>
				<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
					<a href="/">Home</a>
				</li>
				<!-- <li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
					<a href="/about">About</a>
				</li> -->
				<li aria-current={$page.url.pathname === '/contact' ? 'page' : undefined}>
					<a href="/contact">Contact</a>
				</li>
			</ul>
		</nav>
		<a class="corner-menu" href={'#'} on:click={toggleMenu}>
			<svg
				class="menu"
				width="38"
				height="38"
				viewBox="0 0 17 17"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect width="5" height="5" fill="#fff" />
				<rect y="6" width="5" height="5" fill="#fff" />
				<rect y="12" width="5" height="5" fill="#fff" />
				<rect x="6" width="5" height="5" fill="#fff" />
				<rect x="6" y="6" width="5" height="5" fill="#fff" />
				<rect x="6" y="12" width="5" height="5" fill="#fff" />
				<rect x="12" width="5" height="5" fill="#fff" />
				<rect x="12" y="6" width="5" height="5" fill="#fff" />
				<rect x="12" y="12" width="5" height="5" fill="#fff" />
			</svg>
		</a>
	</div>

	<!--Menu -->
	<div class={menu}>
		<nav class="nav-menu-mobile">
			<ul class="mobile-nav-list">
				<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
					<a href="/" on:click={toggleMenu}>Home</a>
				</li>
				<!-- <li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
					<a href="/about" on:click={toggleMenu}>About</a>
				</li> -->
				<li aria-current={$page.url.pathname === '/contact' ? 'page' : undefined}>
					<a href="/contact" on:click={toggleMenu}>Contact</a>
				</li>
			</ul>
		</nav>
	</div>
</header>

<style>
	header {
		position: fixed;
		width: 100%;
		top: 0;
		transition: transform 250ms linear;
		z-index: 1;
		backdrop-filter: blur(4px);
		background: linear-gradient(to bottom, rgb(0, 0, 0), rgba(255, 0, 0, 0));
		/* box-shadow: 0 0 5px rgba(0, 0, 0, 0.772); */
	}

	.nav-container {
		max-width: 132.25rem;
		margin: auto;
		padding: 25px 25px;
		display: flex;
		align-items: center;
		gap: 2rem;
		display: flex;
		justify-content: space-between;
	}

	.logo-container {
		display: flex;
		font-size: 2.3rem;
		font-weight: 300;
		color: var(--color-text-1);
	}

	.logo-link {
		height: fit-content;
	}

	.logo-container-websites-name {
		font-weight: 600;
		color: var(--color-text-1);
	}

	.nav-menu {
		display: flex;
		align-items: center;
		height: 100%;
	}

	.nav-menu ul {
		display: flex;
		list-style: none;
	}

	.nav-menu li {
		position: relative;
	}

	.nav-menu a {
		padding: 0 1rem;
		color: var(--color-text-1);
		font-weight: 600;
		letter-spacing: 1px;
		height: 100%;
		font-size: 1.1625rem;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	.nav-menu a:hover {
		color: var(--color-theme-1);
		transition: color 0.5s ease-out;
	}

	.show {
		transform: translateY(0%);
	}

	.hide {
		transform: translateY(-100%);
	}

	.corner-menu {
		display: none;
	}

	.menu-screen {
		display: none;
	}

	@media screen and (max-width: 992px) {
		.corner-menu {
			display: block;
		}

		.corner-menu:hover {
			cursor: pointer;
		}

		.menu-screen {
			display: block;
			background-color: black;
			height: 100vh;
			width: 100vw;
			position: fixed;
			z-index: 2;
			transition: all 0.2s ease;
		}

		.mobile-nav-list {
			display: flex;
			flex-direction: column;
			justify-items: center;
			align-items: center;
			height: 100vh;
		}
		.mobile-nav-list a {
			color: white;
		}

		.mobile-nav-list li {
			height: 28.5%;
			width: 100%;
			font-size: 3rem;
			font-weight: 600;
			letter-spacing: 2px;
			font-family: 'inter', sans-serif;
			display: grid;
			place-items: center;
		}

		.mobile-nav-list a {
			padding: 2rem;
		}

		.nav-menu-mobile {
			height: 100%;
		}
		.hide-menu {
			transform: translateX(-100%);
		}
		.show-menu {
			transform: translateX(0%);
		}

		.nav-container {
			justify-content: space-between;
		}

		.nav-menu {
			display: none;
		}
	}

	@media screen and (max-width: 500px) {
		header {
			height: fit-content;
		}
		.nav-container {
			padding: 0.5rem 1rem;
		}
	}
</style>
