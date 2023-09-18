import styled from 'styled-components'


const H1 = styled.h1`
    font-size: 15px
  `;

const Button = styled.button`
  font-size: 30px;
  background-color: blue;
  color: white;
`;

function App() {

  return (
    <div>
      <H1>mostafa</H1>
      <Button onClick={()=> console.log("hiclicked")}>click</Button>
    </div>
    )
}

export default App;
