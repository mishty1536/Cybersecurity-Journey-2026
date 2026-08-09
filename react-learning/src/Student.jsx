function Student({name, branch, age, city, isCaptain}) {
  return (
    <div>
      <h4>Name: {name}</h4>
      <p>Branch: {branch}</p>
      <p>Age: {age}</p>
      <p>City: {city}</p>
      <p>Captain: {isCaptain ? "YES" : "NO"}</p>
    </div>
  );
}

export default Student;