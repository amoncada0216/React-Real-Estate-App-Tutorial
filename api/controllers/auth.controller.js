import bcrypt from 'bcryptjs';
import prisma from 'lib/prisma';

export const register = async (req, res) => {
    const { username, email, password } = req.body;

    // Hash the pwassword (implementation not shown)

    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user object

    const newUser = await prisma.user.create({
        data: {
            username,
            email,
            password: hashedPassword,
        }
    });
}

export const login = (req, res) => {
    // Db operation to login a user
}

export const logout = (req, res) => {
    // Db operation to logout a user
}