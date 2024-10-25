export const SecondComponent = () => {

  const books = [
    "El Psicoanalista",
    "La gran estafa",
    "La paciente silenciosa",
    "Los vagabundos de Dios",
    "El brillo de la luciernaga",
    "La melancolia de los feos",
    "El club de los psicopatas",
    "El templo de los sueños",
    "Otro libro"
  ];


  return (
    <>
      <h1>SecondComponent</h1>
      <div>
        <ul>
          {books.length >= 1 ?
            (
                books.map((book, index) => {
                  return <li key={ index }> { book } </li>
                })
            ) :
            (
              <p>No existen libros</p>
            )
          }
        </ul>
      </div>
    </>
  )
}