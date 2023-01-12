<script lang="ts">
	const valueDefaults = {
		name: '',
		email: '',
		companyname: '',
		contact: '',
		inquirytype: 'Website creation',
		numberofpages: '1',
		budget: '$500-$2000',
		timeline: 'Need to do it right',
		message: ''
	};
	let values = { ...valueDefaults };

	// async function reset(event: any) {
	// 	const formData = new FormData(event.target);
	// 	setTimeout(() => {
	// 		values = { ...valueDefaults };
	// 	}, 1000);
	// }
</script>

<svelte:head>
	<title>Contact</title>
	<meta name="description" content="Contact this company" />
</svelte:head>

<div class="form-column">
	<form class="contact-form" action="https://formsubmit.co/wilfloresjr@gmail.com" method="POST">
		<input type="hidden" name="_subject" value="New submission!" />
		<h1>Contact Us</h1>
		<div class="form-row">
			<div class="col">
				<label for="name">Name<span style="color: red;">*</span></label>
				<input
					type="text"
					name="name"
					class="form-control"
					placeholder="Full Name"
					bind:value={values.name}
					required
				/>
			</div>
			<div class="col">
				<label for="email">Email<span style="color: red;">*</span></label>
				<input
					type="email"
					name="email"
					class="form-control"
					placeholder="Email Address"
					bind:value={values.email}
					required
				/>
			</div>
		</div>

		<div class="form-row">
			<div class="col">
				<label for="companyname">Company Name<span style="color: red;">*</span></label>
				<input
					type="text"
					name="companyname"
					placeholder="Name"
					bind:value={values.companyname}
					required
				/>
			</div>
			<div class="col">
				<label for="phoneNumber">Phone Number<span style="color: red;">*</span></label>
				<input
					type="tel"
					name="contact"
					class="form-control"
					placeholder="ex. 3013240234"
					bind:value={values.contact}
					pattern={'[0-9]{10}'}
					required
				/>
			</div>
		</div>
		<div class="form-message">
			<label for="message">Message or Project Description</label>
			<textarea
				class="form-text"
				name="message"
				rows="7"
				placeholder="If it helps, some examples mention target launch date, your top goals of the project, and examples of websites you admire."
				bind:value={values.message}
				required
			/>
		</div>
		<button type="submit">Submit</button>
	</form>
</div>

<style>
	h1 {
		font-weight: 300;
		font-size: clamp(4rem, 4vw, 8rem);
		font-family: 'Sofia Sans Condensed', sans-serif;
		font-weight: 400;
	}

	form {
		/* padding: clamp(4rem, 10vw, 10rem); */
		padding: 5rem 10vw;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
	.form-column {
		padding-top: 6rem;
	}

	.form-row {
		display: flex;
		flex-wrap: wrap;
		flex: 1;
		gap: 2rem;
	}

	.form-message {
		display: flex;
		flex-wrap: wrap;
		flex: 1;
	}

	.col {
		display: flex;
		flex-direction: column;
		flex: 1;
		flex-grow: 1;
	}

	label {
		font-family: sans-serif;
		font-size: 17px;
		line-height: 1.65em;
		font-weight: 400;
		color: #3d3d3d;
		-webkit-font-smoothing: antialiased;
		hyphens: manual;
		margin: 0;
		padding: 0;
		background: 0 0;
		border: 0;
		outline: 0;
		display: block;
		margin-bottom: 0.5em;
		box-sizing: border-box;
		padding-bottom: 0px;
	}

	select,
	input {
		min-height: 40px;
		position: relative;
		display: inline-block;
		margin: 0 0 0;
		padding: 22px 20px;
		font-family: sans-serif;
		font-size: 16px;
		line-height: 24px;
		font-weight: inherit;
		border-radius: 0;
		outline: 0;
		transition: color 0.2s ease-out, background-color 0.2s ease-out, border-color 0.2s ease-out;
		min-width: 20rem;
		border: 1px solid #818a91;
		color: #373a3c;
		vertical-align: middle;
		flex-grow: 1;
		flex-basis: 100%;
		max-width: 100%;
		background-color: #ffffff;
	}

	.form-text {
		line-height: 24px;
		font-size: 1rem;
		font-weight: inherit;
		border: 1px solid #818a91;
		color: #373a3c;
		margin: 0 0 0;
		padding: 22px 20px;
		font-family: sans-serif;
		width: 100%;
	}
	.form-text::placeholder {
		color: rgba(0, 0, 0, 0.472);
	}
	input::placeholder {
		color: rgba(0, 0, 0, 0.472);
	}

	button {
		font-family: sans-serif;
		background-color: black;
		color: white;
		border-radius: 1px;
		padding: 1.9rem 0;
		font-size: 1rem;
	}
	button:hover {
		cursor: pointer;
	}

	@media screen and (max-width: 992px) {
		.contact-form {
			padding: 4rem 1.5rem 1.5rem 1.5rem;
		}
	}

	@media screen and (max-width: 500px) {
		input {
			min-width: 0;
		}
		.form-column {
			margin: auto;
		}
		.contact-form {
			padding: 0rem 1.5rem 1.5rem 1.5rem;
		}
	}
</style>
