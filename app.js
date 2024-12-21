// Create a React component
function WelcomeMessage() {
    return (
      <div>
        <h2>Hello from React!</h2>
        <p>This section is rendered using React.</p>
      </div>
    );
  }
  
  // Render the React component into the DOM
  const root = document.getElementById('react-root');
  ReactDOM.render(<WelcomeMessage />, root);
  