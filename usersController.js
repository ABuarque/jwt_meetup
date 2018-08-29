import jwt from "jsonwebtoken";

const MOCKED_LOGIN = "capetao.flag@coldemail.com";
const MOCKED_PASSWORD = "VACA@MONSTRO";

const user = {
    email: MOCKED_LOGIN,
    password: MOCKED_PASSWORD,
};

class Controller {

    async validateLogin(req, res, next) {
        const { email, password } = req.body;
        if(!email || !password)
            return res.status(422).send({ msg: "Missing login attributes." });

        if(email === MOCKED_LOGIN && password === MOCKED_PASSWORD) {
            const payload = {
                email: email,
            };
            const config = {
                expiresIn: '240h',
            };
            const authToken =  jwt.sign(payload, process.env.AUTH_SECRET, config);

            const currentUser = {
                email: user.email,
                password: user.password,
            };

            currentUser.token = authToken;
            return res.status(200).json(currentUser);
        }
        return res.status(403).json({ msg: "Invalid login and password." });
    }

    async getUserData(req, res, next) {
        const givenToken = req.get("Authorization");
        console.log("Given token: " + givenToken);
        if(!givenToken)
            return res.status(401).json({ msg: "Missing Authorization." });
        try {
            const tokenPayload = jwt.verify(
                        givenToken, process.env.AUTH_SECRET);
            return res.status(200).json(user);
        } catch (e) {
            return res.status(401).send("Unauthorized.");
        }
    }
}

export default Controller;
