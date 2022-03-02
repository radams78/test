import {render, fireEvent, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'
import { NewItemField } from "../newitemfield";

test('adds new task', async () => {
  let calledServer = false;

  function addNewTask(description : string) {
    if (description === "Hello world") calledServer = true;
  }

  render(<NewItemField
    addNewTask = {(description) => addNewTask(description)}
    />);

  const inputField = screen.getByRole("textbox");
  await userEvent.type(inputField, "Hello world{enter}");
  expect(calledServer).toBe(true);
});

test('throws error if empty', async () => {
  let calledServer = false;

  function addNewTask(description : string) {
    if (description === "Hello world") calledServer = true;
  }

  render(<NewItemField
    addNewTask = {(description) => addNewTask(description)}
    />);

  const inputField = screen.getByRole("textbox");
  await userEvent.type(inputField, "{enter}");
  expect(screen.getByText("Description", {exact: false})).toHaveTextContent("Description cannot be empty");
});
