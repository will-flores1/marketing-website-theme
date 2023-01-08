<script>
	import backgroundImage from '../lib/images/background-image.jpg';
</script>

<section class="wrap">
	<div class="hero">
		<h1>Launch your dreams today.</h1>
		<p>Stop wrestling with website builders</p>
		<a href="/contact">
			<input class="button-1" type="button" value="get started" />
		</a>
	</div>
	<div />
</section>

<style>
	.wrap {
		width: 100%;
		overflow: auto;
	}

	.hero {
		width: 80%;
		max-width: 60rem;
		margin: 15rem auto;
		text-align: center;
	}

	h1 {
		/* font-family: var(--font-body); */
		font-size: clamp(2.5rem, 12vw, 6.5rem);
		/* font-size: 4.3rem; */
		font-weight: 600;
		color: rgb(251, 251, 251);
		/* text-shadow: var(--text-shadow-0); */
		animation: fadeIn 0.5s;
	}
	p {
		font-size: clamp(1.8rem, 3vw, 1rem);
		font-weight: 300;
		padding: 1rem 0 0 0;
		color: var(--color-text-1);
		animation: fadeIn 0.5s;
	}

	.button-1 {
		margin-top: 3rem;
		padding: 1rem 3rem;
		font-size: clamp(1.4rem, 1.5vw, 9rem);
		max-width: 17rem;
		background-color: rgba(240, 248, 255, 0);
		border: 2px solid rgb(246, 25, 128);
		color: rgb(246, 25, 128);
		border-radius: 4px;
		animation: fadeIn 0.5s;
		transition: all 0.3s ease;
	}

	.button-1:hover {
		cursor: pointer;
		background-color: rgb(246, 25, 128);
		color: white;
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
