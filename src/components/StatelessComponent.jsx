const StatelessComponent = ({ title, message }) => {
  return (
    <div style={{ padding: "1rem", border: "1px solid gray", borderRadius: "8px" }}>
      <h2>Stateless Component</h2>
      <h3>{title}</h3>
      <p>{message}</p>
    </div>
  );
};

export default StatelessComponent;
