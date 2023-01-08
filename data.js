export const data = {
	company: {
		name: 'rocketwebsites',
		description: 'Maryland Web Design Agency',
		category: 'Digital Studio',
		services: [
			'strategy',
			'web design',
			'web development',
			'commerce',
			'digital marketing',
			'branding',
			'SEO'
		],
		industries: [
			'nonprofit',
			'education',
			'health & fitness',
			'arts & cultures',
			'enterprise',
			'media'
		]
	},
	taglines: [
		'Stop wrestling with website builders.',
		'new and improved',
		'start thinking of websites as personal salesmen',
		'customer-focused, quality-driven web design agency that can support all of your website needs.',
		'everything digital under one roof'
	],
	packages: {
		'first generation': 'simple, old',
		'second generation': 'newer, modern',
		'third generation': 'new, fancy'
	},
	benefits: {
		'strategic vision':
			'Make the future of your company digital. We help with customized strategic advice that will guide your company through effective digital transformation.',
		'digital tools for employees':
			'Help your emoployees cut the time they need to spend on non-essential tasks with our custom-made solutions.',
		'increased sales and profits':
			'Boost sales and profit by building efficient software solutions that help business development, marketing and sales find and convert more leads.',
		'new customers':
			'Captivate new customers with well-designed websites that are intuitive and take into mind the needs of their users.',
		'FAST AND SCALABLE DEV TEAMS':
			'Hire experienced developers or developer teams that can hit the ground running and help you achieve your next deadline.',
		'Good quality websites':
			'Our developers are experts in the field and can provide you with solutions that are reliable, secure, and performant.'
	},
	// Correct object format ✅
	questionaire: [
		{
			question: 'What is your web design requirement?',
			choice: {
				a: 'Create a website',
				b: 'Major changes to my website',
				c: 'Minor changes to my website',
				d: 'Other'
			}
		},
		{
			question: 'What are your website needs?',
			choice: {
				a: 'To advertise my business/services',
				b: 'To sell products/services ex. e-commerce',
				c: 'TO offer bespoke functionality ex. logins, forms'
			}
		},
		{
			question: 'What type of business is this for?',
			choice: {
				a: 'Personal project',
				b: 'Sole trade/self-employed',
				c: 'Small business (1-9 employees)',
				d: 'Medium business (10-29 employees)',
				e: 'Large business (30-99 employees)',
				f: 'Enterprise (100 or more employees)',
				g: 'Charity/non-profit'
			}
		},
		{
			question: 'What industry do you operate in?',
			choice: {
				a: 'Business services',
				b: 'Creative industries',
				c: 'Entertainment & events',
				d: 'Financial services',
				e: 'Health & fitness',
				f: 'Home services',
				g: 'Restaurant/food services',
				h: 'Retail/consumer goods',
				i: 'Technology/software',
				j: 'Other'
			}
		},
		{
			question: 'When would you like the website to go live?',
			choice: {
				a: 'As soon as possible',
				b: '1 week',
				c: '1-4 weeks',
				d: '1-3 months',
				e: '3-5 months',
				f: 'Need to do it right',
				j: 'I would like to discuss this'
			}
		},
		{
			question: 'What is your estimated budget for this project?',
			choice: {
				a: 'Less than $500',
				b: '$500-$999',
				c: '$1000-$1,999',
				d: '$2000-$3,999',
				e: '$4000-$6999',
				f: '$7000-$11,999',
				j: 'More than $12,000'
			}
		},
		{
			// There"s a better way to ask this question 🛑
			question: 'How likely are you to make a hiring decision?',
			choice: {
				a: "I'm ready to start now",
				b: "I'm definitely going to hire someone",
				c: "I'm likely to hire someone",
				d: 'I will possibly hire someone',
				e: "I'm planning and researching"
			}
		}
	]
};

export const website = {
	homePage: ['Wrestling with Website Builders? Say hello'],
	cantactPage: ['No commitment, no worries, say hello', "let's work together"]
};
