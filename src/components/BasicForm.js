import { useState } from "react";

const BasicForm = (props) => {
  const [users, setUsers] = useState([]);

  const [nameIsValid, setNameIsValid] = useState(true);
  const [lastNameIsValid, setLastNameIsValid] = useState(true);
  const [emailIsValid, setEmailIsValid] = useState(true);

  const [isTouched, setIsTouched] = useState(true);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const save = {
    firstName: firstName,
    lastName: lastName,
    email: email,
  };

  const firstNameInput = (e) => {
    setFirstName(e.target.value);
    setNameIsValid(true);
    setIsTouched(false);
    if (firstName.trim().length < 3 || firstName.trim().length > 7) {
      setNameIsValid(false);
      setIsTouched(true);
      return;
    }
  };
  const lastNameInputHandler = (e) => {
    setLastName(e.target.value);
    setLastNameIsValid(true);
    setIsTouched(false);

    if (lastName.trim().length < 3 || lastName.trim().length > 7) {
      setLastNameIsValid(false);
      setIsTouched(true);
      return;
    }
  };

  const emailInputHandler = (event) => {
    setEmail(event.target.value);
    setEmailIsValid(true);
    setIsTouched(false);
    const email1 = !String(event.target.value)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    if (email1) {
      setEmailIsValid(false);
      setIsTouched(true);
    }
  };
  const onsubmitHandler = (e) => {
    e.preventDefault();

    if (!isTouched) {
      setUsers([...users, save]);
      setFirstName("");
      setLastName("");
      setEmail("");
    }
  };
  console.log(users);

  const nameInputClasses = nameIsValid
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={onsubmitHandler}>
      <div className={nameInputClasses}>
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstName}
            onChange={firstNameInput}
          />
          {!nameIsValid && (
            <p style={{ color: "red" }}>
              the name must contain a minimum of 4 and a maximum of 7 words
            </p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastName}
            onChange={lastNameInputHandler}
          />
          {!lastNameIsValid && (
            <p style={{ color: "red" }}>
              last name must contain a minimum of 3 and a maximum of 7 words
            </p>
          )}
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={email}
          onChange={emailInputHandler}
        />
        {!emailIsValid && (
          <p style={{ color: "red" }}>Please enter a valid @ Email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={isTouched}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
