export default function User({ users }) {
  const boxStyle = {
    border: "2px solid black",
    borderRadius: "10px",
    padding: "10px",
    margin: "20px",
  };
  return (
    <div style={boxStyle}>
      <h3 style={{ color: "blue" }}>User Name : {users.name}</h3>
      <h4 style={{ color: "green" }}>User Email : {users.email}</h4>
    </div>
  );
}
