var app = angular.module('app', ['ngRoute', 'ngAnimate']).config(function($routeProvider) {
	$routeProvider.when('/about', {
		templateUrl: 'templates/about.html'
	});

	$routeProvider.when('/qualifications', {
		controller: 'QualCtrl',
		templateUrl: 'templates/qualifications.html'
	});

	$routeProvider.when('/work', {
		controller: 'WorkCtrl',
		templateUrl: 'templates/work.html'
	});

	$routeProvider.when('/download', {
		templateUrl: 'templates/download.html'
	});

	$routeProvider.otherwise({
		redirectTo: '/home',
		templateUrl: 'templates/home.html'
	});
});

var MainCtrl = function($scope) {
	
};

var QualCtrl = function($scope) {
	$scope.languages = [
		'HTML',
		'CSS',
		'Javascript',
		'Java',
		'Python',
		'ActionScript 3',
		'C/C++',
		'Scheme'
	];
	$scope.softwares = [
		'Apache TomCat',
		'Node.js',
		'AngularJS',
		'Firebase',
		'MySQL',
		'Git',
		'Flash',
		'Photoshop'
	];
};

var WorkCtrl = function($scope) {
	$scope.jobs = [
		{
			'company': 'Independent Research Proposal',
			'role': 'Personal Project',
			'location': 'Cleveland, OH',
			'date': 'January 2014 - May 2014',
			'image': 'images/research.png',
			'link': '/docs/Research_Proposal.pdf',
			'points': [
				'Research a thorough understanding of Transport Layer Security protocol',
				'Investigate known vulnerabilities of TLS',
				'Develop a set of best practicies for internet security'
			]
		},{
			'company': 'EveryKey',
			'role': 'Software Developer',
			'location': 'Cleveland, OH',
			'date': 'October 2013 - Present',
			'image': 'images/ek-web.png',
			'link': 'http://www.everykey.com',
			'points': [
				'Develop browser plugins and mobile applications to interface with hardware via Bluetooth',
				'Involved in product design of Bluetooth wristband',
				'Perform market research and analyze results',
				'Collaborate remotely with electrical engineers and industrial design firm in China'
			]
		},{
			'company': 'American Greetings',
			'role': 'Web Development Intern',
			'location': 'Cleveland, OH',
			'date': 'June 2013 - August 2013',
			'image': 'images/ag-web.png',
			'link': 'http://www.americangreetings.com',
			'points': [
				'Prototyped solution for creating interactive ecards using lateset browser based technologies',
				'Presented technical solution to business and marketing departments',
				'Placed 3rd in company hackathon with a genetic algorithm for artificial image evolution',
				'Maintained front and back end functionality across multiple websites and brands'
			]
		},{
			'company': 'Metro Swim Shop',
			'role': 'Web Develooper',
			'location': 'Cleveland, OH',
			'date': 'June 2011 - August 2013',
			'image': 'images/mss-web.png',
			'link': 'http://www.metroswimshop.com',
			'points': [
				'Managed multiple projects in various stages of develpoment using Trello',
				'Design and implemented various backend systems for inventory and product information management',
				'Increased sales by implementing Google Adwords Conversion tracking and Google Analytics tracking',
				'Integrated third party business services such as Endicia postage and First Data merchant technologies',
				'Improved website performance and stability by designing and implementing custom caching system'
			]
		},{
			'company': 'Case Western Call Center',
			'role': 'Fund Raiser',
			'location': 'Cleveland, OH',
			'date': 'November 2010 - April 2011',
			'image': 'images/case-web.png',
			'link': 'http://www.case.edu',
			'points': [
				'Raised money for the Case Western Reserve Annual Fund',
				'Built rapport with people outside the university to improve alumni relations',
				'Updated university alumni information database'
			]
		}
	];
};