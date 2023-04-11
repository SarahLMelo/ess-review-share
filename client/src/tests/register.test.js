import { render, fireEvent, screen } from "@testing-library/react";
import UserRegister from "../pages/UserRegister";

test("updates form inputs and submits form", async () => {
  render(<UserRegister />);

  const firstNameInput = screen.getByPlaceholderText("Name*");
  fireEvent.change(firstNameInput, { target: { value: "John" } });
  expect(firstNameInput.value).toBe("John");

  const passwordInput = screen.getByPlaceholderText("Password*");
  fireEvent.change(passwordInput, { target: { value: "Password123!" } });
  expect(passwordInput.value).toBe("Password123!");

  const usernameInput = screen.getByPlaceholderText("Username*");
  fireEvent.change(usernameInput, { target: { value: "johndoe" } });
  expect(usernameInput.value).toBe("johndoe");

  const emailInput = screen.getByPlaceholderText("Email*");
  fireEvent.change(emailInput, { target: { value: "john@doe.com" } });
  expect(emailInput.value).toBe("john@doe.com");

  const dateOfBirthInput = screen.getByLabelText("Date of birth");
  fireEvent.change(dateOfBirthInput, { target: { value: "1990-01-01" } });
  expect(dateOfBirthInput.value).toBe("1990-01-01");

  const phoneInput = screen.getByPlaceholderText("Phone");
  fireEvent.change(phoneInput, { target: { value: "123456789" } });
  expect(phoneInput.value).toBe("123456789");

  const locationInput = screen.getByPlaceholderText("Location");
  fireEvent.change(locationInput, { target: { value: "New York" } });
  expect(locationInput.value).toBe("New York");

  const submitButton = screen.getByRole("button", { name: "Register" });
  fireEvent.click(submitButton);

  // Add mock for fetch to test the request
  const mockFetch = jest.fn(() => Promise.resolve({ status: 201 }));
  jest.spyOn(window, "fetch").mockImplementation(mockFetch);

  // Check that fetch was called with the correct data
  expect(mockFetch).toHaveBeenCalledWith("http://localhost:4002/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "John",
      username: "johndoe",
      email: "john@doe.com",
      description: "O usuário ainda não possui descrição cadastrada",
      password: "Password123!",
      birthdate: "1990-01-01T00:00:00.000Z",
      phone: "123456789",
      location: "New York",
    }),
  });

  // Check that the form was reset
  expect(firstNameInput.value).toBe("");
  expect(passwordInput.value).toBe("");
  expect(usernameInput.value).toBe("");
  expect(emailInput.value).toBe("");
  expect(dateOfBirthInput.value).toBe("");
  expect(phoneInput.value).toBe("");
  expect(locationInput.value).toBe("");
});
