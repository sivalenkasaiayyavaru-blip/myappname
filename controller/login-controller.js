const login_model = require("../model/login-model")

exports.loginctrl = (req, res) => {
    data = req.body
    console.log('loginctrl:', data)
    login_model.loginMdl(data, (err, results) => {
        console.log('results length',results.length)
        if (err) {
            console.log('Error fetching items:', err)
            return res.status(500).json({ message: "Database Error" })
        } else if (results.length > 0) {
            return res.status(200).json({
                status: 200,
                data: results,
                message: "Items fetched successfully"
            });
        }
    })
}