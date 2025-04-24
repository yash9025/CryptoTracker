# Crypto Tracker

A real-time cryptocurrency tracker application built with React, Redux, Tailwind CSS, and Redux Toolkit. This app allows users to view cryptocurrency prices, track price changes, and manage cryptocurrency data through an intuitive interface.

## Features

- Real-time cryptocurrency price tracking
- View percentage changes over 1 hour, 24 hours, and 7 days
- Display of cryptocurrency data such as price, market cap, volume, etc.
- Beautiful and responsive UI with smooth animations
- Supports multiple cryptocurrencies including Bitcoin, Ethereum, and many more
- Built using React, Redux for state management, and Tailwind CSS for styling

## Tech Stack

- **Frontend**: React, Redux, Tailwind CSS
- **State Management**: Redux Toolkit
- **API**: Uses static data for now (you can later integrate real-time data via an API like CoinGecko or CryptoCompare)
- **UI/UX**: Tailwind CSS with custom animations and styles

## Setup and Installation

Follow these steps to set up the project locally:

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14.x or above)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) package manager

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/crypto-tracker.git
2. Navigate into the project directory:
   ```bash
   cd crypto-tracker
3. Install the dependencies: Using npm:
    ```bash
   npm install
4. Start the development server: Using npm:
   ```bash
   npm start

### Project Structure
crypto-tracker/ ├── public/ │ └── index.html # Main HTML template ├── src/ │ ├── components/ # Reusable components (buttons, cards, etc.) │ ├── pages/ # Main pages like Home │ ├── redux/ # Redux slice and store configuration │ │ ├── cryptoSlice.js # Slice for managing crypto assets │ │ └── store.js # Redux store configuration │ ├── utils/ # Utility functions and static data │ ├── App.js # Root component │ ├── index.js # Main entry point for React │ └── tailwind.config.js # Tailwind CSS configuration ├── .gitignore # Git ignore file ├── package.json # Project metadata and dependencies └── README.md # This file

### Components
-Home: Displays the main dashboard with all cryptocurrencies.
-CryptoRow: Represents each row in the table displaying a cryptocurrency's data.
-PriceChange: A component for displaying price change over time.
-MiniChart: A small chart that displays trends for each cryptocurrency.

### Redux State Management
-The state for the application is managed by Redux, using Redux Toolkit for simplification.
-The cryptoSlice.js file defines the initial state and reducers such as updateAssetPrice.
-The store.js file configures the Redux store with the crypto slice reducer.


### Instructions:
1. Copy the above content and paste it into a `README.md` file in the root directory of your repository.
2. Customize the GitHub repository link under the "Clone the repository" section if needed.
3. Replace the `your-username` placeholder with your actual GitHub username or repository link in the relevant sections.
4. You can update the "Acknowledgments" section with additional libraries or services you may have used.

Once added, GitHub will automatically display the content from `README.md` on your project page.
