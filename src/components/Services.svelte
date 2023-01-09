<div class="service-wrap">
	<h1 style="text-align: start; padding:3rem 0 0 3rem;">What We Do</h1>
	<div class="cell-container">
		<div class="cell">
			<div class="text-wrap">
				<h1 class="service-title">Websites</h1>
				<p>sfljk sflkjsfklsdfl slkfjsdlfjsk k ljdsfl js klsj slfk jdsf lkf sdflk</p>
			</div>
			<p />
		</div>
		<div class="cell">
			<div class="text-wrap">
				<h1 class="service-title">Design</h1>
				<p>
					sfljk sflkjsfklsdfl slkfjsdlfjsk k ljdsfl js klsj slfk jdsf lkf sdflk fljk sflkjsfklsdfl
					slkfjsdlfjsk k ljdsfl js klsj slfk jdsf lkf sdflk
				</p>
			</div>
		</div>
		<div class="cell">
			<div class="text-wrap">
				<h1 class="service-title">Marketing</h1>
				<p>sfljk sflkjsfklsdfl slkfjsdlfjsk k ljdsfl js klsj slfk jdsf lkf sdflk</p>
			</div>
		</div>
		<div class="cell">
			<div class="text-wrap">
				<h1 class="service-title">Marketing</h1>
				<p>sfljk sflkjsfklsdfl slkfjsdlfjsk k ljdsfl js klsj slfk jdsf lkf sdflk</p>
			</div>
		</div>
		<div class="cell">
			<div class="text-wrap">
				<h1 class="service-title">Marketing</h1>
				<p>sfljk sflkjsfklsdfl slkfjsdlfjsk k ljdsfl js klsj slfk jdsf lkf sdflk</p>
			</div>
		</div>
	</div>
</div>

<style>
	.service-wrap {
		font-family: 'Inter', sans-serif;
		height: fit-content;
	}

	.service-title {
		font-size: clamp(1.7rem, 1.7vw, 10rem);
	}
	.cell-container {
		display: flex;
		flex-wrap: wrap;
		padding: 3rem;
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
			gap: 3rem;
		}
		h1 {
			/* text-align: center; */
			font-size: 4rem;
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
