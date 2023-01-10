<script>
</script>

<section class="wrap">
	<div class="hero">
		<h1>Wrestling with website builders?</h1>
		<p>Launch your website today.</p>
		<a href="/contact">
			<input class="button-1" type="button" value="Get in touch" />
		</a>
	</div>
	<div />
</section>

<style>
	.wrap {
		width: 100%;
		overflow: auto;
		position: absolute;
		top: 0;
	}

	.hero {
		width: 80%;
		max-width: 60rem;
		margin: 15rem auto;
		text-align: center;
	}

	h1 {
		font-size: clamp(2.5rem, 12vw, 6.5rem);
		font-weight: 600;
		color: rgb(251, 251, 251);
		text-shadow: var(--text-shadow-0);
		animation: fadeIn 0.5s;
	}
	p {
		font-size: clamp(1.8rem, 3.5vw, 2rem);
		font-weight: 400;
		padding-top: 1rem;
		color: rgb(240, 240, 240);
		text-shadow: var(--text-shadow-0);
		animation: fadeIn 0.5s;
	}

	.button-1 {
		font-family: var(--font-body);
		font-weight: 600;
		outline: 1px solid white;
		margin-top: 1.9rem;
		padding: 1rem 3rem;
		font-size: clamp(1.4rem, 1.5vw, 9rem);
		max-width: 17rem;
		background-color: var(--color-theme-1);
		text-shadow: var(--text-shadow-0);
		border: 2px solid rgb(246, 25, 128);
		color: white;
		animation: fadeIn 0.5s;
		transition: all 0.3s ease;
		-webkit-border-radius: 4px;
		-moz-border-radius: 4px;
		border-radius: 4px;
	}

	.button-1:hover {
		cursor: pointer;
		background-color: #d62828d6;
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@media screen and (max-width: 992px) {
		.hero {
			margin: 12rem auto;
		}
	}

	@media screen and (max-width: 500px) {
		h1 {
			font-size: 4.5rem;
		}
		.hero {
			margin: 7rem auto;
		}
	}
</style>
