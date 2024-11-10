import User from "../model/User.js";

export const GetUser = async (req, res) => {
    try {
        var user = await User.find(
            res.status(200).json(user)
        )
    } catch (error) {
        res.status(401).json({ message: error.message })
    }
}

export const LoginUser = async (req, res) => {
    const user = req.body;
    try {
        const userDB = await User.findOne({ email: user.email, password: user.password })
        if (!userDB) return res.status(404).json(false);
        res.status(201).json(userDB);
    } catch (error) {
        res.status(404).json(false);
    }
}

export const SignupUser = async (req, res) => {
    const { firstname, lastname, email, password, address } = req.body
    try {
        let user = await User.findOne({ email: email });
        if (user) { res.status(200).json({ message: "User has been already registered" }) }
        else {
            const newUser = new User({
                firstname,
                lastname,
                email,
                password,
                address,
                isAdmin: false
            })
            await newUser.save()
            res.status(201).json({ message: "User crreated sucessfullly", user: newUser })
        }
    } catch (error) {
        res.status(401).json({ message: error.message })
    }
}