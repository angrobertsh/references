// renderErrors()(
//   <ul id="session-errors" className="form-errors">
//     {this.props.errors.map((error, idx) => (
//       <li className="session-form-error form-error" key={`session-error-${idx}`}>
//         {error}
//       </li>
//     ))}
//   </ul>
// )

renderErrors() {
  return(
    <ul>
      {this.props.errors.map((error, i) => (
        <li key={`error-${i}`}>
          {error}
        </li>
      ))}
    </ul>
  );
}
