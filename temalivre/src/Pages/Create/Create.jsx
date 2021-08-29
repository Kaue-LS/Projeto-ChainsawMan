import * as S from './styled';
import { Title } from '../../Components/Title/styled';
import { useState } from 'react';
import { Api } from '../../Api/Api';
import './style.scss'
import { useHistory } from 'react-router-dom';

export default function Create() {

  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [specie, setSpecie] = useState('');
  const [status, setStatus] = useState('');
  const [genre, setGenre] = useState('');
  let [contract, setContract] = useState([""]);

  const history = useHistory();
  // https://stackoverflow.com/questions/55230842/react-hooks-dynamic-input

  const item = {
    name: name,
    url: url,
    specie: specie,
    status: status,
    genre: genre,
    contract: contract
  }


  const submitHandler = async event => {

    event.preventDefault();

    const request = await Api.buildApiPostRequest(Api.createUrl(), item)
    .catch(e => {
      console.error('Erro ao tentar adicionar o item ao banco: ', e);
    })

    const result = await request.json();
    const id = result._id;

    history.push(`/view/${id}`,item);

  }


  return (
    <S.Area className='plain'>
      <Title>Create a new character:</Title>

      <S.Form onSubmit={submitHandler}>

        <S.Label htmlFor="name">Name</S.Label>
        <S.Input id="name" type="text" onChange={e => setName(e.target.value)} required></S.Input>

        <S.Label htmlFor="url">URL image</S.Label>
        <S.Input id="url" type="text" onChange={e => setUrl(e.target.value)} required></S.Input>

        <S.Label htmlFor="specie">Specie</S.Label>
        <S.Select id="specie" onChange={e => setSpecie(e.target.value)} required>
          <option value="" hidden>-</option>
          <option value="Demon">Demon</option>
          <option value="Fiend">Fiend</option>
          <option value="Human">Human</option>
          <option value="Hybrid">Hybrid</option>


        </S.Select>
        <S.Label htmlFor="status">Status</S.Label>
        <S.Select id="status" onChange={e => setStatus(e.target.value)} required>
          <option value="" hidden>-</option>
          <option value="Alive">Alive</option>
          <option value="Deceased">Deceased</option>


        </S.Select>

        <S.Label htmlFor="genre">Genre</S.Label>
        <S.Select id="genre" onChange={e => setGenre(e.target.value)} required>
          <option value="" hidden>-</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>

        </S.Select>

        {/* <S.Label htmlFor="contract">Contract {i}</S.Label>
        <S.Select id="contract" onChange={e => setContract(e.target.value)} required>
          <option value="" hidden>-</option>
          <option value="No contract">No contract</option>
          <option value="Chainsaw Devil">Chainsaw Devil</option>
          <option value="Claw Devil">Claw Devil</option>
          <option value="Curse Devil">Curse Devil</option>
          <option value="Darkness Devil">Darkness Devil</option>
          <option value="Fox Devil">Fox Devil</option>
          <option value="Ghost Devil">Ghost Devil</option>
          <option value="Gun Devil">Gun Devil</option>
          <option value="Hell Devil">Hell Devil</option>
          <option value="Knife Devil">Knife Devil</option>
          <option value="Mold Devil">Mold Devil</option>
          <option value="Octopus Devil">Octopus Devil</option>
          <option value="Punishment Devil">Punishment Devil</option>
          <option value="Skin Devil">Skin Devil</option>
          <option value="Snake Devil">Snake Devil</option>
          <option value="Stone Devil">Stone Devil</option>

        </S.Select>
        <S.Label>Add more contracts</S.Label>
        <S.Plus onClick={() => setContract(contract.concat(""))}>+</S.Plus> */}

        { contract.map((value,i)=>(
          <>
          <S.Label key={i+Math.random(1,12)} htmlFor="contract">Contract{i+1}</S.Label>
          <S.Select value={value} key={i} id="contract" onChange={e => setContract(contract.map((value,j)=>{
            if(i===j) value = e.target.value;
            return value;
          }))} required>
            
            <option value="" hidden>-</option>
            <option value="No contract">No contract</option>
            <option value="Chainsaw Devil">Chainsaw Devil</option>
            <option value="Blood Devil">Blood Devil</option>
            <option value="Claw Devil">Claw Devil</option>
            <option value="Control Devil">Control Devil</option>
            <option value="Curse Devil">Curse Devil</option>
            <option value="Darkness Devil">Darkness Devil</option>
            <option value="Doll Devil">Doll Devil</option>
            <option value="Fox Devil">Fox Devil</option>
            <option value="Future Devil">Future Devil</option>
            <option value="Ghost Devil">Ghost Devil</option>
            <option value="Gun Devil">Gun Devil</option>
            <option value="Hell Devil">Hell Devil</option>
            <option value="Knife Devil">Knife Devil</option>
            <option value="Mantis Devil">Mantis Devil</option>
            <option value="Mold Devil">Mold Devil</option>
            <option value="Needle Devil">Needle Devil</option>
            <option value="Octopus Devil">Octopus Devil</option>
            <option value="Punishment Devil">Punishment Devil</option>
            <option value="Skin Devil">Skin Devil</option>
            <option value="Snake Devil">Snake Devil</option>
            <option value="Stone Devil">Stone Devil</option>
            <option value="Fox Devil">Eternity Devil</option>
            <option value="Zombie Devil">Zombie Devil</option>

  
          </S.Select>
          
  
            </>
        ))
          
            
        }

          <S.Plus onClick={() => setContract(contract.concat(""))}>Add more contracts</S.Plus>

        <S.Button>Register</S.Button>
      </S.Form>
    </S.Area>
  )
}