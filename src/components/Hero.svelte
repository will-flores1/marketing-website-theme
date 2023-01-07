<script>
	import backgroundImage from "../lib/images/background-image.jpg"
</script>

<section class="wrap">
	<div class="hero-left">
		<h1>Launch your dream website today.</h1>
    <p>Reach more people, drive more traffic, and skyrocket profits - all at the price of your dreams.</p>
	</div>
	<div class="hero-right"></div>
  <div></div>
</section>

<style>
	.wrap {
		width: 100%;
		overflow: auto;
	}
  
  .hero-left {
		float: left;
		width: 50%;

    max-width: 60rem;
    margin: 10rem auto;
    text-align: center;
  }
	.hero-right {
		float: right;
		width: 50%;
	}

	h1 {
		/* font-family: var(--font-body); */
		font-size: 4.3rem;
		font-weight: 600;
		color: rgb(251, 251, 251);
    text-shadow: var(--text-shadow-0);
		animation: fadeIn 0.5s;
	}
  p {
    font-size: 2.2rem;
    padding: 1rem 0 0 0;
    color: var(--color-text-1);
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
