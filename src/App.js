import React, { useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Foto from "./img/Fundo1.webp"

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Handlee', cursive;
}
`
const ContainerPrincipal = styled.main`
  background-image: url(${Foto});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
`

const Title = styled.h1`
  width: 100%;
  text-align: center;
  padding-top: 2rem;
`

const ContainerTitle = styled.h2`
  width: 100%;
  text-align: center;

  label{
    margin-right: 1rem;
  }

  input{
    font-size: 1.2rem;
    border-radius: 10px;
  }
`

const ContainerDaysOfTheWeek = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  
  label{
    font-size: 1.2rem;
    margin-right: 1rem;
  }

  label:hover{
    border-bottom: solid;
  }
`

const ContainerInput = styled.h3`
  width: 100%;
  text-align: center;
  
  input{
    font-size: 1.2rem;
    width: 25rem;
    margin-right: 1rem;
    border-radius: 5px;
  }

  button{
    font-size: 1.2rem;
    border-radius: 5px;
    width: 5.5rem;
    cursor: pointer;
  }

  button:hover{
    box-shadow: 5px 5px 10px black;
  }

  @media only screen and (min-width: 360px) and (max-width: 800px){
    input{
        width: 15rem;
      }
    }

  @media only screen and (min-width: 412px) and (max-width: 780px){
    input{
        width: 15rem;
      }
    }
`

const ContainerList = styled.ul`
  text-align: center;
  width: 100%;

  div{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: .5rem;
    font-size: 1.2rem;
  }

  form{
    display: flex;
    width: 35%;
  }

  p{
    text-align: left;
    background: whitesmoke;
    width: 100%;
    border: solid;
    border-radius: 5px;
  }

  @media only screen and (min-width: 360px) and (max-width: 800px){
      form{
        width: 90%;
      }
    }

  @media only screen and (min-width: 412px) and (max-width: 780px){
    form{
        width: 90%;
      }
    }

  input{
    margin-left: .5rem;
    margin-right: .5rem;
    font-size: 1rem;
    border-radius: 5px;
    width: 7.3rem;
  }

  button{
    border-radius: 5px;
    width: 1.5rem;
    cursor: pointer;
  }

  button:hover{
    box-shadow: 5px 5px 10px black;
  }
`

export default function App() {
  const [input, setInput] = useState()
  const [list, setList] = useState([])

  const handleAdd = () => {
    const ConteudoInput = {
      value: input,
      id: Date.now()
    }
    setList(prevState => [...prevState, ConteudoInput])
    setInput("")
  }

  function DeleteTask(id) {
    const ListaFiltrada = list.filter(item => item.id !== id)
    setList(ListaFiltrada)
    // if(ListaFiltrada === [""])
    // console.log("All Done!");
  }


  return (
    <ContainerPrincipal>
      <GlobalStyle/>
      <Title>Minhas atividades do dia!</Title>

      <form onSubmit={(e) => e.preventDefault()}>
        <ContainerTitle>
          <label for="date">Selecione o dia: </label>
          <input id="date" type="date" name="date"></input>
        </ContainerTitle>

        <ContainerDaysOfTheWeek>
          <div>
            <input id="domingo" type="radio" name="horario"></input>
            <label for="domingo">Domingo</label>
          </div>
          <div>
            <input id="segunda" type="radio" name="horario"></input>
            <label for="segunda">Segunda</label>
          </div>
          <div>
            <input id="terça" type="radio" name="horario"></input>
            <label for="terça">Terça</label>
          </div>
          <div>
            <input id="quarta" type="radio" name="horario"></input>
            <label for="quarta">Quarta</label>
          </div>
          <div>
            <input id="quinta" type="radio" name="horario"></input>
            <label for="quinta">Quinta</label>
          </div>
          <div>
            <input id="sexta" type="radio" name="horario"></input>
            <label for="sexta">Sexta</label>
          </div>
          <div>
            <input id="sabado" type="radio" name="horario"></input>
            <label for="sabado">Sábado</label>
          </div>
        </ContainerDaysOfTheWeek>

        <ContainerInput>
          <input onChange={(e) => { setInput(e.target.value) }} value={input} placeholder={"Digite e pressione 'Enter'"} />
          <button onClick={() => { handleAdd() }}>Adicionar</button>
        </ContainerInput>
      </form>

      <ContainerList>
        {list.map(item => (
        <div>
          <form>
            <p>{item.value}</p>
            <input id="time" type="time" name="time"></input>
            <button onClick={() => { DeleteTask(item.id) }}>X</button>
          </form>
        </div>
        ))}
      </ContainerList>

    </ContainerPrincipal>
  )
}

