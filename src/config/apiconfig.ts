const endPointUrl: string | void = (() => {
	switch (process.env.ENDPOINT) {
		case 'msw':
			console.log('msw');
			return '';
		case 'local':
			return 'http://localhost:8000';
		case 'production':
			return 'production-url';
		default:
			return 'invalid endpoint';
	}
})();

export default endPointUrl;
