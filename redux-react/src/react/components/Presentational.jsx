import React from "react";

export function Presentational() {



  return (
    <div>
      <h2>Type in a new Message:</h2>
      <input value={this.state.input} onChange={this.handleChange} />
      <br />
      <button onClick={this.submitMessage}>Submit</button>
      <ul>
        {this.props.messages.map((message, idx) => {
          return <li key={idx}>{message}</li>;
        })}
      </ul>
    </div>
  );
}

// export class Presentatio extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       input: "",
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.submitMessage = this.submitMessage.bind(this);
//   }
//   handleChange(event) {
//     this.setState({
//       input: event.target.value,
//     });
//   }

//   // Exemplo de gerencimento local do Componente e gerenciamento pelo redux do state global
//   submitMessage() {
//     this.setState({
//       input: "",
//     });
//     this.props.submitNewMessage(this.state.input);
//   }
//   render() {
//     return (
//       <div>
//         <h2>Type in a new Message:</h2>
//         <input value={this.state.input} onChange={this.handleChange} />
//         <br />
//         <button onClick={this.submitMessage}>Submit</button>
//         <ul>
//           {this.props.messages.map((message, idx) => {
//             return <li key={idx}>{message}</li>;
//           })}
//         </ul>
//       </div>
//     );
//   }
// }
