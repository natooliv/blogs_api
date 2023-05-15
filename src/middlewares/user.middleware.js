const nameValidation = (displayName) => displayName.length < 8;

const emailValidation = (req, res, next) => {
    const { email } = req.body;
    const regex = /\S+@\S+\.\S+/;

    const valido = regex.test(email);

    if (!valido) {
        return res.status(400)
        .json({ message: '"email" must be a valid email' });
    }
    return next();
};

const passwordValidation = (password) => password.length < 6;

const userValidation = (req, res, next) => {
    const { displayName, password } = req.body;
        if (displayName.length < 8 || !displayName) {
            return res.status(400)
            .json({ message: '"displayName" length must be at least 8 characters long' });
        }
       
        if (password.length < 6 || !password) {
            return res.status(400)
            .json({ message: '"password" length must be at least 6 characters long' });
        }
        
        return next();
    };

module.exports = {
    nameValidation,
    emailValidation,
    passwordValidation,
    userValidation,
};