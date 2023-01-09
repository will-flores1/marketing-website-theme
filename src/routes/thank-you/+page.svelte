<svelte:head>
	<title>Form Submitted</title>
	<meta name="description" content="Form was submitted." />
</svelte:head>

<div class="thanks">
	Form submitted. We'll get back to you soon. <a href="/">Return to Home Page.</a>
</div>

<style>
	.thanks {
		padding-top: 6rem;
		font-size: 1.5rem;
		height: 100vh;
	}

	@media screen and (max-width: 992px) {
		.thanks {
			font-size: 2.6rem;
		}
	}
	@media screen and (max-width: 500px) {
		.thanks {
			font-size: 2.2rem;
		}
	}
</style>
