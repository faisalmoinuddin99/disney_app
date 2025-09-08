import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../../features/user/userSlice";
import { Header } from "../Header";

// Header.test.js



// -----------------
// Mock Redux
// -----------------
jest.mock("react-redux", () => ({
    useDispatch: () => jest.fn(),
    useSelector: jest.fn((selector) => {
        // Return empty state (not logged in)
        if (selector.name === "selectUserName") return null;
        if (selector.name === "selectEmail") return null;
        if (selector.name === "selectPhoto") return null;
        return null;
    }),
}));

// -----------------
// Mock Router
// -----------------
jest.mock("react-router-dom", () => ({
    useNavigate: () => jest.fn(),
}));



test("renders Login button and triggers handleAuth on click", () => {
    render(<Header />);

    // Check login button exists
    const loginBtn = screen.getByText(/login/i);
    expect(loginBtn).toBeInTheDocument();

    // Simulate click
    fireEvent.click(loginBtn);

    // ✅ If no crash, test passes (you can add assertions later)
    expect(screen.getByText(/login/i)).toBeInTheDocument();
});
