# GenMan
A Full Stack Password Generator and manager
# Password Generator and Manager

A secure and feature-rich Password Generator and Manager application with options to generate strong passwords, manage them securely, and enjoy additional features such as dark mode implementation and Google Sign-In for enhanced security.

## Features

### Password Generation

- Generate strong and customizable passwords.
- Choose password length.
- Include or exclude special characters and numbers.

### Password Management

- Save passwords securely in the database.
- View, edit, and delete saved passwords.
- Hashing for enhanced security.

### User Interface

- Dark mode implementation for a comfortable user experience.
- Copy generated passwords to clipboard.

### Authentication

- Sign in securely with Google authentication.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/prajwal080501/GenMan.git
   ```

2. Install dependencies:

   ```bash
   cd GenMan
   cd client
   npm install
   ```
3. Server Dependencies
   ```bash
   cd GenMan
   cd backend
   npm install
   ```

3. Configure environment variables:

   Create a `.env` file and set the necessary variables, including API keys and database credentials.

4. Run the application:

   ```bash
   npm start
   ```

Visit `http://localhost:5173` in your browser to access the application.

## Usage

1. Generate Password:
   - Navigate to the "Dashboard" section.
   - Choose password length and select options.

2. Password Management:
   - Save generated passwords to the database securely.
   - View, edit, and delete saved passwords in the "Dashboard" section.

3. Dark Mode:
   - Toggle dark mode for a visually comfortable experience.

4. Google Sign-In:
   - Sign in securely with your Google account.

## Technologies Used

- MERN Stack (MongoDB, Express.js, React, Node.js)
- JWT JSON Web Tokens For Authorisations
- Google Sign-In API

## Security Considerations

- Passwords are securely hashed and stored in the database.
- Google Sign-In provides an additional layer of authentication.

## Contribution Guidelines

Contributions are welcome! Please fork the repository and submit a pull request with your enhancements.

## Acknowledgments
- Thanks to the [React oauth/google]([https://developers.google.com/identity/sign-in/web/sign-in](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjZtsGt94iDAxVtb2wGHVmNAaQQFnoECBEQAQ&url=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2F%40react-oauth%2Fgoogle&usg=AOvVaw0QzQwlPl1sF3BGCa4SIqP2&opi=89978449)https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjZtsGt94iDAxVtb2wGHVmNAaQQFnoECBEQAQ&url=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2F%40react-oauth%2Fgoogle&usg=AOvVaw0QzQwlPl1sF3BGCa4SIqP2&opi=89978449) for secure authentication.

Feel free to customize the README according to your project structure and specific implementation details.