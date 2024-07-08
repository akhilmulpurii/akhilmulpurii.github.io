import noisefit from '$lib/assets/projects/noisefit.png';
import noisefitSection1 from '$lib/assets/projects/noisefit_section.png';
import noisefitSection2 from '$lib/assets/projects/noise_section_2.png';
import noisefitLogo from '$lib/assets/projects/noisefit_logo.png';
import heyhey from '$lib/assets/projects/heyhey.png';
import heyheyLogo from '$lib/assets/projects/heyhey_logo.svg';
import hxouse from '$lib/assets/projects/hxouse.png';
import hxouseLogo from '$lib/assets/projects/houseLogo.png';
import frankDarling from '$lib/assets/projects/frankdarling.png';
import frankDarlingLogo from '$lib/assets/projects/frankdarlingLogo.png';
import justAct from '$lib/assets/projects/justact.png';
import justActLogo from '$lib/assets/projects/justactLogo.png';
import skymd from '$lib/assets/projects/skymd.png';
import skymdLogo from '$lib/assets/projects/skymdLogo.png';

export interface ProjectSection {
	image: string | undefined;
	heading: string;
	caption: string;
}

export interface Project {
	title: string;
	logo: string;
	card_image: string;
	organizaton: string;
	short_description: string;
	urlSlug: string;
	technologies: string[];
	year: string;
	platform: string;
	description: string;
	sections: ProjectSection[];
	appstore_url?: string;
	playstore_url?: string;
	web_url?: string;
}

const projects: Project[] = [
	{
		organizaton: 'F22 Labs',
		title: 'NoiseFit',
		logo: noisefitLogo,
		card_image: noisefit,
		short_description: 'A Companion App for Noise Smart Wearable Devices',
		urlSlug: 'noisefit',
		technologies: ['React Native', 'Firebase', 'Redux', 'Shopify'],
		year: '2020',
		platform: 'iOS, Android',
		description:
			'NoiseFit is a cross-platform mobile application that acts as a companion app for Noise smart wearable devices that track user activity such as sleep, steps, heart rate, etc.',
		sections: [
			{
				image: noisefitSection1,
				heading: 'Fast. Responsive. Cross Platform.',
				caption:
					'NoiseFit is a cross-platform mobile application that acts as a companion app for Noise smart wearable devices that track user activity such as sleep, steps, heart rate, etc.'
			},
			{
				image: noisefitSection2,
				heading: 'App has a inbuilt store for quick purchases',
				caption:
					"The app has a shop section backed by the Shopify API's to allow users to purchase the products at their leisure. The shop is built completely with Shopify Storefront APIs & Pure React Native Code. ( No Webviews Included )"
			}
		],
		appstore_url: 'https://apps.apple.com/in/app/noisefit-health-fitness/id1498457147',
		playstore_url: 'https://play.google.com/store/apps/details?id=com.noisefit'
	},
	{
		organizaton: 'F22 Labs',
		title: 'HeyHey',
		card_image: heyhey,
		logo: heyheyLogo,
		year: '2022',
		short_description: 'Customized video shout-outs from your favorite celebrities',
		urlSlug: 'heyhey',
		technologies: ['React', 'React Native', 'AWS'],
		platform: 'Web, iOS, Android',
		description:
			'HeyHey is the destination where you can book personalized video shout outs from your favorite celebrities for all occasions. Our mission is to deliver memorable moments and experiences to you from the artists you love most.',
		sections: [
			{
				image: undefined,
				heading: 'Quick & Accessible Web app at your finger tips.',
				caption:
					'HeyHey has a fast and responsive web app which allows users to purchase celebrity shoutouts as well as allows celebrities to manage their bookings through the celebrity portal.'
			},
			{
				image: undefined,
				heading: 'Cross-platform app to browse and book your favorite celebs.',
				caption:
					"Discover and book customized video shout-outs from your favourite actors, athletes, musicians, reality television stars, YouTubers and influencers! Reserve your unique HeyHey today, it's the perfect wedding, anniversary or birthday present."
			},
			{
				image: undefined,
				heading: 'App Dedicated for Celebrities',
				caption:
					'The app is completely built with UX keeping a celebrity in mind by providing a simple UI to record the shoutouts in the least possible clicks. The video gets processed in AWS & is sent back to the users after the request is completed.'
			}
		],
		appstore_url: 'https://apps.apple.com/us/app/heyhey-talent-fan-videos/id1509874968',
		playstore_url: 'https://play.google.com/store/apps/details?id=com.heyhey',
		web_url: 'https://heyheyglobal.com/'
	},
	{
		organizaton: 'F22 Labs',
		title: 'Frank Darling',
		logo: frankDarlingLogo,
		card_image: frankDarling,
		year: '2023',
		technologies: ['Next.js', 'Shopify', 'Nuxt.js', 'AWS'],
		urlSlug: 'frankdarling',
		platform: 'Website',
		web_url: 'https://www.frankdarling.com/',
		sections: [],
		short_description: '',
		description: ''
	},

	{
		organizaton: 'F22 Labs',

		title: 'SkyMD',
		logo: skymdLogo,
		card_image: skymd,
		technologies: ['React Native', 'Next.js', 'AWS'],
		year: '2021',
		urlSlug: 'skymd',
		platform: 'Web, iOS, Android',
		web_url: 'https://www.skymd.com/',
		sections: [],
		short_description: '',
		description: ''
	},

	{
		organizaton: 'F22 Labs',

		title: 'JustAct',
		card_image: justAct,
		logo: justActLogo,
		year: '2020',
		short_description: 'An online dispute resolution platform',
		urlSlug: 'justact',
		technologies: ['React', 'Webpack', 'NodeJS'],
		platform: 'Web',
		description:
			'JustAct is an Online Dispute Resolution that offers Negotiation as a technology-assisted mediation that uses a Game Theory-based algorithm to throw up a settlement number and will use AI to improve over time.',
		sections: [
			{
				image: undefined,
				heading: 'What is JustAct?',
				caption:
					'JustAct is an Online Dispute Resolution that offers Negotiation as a technology-assisted mediation that uses a Game Theory-based algorithm to throw up a settlement number and will use AI to improve over time.'
			},
			{
				image: undefined,
				heading:
					'JustAct will issue a signed Settlement Agreement for Negotiation and Mediation which are enforceable.',
				caption:
					'JustAct offers you ready, relaxed resolution that embodies the spirit of ADR in its purest form by using independent and credible resolution techniques / professionals who are trained to resolve disputes amicably. It also offers all ADR services – Negotiation, Mediation / Conciliation and Arbitration in one place.'
			}
		],
		web_url: 'https://justact.co.in/'
	},

	{
		organizaton: 'F22 Labs',

		title: 'HXOUSE',
		logo: hxouseLogo,
		card_image: hxouse,
		technologies: ['React Native', 'Firebase'],
		year: '2020',
		urlSlug: 'hxouse',
		platform: 'iOS, Android',
		sections: [],
		short_description: '',
		description: ''
	},
	{
		organizaton: 'F22 Labs',

		title: 'Winekey',
		logo: '',
		card_image: '',
		short_description: 'Virtual Events & Wine tastings experiences',
		urlSlug: 'winekey',
		technologies: ['React', 'NextJS', 'AWS'],
		year: '2021',
		platform: 'Web',
		description:
			'Winekey makes it easy to plan your next client event, team bonding activity or group event. Browse experiences or talk to an event planner below',
		sections: [
			{
				image: undefined,
				heading: 'Virtual Events & Wine tastings experiences',
				caption:
					'Winekey makes it easy to plan your next client event, team bonding activity or group event. Browse experiences or talk to an event planner below.'
			},
			{
				image: undefined,
				heading: 'Planning a corporate event?',
				caption:
					'Winekey customizes each virtual tasting to fit your organization’s needs. Hence we provide sofisticated order management & tracking system to fit your needs by analzing the requirements and targeting the correct expectations of the customers.'
			}
		],
		web_url: 'https://winekey.co/'
	},
	{
		organizaton: 'F22 Labs',

		title: 'My Visitly',
		logo: '',
		card_image: '',
		short_description: 'Contactless Sign-In/Off & Visitor Management System',
		urlSlug: 'my-visitly',
		year: '2020',
		technologies: ['React Native', 'Firebase', 'Redux'],
		platform: 'iOS, Android',
		description:
			'My Visitly is a cross-platform application that provides sign-in/out capabilities to organizations working at premises during the COVID-19 pandemic. It offers a hands-free method of logging into the portal without the risk of physical contact.',
		sections: [
			{
				image: undefined,
				heading: 'Contactless Easy Sign-In/Off',
				caption:
					'My Visitly is a cross-platform application that provides sign-in/out capabilities to organizations working at premises during the COVID-19 pandemic. It offers a hands-free method of logging into the portal without the risk of physical contact.'
			}
		],
		appstore_url: 'https://apps.apple.com/us/app/my-visitly/id1500199942',
		playstore_url: 'https://play.google.com/store/apps/details?id=com.visitlyapp'
	},

	{
		organizaton: 'F22 Labs',

		title: 'Punch App',
		year: '2020',
		logo: '',
		card_image: '',
		short_description: 'B2B Ecommerce App',
		urlSlug: 'punchapp',
		technologies: ['React Native', 'Firebase', 'Intercomm'],
		platform: 'iOS, Android',
		description:
			'Punch is a free messaging app that enables B2B ecommerce. From orders to payments and everything in between. Welcome to hassle free wholesale',
		sections: [
			{
				image: undefined,
				heading: 'Ease of Access with single app for Buyers & Sellers',
				caption:
					'Punch is a free messaging app that enables B2B ecommerce. From orders to payments and everything in between. Welcome to hassle free wholesale.'
			}
		],
		appstore_url: 'https://apps.apple.com/us/app/id1506871435',
		playstore_url: 'https://play.google.com/store/apps/details?id=com.punchapp'
	},

	{
		organizaton: 'F22 Labs',

		title: 'RangDe',
		logo: '/images/rangde.png',
		card_image: '',
		short_description: 'B2B Paints & Waterproofing App',
		urlSlug: 'rangde',
		technologies: ['React Native', 'Firebase', 'AWS'],
		platform: 'iOS, Android',
		year: '2019',
		description:
			"RangDe APP is a Contractor's Personal Assistant to shop, learn & earn. Shop Paints, Waterproofing, Polishing material at best prices at your most convenience.",
		sections: [
			{
				image: undefined,
				heading: 'Purchase range of paints with few clicks.',
				caption:
					'RangDe APP has a complete checkout system built within it as well as other services such as chat support using Freshchat & also has Zoho Creator Portal integrated for contractors.'
			},
			{
				image: undefined,
				heading: 'Helping contractors to move paints & washing business online.',
				caption:
					"RangDe APP is a Contractor's Personal Assistant to shop, learn & earn. Shop Paints, Waterproofing, Polishing material at best prices at your most convenience."
			}
		],
		playstore_url: 'https://play.google.com/store/apps/details?id=com.rangde'
	}
];
export default projects;
