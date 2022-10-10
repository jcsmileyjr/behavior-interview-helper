import "./editPage.css";

const EditPage = () => {
  return (
    <div className="editPage--container">
      <header>Behavior Interview Helper</header>
      <main>
        <h1>Edit Recording</h1>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div>
          <button type="button">Save</button>
          <button type="button">Redo</button>
        </div>
      </main>
    </div>
  );
};

export default EditPage;
