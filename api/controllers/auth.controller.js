import bcrypt from "bcrypt";
export const register = async (req, res) => {
    //db operations
    const { username, email, password } = req.body;
    // console.log(req.body);
    // console.log(username);
    // HASH THE PASSWORD
    const hashedPassword = await bcrypt.hash(password, 15);
    console.log(hashedPassword);

    //CREATE A NEW USER AND SAVE TO DB

}
export const login = (req, res) => {
    //db operations
    console.log("login endpoint");
}
export const logout = (req, res) => {
    //db operations
    console.log("logout endpoint");
}