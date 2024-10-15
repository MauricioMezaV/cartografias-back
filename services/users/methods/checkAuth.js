const jwt = require('jsonwebtoken');

const checkAuth = async (context, route, request) => {
	let token;
	const { headers } = request

	if(context.headers.authorization && context.headers.authorization.startsWith('Bearer')){
		try{
			token = context.headers.authorization.split(' ')[1];
			const decoded = jwt.verify(token, process.env.JWT_SECRET)
			context.usuario = await this.adapter.findById(decoded.id)
		} catch (e){
			return context.status(404).json({msg: 'Hubo un error'})
		}
	}
	if(!token){
		const error = new Error('Token No Valido')
		return context.status(401).json({ msg: error.message })
	}
};

module.exports = checkAuth;
