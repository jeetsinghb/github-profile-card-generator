# GitHub Profile Card Maker 🎨

## Description 📖

GitHub Profile Card Maker is a web application that allows you to generate a stylish profile card by entering any GitHub username. It fetches the user’s data from GitHub and displays it in a clean and responsive card layout. You can also toggle between **light** and **dark** themes and download the generated profile card as an image. 

This application is built using **React**, **TailwindCSS**, and the **GitHub API**.

---

## Features 🌟

- **Responsive Design**: The profile card looks great on both desktop and mobile.
- **Light/Dark Mode**: Switch between light and dark modes to suit your preference.
- **Error Handling**: Clear error messages for invalid usernames, rate limits, and other API issues.
- **User Feedback**: Get instant feedback with **toast notifications** for success, error, and info messages.
- **Username Validation**: Validates GitHub usernames to ensure they meet the required format.
- **Profile Details**: Shows profile picture, name, location, bio, and stats like followers, following, and repositories.
- **Download Profile**: Download your generated profile card as an image.
- **No Caching**: Works in real-time by fetching the latest data every time a new username is entered.

---

## Technologies Used ⚙️

- **React** – JavaScript library for building user interfaces.
- **TailwindCSS** – A utility-first CSS framework for fast and responsive design.
- **GitHub API** – To fetch user profile data from GitHub.
- **react-hot-toast** – For displaying toast notifications.
- **react-loading-skeleton** – For displaying skeleton loaders while the profile is loading.
- **html2canvas** – To capture and download the profile card as an image.

---

## Installation & Setup 🛠️

### 1. Clone the Repository

```bash
git clone https://github.com/jeetsinghb/github-profile-card-maker.git
cd github-profile-card-maker
```

### 2. Install Dependencies

Make sure you have **Node.js** and **npm** installed. If not, you can download and install them from [here](https://nodejs.org/).

Once that's done, run the following command to install the necessary dependencies:

```bash
npm install
```

### 3. Run the Application

After the dependencies are installed, run the following command to start the development server:

```bash
npm start
```

Visit `http://localhost:3000` in your browser to view the app.

---

## How It Works 🔍

1. **Enter a GitHub username** in the input field.
2. **Press the "Generate" button** to fetch the user’s GitHub profile.
3. If the profile is found, the details will be displayed in a card with the user's **avatar**, **name**, **location**, **bio**, and **stats** (followers, following, repositories).
4. You can **switch themes** using the toggle button (light or dark mode).
5. If the username is invalid or there’s an error, a toast notification will show the error message.
6. You can **download the profile card** as an image by clicking the "Download" button.
7. The app ensures that **valid usernames** are entered, and if you attempt to enter an invalid username, an error message will be displayed.

---

## Contributing 💡

Feel free to fork this project and submit pull requests. Here are a few ways you can contribute:

- Report bugs or suggest features.
- Improve the app’s UI/UX.
- Help with optimizing code and performance.

---

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

🎨 Enjoy making your GitHub profile card! 😄

---

This `README.md` provides a solid overview of the project, explaining what it does, how to use it, and how others can contribute. It also includes sections for installation, features, and contact details to make it more user-friendly.