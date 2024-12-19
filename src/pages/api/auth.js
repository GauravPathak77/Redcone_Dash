import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    // Load users.json
    const filePath = path.join(process.cwd(), 'src', 'data', 'users.json');
    const users = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    // Find user
    const user = users.find((u) => u.email === email && u.password === password);

    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Check license validity
    const currentDate = new Date();
    const expiryDate = new Date(user.licenseExpiryDate);

    if (currentDate > expiryDate) {
      return res.status(403).json({ message: 'License expired' });
    }

    // Send user data
    res.status(200).json({ user });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
