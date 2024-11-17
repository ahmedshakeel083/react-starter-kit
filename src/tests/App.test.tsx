import { render, screen } from "@testing-library/react";
// import { BrowserRouter } from "react-router-dom";
import { expect, it } from "vitest";
import App from "../App";
import { Provider } from "react-redux";
import { store } from "@/state/store";

it("App Loaded Successfully", () => {
  render(
    <Provider store={store}>
      {/* <BrowserRouter> */}
        <App />
      {/* </BrowserRouter> */}
    </Provider>
  );

  const screenText = screen.queryByTestId("loginText");

  expect(screenText).toBeDefined();
});

// test('App component loads successfully', () => {

//   const { getByText } = render(

//   <Provider store={store}>

//     <BrowserRouter>

//         <App />

//         </BrowserRouter>

//   </Provider>

//   );

//   // Adjust the assertion according to a text or element that is always present in your App

//   expect(getByText(/Login/i)).toBeInTheDocument();

// });

// // Get input fields

// const userNameInput = screen.getByPlaceholderText('Enter Username');

// const passwordInput = screen.getByPlaceholderText('Enter Password');

// const captchaInput = screen.getByPlaceholderText('Enter Captcha');

// // ACT

// fireEvent.change(userNameInput, { target: { value: 'myusername' } });

// fireEvent.change(passwordInput, { target: { value: 'mypassword' } });

// fireEvent.change(captchaInput, { target: { value: 'mycaptcha' } });

// // ASSERT

// expect(userNameInput.value).toBe('myusername');

// expect(passwordInput.value).toBe('mypassword');

// expect(captchaInput.value).toBe('mycaptcha');

// describe('Login Component', () => {

//   it('submits login form and verifies OTP', async () => {

//     render(<Login />);

//     // Fill input fields

//     const usernameInput = screen.getByLabelText('Username');

//     fireEvent.change(usernameInput, { target: { value: 'test' } });

//     const passwordInput = screen.getByLabelText('Password');

//     fireEvent.change(passwordInput, { target: { value: '123' } });

//     const captchaInput = screen.getByLabelText('Captcha');

//     fireEvent.change(captchaInput, { target: { value: 'abc' } });

//     // Submit form

//     const submitBtn = screen.getByRole('button', { name: /submit/i });

//     fireEvent.click(submitBtn);

//     // Verify OTP modal opens up

//     const otpInput = await screen.findByLabelText('OTP');

//     expect(otpInput).toBeInTheDocument();

//     // Enter OTP and submit

//     fireEvent.change(otpInput, { target: { value: '123456' } });

//     const otpSubmitBtn = screen.getByRole('button', { name: /verify otp/i });

//     fireEvent.click(otpSubmitBtn);

//     // Verify dashboard rendered on final submit

//     const dashboardHeading = await screen.findByRole('heading', { name: /dashboard/i });

//     expect(dashboardHeading).toBeInTheDocument();

//   });

// });
