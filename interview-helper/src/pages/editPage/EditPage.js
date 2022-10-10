import "./editPage.css";

const EditPage = () => {
  return (
    <div className="editPage--container">
      <header>
        <p className="header__title--style">Behavior Interview Helper</p>
      </header>
      <main>
        <h1>Edit Recording</h1>
        <div className="recordingPage__content--container">
          <p className="recordingPage__content--style">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="recordingPage__button--container">
          <button className="recordingPage__SaveButton--style" type="button">Save</button>
          <button className="recordingPage__RedoButton--style" type="button">Redo</button>
        </div>
      </main>
    </div>
  );
};

export default EditPage;
