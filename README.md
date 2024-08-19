# User Management App MVP

## Overview

The **User Management App MVP** is a web application built using **React Native** with the **Expo** framework.

## Key Features

- **React Native with Expo**: The application leverages the power of React Native for building cross-platform mobile apps, using Expo to streamline development and API communication.
- **React Native Reusables Library**: The app uses the RnReactNativeReusables component library, which provides a set of reusable components inspired by the popular **ShadCNUI** from the Next.js ecosystem, adapted for React Native.
- **Tailwind CSS with NativeWind**: Styling is handled using Tailwind CSS syntax via NativeWind, which allows for a highly customizable and responsive design.
- **API Communication**: Axios is used for communicating with external APIs, and the app is structured to easily manage these calls with hooks.
- **Backend API**: It was implemented using Baserow as the backend service, providing a simple and flexible way to manage user data.
- **Atomic Design**: The project follows the Atomic Design methodology, organizing components into atoms, molecules, and organisms for better modularity and reusability.
- **Routing**: Expo's routing libraries are used to manage navigation within the app.
- **Testing**: The app includes unit tests for components and some specific hooks. These tests ensure that the UI behaves as expected and that pagination logic is handled correctly.
- **Environment Variables**: The app requires API URL and token to be set in a `.env` file, ensuring secure and flexible configuration.

## Project Structure

- **/components**: Organized using Atomic Design principles, this folder contains atoms, molecules, and organisms.
- **/constants**: Contains all the constant values used across the app.
- **/enums**: Holds various enums for managing application states and actions.
- **/hooks**: Custom React hooks, including those for API communication and pagination.
- **/service**: Handles all interactions with the backend API.
- **/tests**: Contains unit tests for components and selected hooks.

## Setup

### Prerequisites

- Node.js
- Expo CLI
- A `.env` file with the following keys:
  - `EXPO_PUBLIC_API_URL`: The base URL of your API.
  - `EXPO_PUBLIC_API_TOKEN`: The API token for authentication.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/user-management-app-mvp.git
   cd user-management-app-mvp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file at the root of the project.
   - Add the following keys:
     ```env
     EXPO_PUBLIC_API_URL=YOUR_API_URL
     EXPO_PUBLIC_API_TOKEN=YOUR_API_TOKEN
     ```

4. Start the development server:
   ```bash
   npm run web
   ```

## Testing

To run the tests, use the following command:

```bash
npm test
```

Tests are located in the `/tests` directory, covering UI components and the `UsePagination` hook.

## Notes on Development Choices

I decided to use the **React Native Reusables Library** library because I was eager to experiment with component libraries that replicate the **ShadCN UI** experience, which is commonly used in Next.js applications, in a React Native environment. This project allowed me to successfully implement and test this approach, and I am pleased with the results.

The project is organized using **Atomic Design** to ensure that components are modular, reusable, and easy to manage as the application grows.

## API Integration

The app uses **Axios** for making HTTP requests to the backend API. The backend service is powered by **Baserow**, a spreadsheet-like backend for applications. If you need the API token, please let me know, and I can provide it.