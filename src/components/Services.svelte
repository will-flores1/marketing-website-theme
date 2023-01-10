<script>
	import WebDevelopment from '../lib/images/webdevelopment.svg';
	import Globe from '../lib/images/globe.svg';
	import Marketing from '../lib/images/marketing.svg';
	import Tools from '../lib/images/tools.svg';
</script>

<div class="service-wrap">
	<h1 class="what-we-do">WHAT WE DO</h1>
	<div class="cell-container">
		<div class="cell">
			<div class="text-wrap">
				<img src={Globe} width="48" alt="Globe" />

				<h1 class="service-title">Website Development</h1>
				<p>
					Website design & development. You don't just want a website that works, you want a website
					that builds an excellent customer experience that keeps them coming back.
				</p>
			</div>
		</div>
		<div class="cell">
			<div class="text-wrap">
				<img src={WebDevelopment} width="48" alt="Web Development" />

				<h1 class="service-title">Scale & Growth</h1>
				<p>
					Back-end website development. You need a website that helps you scale and outgrow your
					competition.
				</p>
			</div>
			<p />
		</div>
		<div class="cell">
			<div class="text-wrap">
				<img src={Marketing} width="48" alt="marketing" />

				<h1 class="service-title">Online Marketing</h1>
				<p>
					SEO optimization & content writing. You don’t want to be included in just any search, you
					want to be noticed by the potential customers that matter most.
				</p>
			</div>
		</div>
		<div class="cell">
			<div class="text-wrap">
				<img src={Tools} width="48" alt="tools" />
				<h1 class="service-title">Other Services</h1>
				<p>
					Website maintenance and google service analytics. Ensure your website remains up-to-date,
					secure, and healthy.
				</p>
			</div>
		</div>
	</div>
</div>

<style>
	.what-we-do {
		text-align: start;
		font-size: 2rem;
		letter-spacing: -1px;
		padding: 3rem 0 0 2.344rem;
	}
	.service-wrap {
		font-family: 'Inter', sans-serif;
		height: fit-content;
		letter-spacing: -1px;
	}

	.service-title {
		font-size: clamp(1.5rem, 1.5vw, 9rem);
		letter-spacing: -1px;
	}
	.cell-container {
		display: flex;
		flex-wrap: wrap;
		padding: 3rem 3rem 5rem 3rem;
		gap: 2rem 1rem;
	}
	.cell {
		width: 48%;
	}

	.text-wrap {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	h1 {
		/* text-align: center; */
		font-size: clamp(3.2rem, 3.3vw, 10rem);
		font-weight: 600;
	}

	p {
		/* text-align: center; */
		font-size: clamp(1.2rem, 1.3vw, 8rem);
		font-weight: 300;
		color: rgb(46, 46, 46);
		padding-top: 0.2rem;
		/* width: max-content; */
	}

	@media screen and (max-width: 992px) {
		.cell-container {
			padding: 2.344rem;
			gap: 3rem;
		}
		h1 {
			/* text-align: center; */
			font-size: 2.4rem;
			letter-spacing: 0.06px;
			font-weight: 600;
		}

		p {
			/* text-align: center; */
			font-size: 1.4rem;
			font-weight: 300;
			color: rgb(46, 46, 46);
			padding-top: 0.2rem;
			/* width: max-content; */
		}
		.service-title {
			font-size: 1.775rem;
		}
		.cell {
			width: 100%;
		}
	}
</style>
