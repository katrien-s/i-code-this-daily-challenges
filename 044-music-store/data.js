const albums = [
	{
		artist: 'African Head Charge',
		title: 'A Trip to Bolgatanga',
		'release-date': 2023,
		'record-label': 'On-U-Sound',
		'wholesale price': 15,
		description:
			'Where previous albums have been a melting pot of global influences, on their new LP African Head Charge have but one place in mind. »A Trip To Bolgatanga« is a musical journey to Bonjo’s current hometown in north Ghana. A psychedelic travelogue across the landscape featuring their trademark hand percussion and group chanting augmented with rumbling bass, mutated horns, dubbed out effects, wild wah-wah, haunted voodoo dancehall, synthetic swells, disco congas, tumbling layers of electronic effects, blues-inflected woodwind, and funky organ.',
		rating: 4,
		// url:,
		explore: true,
		'top-sales': false,
		recommended: true
	},
	{
		artist: 'Carmen Villain',
		title: 'Music From The Living Monument',
		'release-date': 2023,
		'record-label': 'Smalltown Supersound',
		'wholesale price': 15,
		description:
			"Each tableau is bound together by Carmen Villain’s hypnotic score in which the audience is taken on a meditative journey through vibrant tableaus in a dreamlike universe. Carmen Villain's score is a suspension of time where her music is seeking a new form of slow-moving minimalism.",
		rating: 4,
		// url: ,
		explore: true,
		'top-sales': false,
		recommended: true
	},
	{
		artist: 'Aphex Twin',
		title: 'Blackbox Life Recorder 21f / in a room7 F760',
		'release-date': '28-07-2023',
		'record-label': 'Warp',
		'wholesale price': 18,
		description:
			'First AFX material in five years. The machines co-opted in production are as complex as the Weirdcore artwork, layering signature sombre ambient chords with intricate drum programming.',
		rating: 4,
		// url: ,
		explore: false,
		'top-sales': true,
		recommended: false
	},
	{
		artist: 'Matana Roberts',
		title: 'Coin Coin Chapter Five: In The Garden...',
		'release-date': '11-09-2023',
		'record-label': 'Constellation',
		'wholesale price': 18,
		description:
			'Avant folk-jazz-blues visionary Matana Roberts braids African-American history and music in a remarkable 5th chapter to her epic, ongoing 12-part cycle - co-produced by TV on the Radio’s Kyp Malone, overseen by the spirit of Jaimie Branch (RIP), and performed by her 11-piece ensemble.',
		rating: 4,
		explore: false,
		'top-sales': true,
		recommended: false
		// url: ,
	},
	{
		artist: 'Loraine James',
		title: 'Gentle Confrontation',
		'release-date': '22-09-2023',
		'record-label': 'Hyperdub',
		'wholesale price': 16,
		description:
			'Loraine James lets her influences run wild on her third Hyperdub volume, sampling DNTEL, Telefon Tel Aviv and Lusine on tracks that dig into her emotional core. Featuring guest appearances from Marina Herlop, keiyaA, Corey Mastrangelo, Eden Samara, George Riley and Contour.',
		rating: 4,
		// url: ,
		explore: false,
		'top-sales': true,
		recommended: false
	},
	{
		artist: 'Laurel Halo',
		title: 'Atlas',
		'release-date': '22-09-2023',
		'record-label': 'Awe',
		'wholesale price': 15,
		description:
			"Laurel Halo's long-in-the-making debut album for her newly minted Awe label is dazzling; a mix of weightless jazz, orchestral and drift energies that’s both elusive and engrossing; just when you think you have the measure of it, it shapeshifts into something else. Made of rarified material; it bends the contemporary “ambient” template into something almost entirely new, creating a blanket of pure atmosphere that wafts over you like a cloud, but which fully comes to life with closer, deep listening.",
		rating: 4,
		// url: ,
		explore: false,
		'top-sales': false,
		recommended: true
	},
	{
		artist: 'Yann Novak',
		title: 'The Voice of Theseus',
		'release-date': '07-07-2023',
		'record-label': 'Room 40',
		'wholesale price': 15,
		description: 'The Voice of Theseus by Yann Novak, via Room 40.',
		rating: 4,
		// url: ,
		explore: false,
		'top-sales': false,
		recommended: true
	},
	{
		artist: 'Ana Roxanne & DJ Python',
		title: 'Natural Wonder Beauty Concept',
		'release-date': '14-07-2023',
		'record-label': 'Mexican Summer',
		'wholesale price': 15,
		description:
			'Tender mutuals, ambient starlet Ana Roxanne and dembow mutator DJ Python, double down on their acclaimed Times Square DJ set with a crystalline definition of trip-gaze subtractions like a whimsical fusion of Julee Cruise, Boards of Canada,  Seefeel and Cucina Povera.',
		rating: 4,
		// url: ,
		explore: false,
		'top-sales': false,
		recommended: true
	},
	{
		artist: 'Spivak',
		title: 'You Win Again',
		'release-date': '14-07-2023',
		'record-label': 'Ecstatic',
		'wholesale price': 12,
		description:
			'Bursting with bittersweet, memorable songs, Maria Spivak follows her spectacular and highly sought-after debut album with this new LP for Ecstatic, operating at the intersection of blazed synthpop, folk and shoegaze with a sparkling Drexciyan dimension. Real strong gear that comes highly recommended if yr into anything from Cocteau Twins to Junior Boys, Jonnine to Jessy Lanza.',
		rating: 4,
		// url: ,
		explore: false,
		'top-sales': false,
		recommended: true
	},
	{
		artist: 'Corin',
		title: 'Lux Aeterna',
		'release-date': '14-07-2023',
		'record-label': 'UIQ',
		'wholesale price': 14,
		description:
			'Lee Gamble’s UIQ label unveils a second album from Filipina-Australian artist Corin Ileto, deploying a brace of swarming alien chorales and rapturous digital rave noise to explore the idea of sound as a sentient being. Bold and operatic, cinematic and cybernetic, it comes highly recommended if you’re into Lorenzo Senni, Amnesia Scanner, Caterina Barbieri, Fractal Fantasy or Bitstream - remember them?',
		rating: 4,
		// url: ,
		explore: false,
		'top-sales': false,
		recommended: true
	},
	{
		artist: 'Kode9, Burial',
		title: 'Infirmary / Unknown Summer',
		'release-date': '20-07-2023',
		'record-label': 'Fabric',
		'wholesale price': 3,
		description:
			"Kode9's hybrid stepper 'Infirmary' was one of the clear highlights of his recent Sonar mix, and it's paired here with a 10-minute deep trance slusher from Burial.",
		rating: 4,
		// url: ,
		explore: false,
		'top-sales': false,
		recommended: true
	},
	{
		artist: 'Mary Jane Leach',
		title: 'Woodwind Multiples',
		'release-date': '07-07-2023',
		'record-label': 'Modern Love',
		'wholesale price': 16,
		description:
			"Mary Jane Leach is a composer focussed on the physicality of sound, its acoustic properties and how they interact with space. She has played an instrumental role in NYC’s pioneering Downtown scene alongside Arthur Russell, Ellen Fullman, Peter Zummo, Philip Corner and Arnold Dreyblatt, as well as devoting years to the preservation and reappraisal of Julius Eastman’s work since his death in 1990. 'Woodwind Multiples' is her second album for Modern Love.",
		rating: 4,
		// url: ,
		explore: true,
		'top-sales': false,
		recommended: false
	},
	{
		artist: 'Baldruin',
		title: 'Relikte Aus Der Zukunft',
		'release-date': '20-07-2023',
		'record-label': 'Fabric',
		'wholesale price': 16,
		description:
			'Peru’s incredible Buh label continues to wade into contemporary experimental waters alongside their impeccable reissue series, here presenting a set of colourful instrumental diversions from Johannes Schebler aka Baldruin - yours to check out if you’re into Piotr Kurek, László Hortobágyi, Christos Chondropoulos or Wojciech Rusin.',
		rating: 4,
		// url: ,
		explore: true,
		'top-sales': false,
		recommended: false
	},
	{
		artist: 'Bas Relief',
		title: 'Insulary',
		'release-date': '18-07-2023',
		'record-label': 'Quiet Time Tapes',
		'wholesale price': 14,
		description:
			'Quiet Time Tapes, the label behind releases from Ulla, Debit, Kareem Lotfy, Huerco S. etc return with an album of feather-light autotuned IDM-pop somewhere between Dntel and Organ Tapes.',
		rating: 4,
		// url: ,
		explore: false,
		'top-sales': false,
		recommended: true
	},
	{
		artist: 'Yushh',
		title: 'Look Mum No Hands',
		'release-date': '02-03-2023',
		'record-label': 'Wisdom Teeth',
		'wholesale price': 8,
		description:
			'Ascendant Bristol producer Yushh debuts a deft sound bending slow/fast ambient techno, broken beats and meter-messing footwork jungle on her killer venture for Facta & K-Lone’s label.',
		rating: 4,
		// url: ,
		explore: false,
		'top-sales': false,
		recommended: true
	},
	{
		artist: 'Andy Stott',
		title: 'Faith In Strangers',
		'release-date': '17-11-2014',
		'record-label': 'Modern Love',
		'wholesale price': 16,
		description:
			'Faith In Strangers’ was recorded between January 2013 and June 2014, and was edited and sequenced in July 2014. Making use of on an array of instruments, field recordings, found sounds and vocal treatments, it’s a largely analogue variant of hi-tech production styles arcing from the dissonant to the sublime.',
		rating: 4,
		// url: ,
		explore: false,
		'top-sales': false,
		recommended: true
	},
	{
		artist: 'Christophe De Babalon',
		title: "If You're Into It, I'm Out Of It",
		'release-date': '31-03-2023',
		'record-label': 'Cross Fade Enter Tainment [CFET]',
		'wholesale price': 20,
		description:
			"A late ‘90s neo-noir ambient jungle masterpiece, Christoph De Babalon’s 'If You’re Into It, I’m Out Of It' sounds something like Thomas Köner re-assembling fierce, unrelenting D&B with his frozen gear. Now a quarter of a century old, it still occupies its own distinct notch on the continuum; copied endlessly, never bettered.",
		rating: 4,
		// url: ,
		explore: false,
		'top-sales': false,
		recommended: true
	},
	{
		artist: 'Nondi',
		title: 'Flood City Trax',
		'release-date': '31-03-2023',
		'record-label': 'Planet Mu Records Ltd.',
		'wholesale price': 14,
		description:
			'‘Flood City Trax’ is an exceptional debut LP of dare-to-differ footwork and warped post-Detroit styles by Nondi_, who hails from a small town in backwater Pennsylvania, and makes brilliant music defined by its detachment from IRL scenes - RIYL Jlin, Vladislav Delay, Helena Celle/Otherworld, Teresa Winter, Jamal Moss.',
		rating: 4,
		// url: ,
		explore: false,
		'top-sales': false,
		recommended: true
	},
	{
		artist: 'Various Artists',
		title: 'Place: Tunisia - Curated by Azu Tiwaline and Shinigami San',
		'release-date': '21-04-2023',
		'record-label': 'Air Texture',
		'wholesale price': 12,
		description:
			'Azu Tiwaline & Shinigami San preview their Air Texture compilation thru four tracks of roiling, arid soundscape, deep techno and fantasy sci-fi tribalism ',
		rating: 4,
		// url: ,
		explore: false,
		'top-sales': false,
		recommended: true
	}
];
