// For CORS support
export default (req, res, next) => {
	// const reqOrigin = req.get('origin');
	const reqOrigin = '*';

	res.header('Access-Control-Allow-Credentials', 'true');
	res.header('Access-Control-Allow-Origin', reqOrigin);
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');

	// intercept OPTIONS method
	if ('OPTIONS' === req.method) {
		res.send(200);
	}
	else {
		next();
	}
};
