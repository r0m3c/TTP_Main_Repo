export default function Person({ id, name, age }) {
    return (
      <ul key={id}>
        <li>{name}</li>
        <li>{age}</li>
      </ul>
    );
}