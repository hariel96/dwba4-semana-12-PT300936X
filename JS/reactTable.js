class Table extends React.Component {
  render(){
    return <div>
        <h2 id="title">Componentes curriculares</h2>
        <table id="table">
          <tbody>
            <tr>
              <th>DISCIPLINA</th>
              <th>CARGA</th>
              <th>PERIODO</th>
            </tr>
            <tr>
              <td>Sistemas Operacionais</td>
              <td>66.7</td>
              <td>Noturno</td>
            </tr>
            <tr>
              <td>Inglês</td>
              <td>33.3</td>
              <td>Noturno</td>
            </tr>
            <tr>
              <td>Laboratório de Estruturas de Dados e Programação</td>
              <td>33.3</td>
              <td>Noturno</td>
            </tr>
            <tr>
              <td>Introdução a Banco de Dados</td>
              <td>66.7</td>
              <td>Noturno</td>
            </tr>
          </tbody>
        </table>
    </div>
  }
}
ReactDOM.render(<Table />, document.getElementById('reactTable'));