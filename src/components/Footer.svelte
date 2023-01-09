<footer>
	<p>Contact Us:</p>
	<div class="footer-opts">
		<p>Email: example@rocketwebsites.com</p>
		<!-- <p style="display: flex;">
			Tel:
			<a href="tel:6031112298"></a>
		</p> -->
	</div>
	<p class="license">Copyright © Drive Media. All rights reserved</p>
</footer>

<style>
	footer {
		font-family: sans-serif;
		background-color: black;
		color: white;
		font-size: clamp(0.4rem, 2.5vw, 1.2rem);
		letter-spacing: 2px;
		padding: 2rem 2rem 1rem 2rem;
		margin: auto;
		text-align: start;
	}

	.footer-opts {
		display: flex;
		/* justify-content: center; */
		gap: 1rem;
		margin-top: 1rem;
	}

	.license {
		padding-top: 6rem;
		font-size: clamp(0.1rem, 1.8vw, 0.8rem);
		text-align: center;
	}

	@media screen and (max-width: 992px) {
		footer {
			padding: 2rem;
		}
		.license {
			padding-top: 3rem;
		}
	}
</style>
