<script lang="ts">
	import { page } from '$app/stores';
	import github from '$lib/images/github.svg';

	let offset = 0;
	let tolerance = 0;
	let headerClass = 'show';
	let y: number = 0;
	let prevY: number = 0;

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
			console.log('hell');
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
</script>

<svelte:window bind:scrollY={y} />
<header class={headerClass}>
	<div class="nav-container">
		<div class="corner">
			<a href="/">
				<h1 class="logo-container">
					rocket
					<span class="logo-container-websites-name">websites</span>
				</h1>
			</a>
		</div>
		<nav>
			<ul>
				<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
					<a href="/">Home</a>
				</li>
				<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
					<a href="/about">About</a>
				</li>
				<li aria-current={$page.url.pathname === '/contact' ? 'page' : undefined}>
					<a href="/contact">Contact</a>
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
		transition: transform 300ms linear;
		z-index: 1;
	}
	
	.nav-container {
		max-width: 132.25rem;
		margin: auto;
		padding: 25px 25px;
		display: flex;
		align-items: center;
		gap: 2rem;
	}

	.logo-container {
		display: flex;
		font-size: 2.3rem;
		color: var(--color-text-1);
	}
	
	.logo-container-websites-name {
		font-weight: 600;
		color: var(--color-text-1);
	}
		
	nav {
		display: flex;
		align-items: center;
	}

	ul {
		display: flex;
		list-style: none;
	}

	li {
		position: relative;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: -10px;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-text-1);
	}

	nav a {
		padding: 0 1rem;
		color: var(--color-text-1);
		font-weight: 600;
		letter-spacing: 1px;
		font-size: 1.1625rem;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
		transition: color 0.5s ease-out;
	}

	.show {
		transform: translateY(0%);
	}

	.hide {
		transform: translateY(-100%);
	}
</style>
