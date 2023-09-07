import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'
import Error from './Error'


const InputSubmit=styled.input`
background-color: #9861e4;
border: none;
width: 100%;
padding: 10px;
color: white;
font-weight:700 ;
text-transform: uppercase;
font-size: 20px;
border-radius: 5px;
margin-top: 30px;
&:hover{
    background-color: #ad9cc5;
    color: black;
    cursor: pointer;
}
`
const Formulario = ({setMonedas}) => {

    const [criptos, setCriptos ] = useState([])
    const [error, setError ] = useState(false)
    const [moneda,SelectMonedas] = useSelectMonedas('Elige tu moneda',monedas)
    const [criptoMoneda,SelectCriptoMoneda] = useSelectMonedas('Elige tu CriptoMoneda',criptos)


    useEffect(() =>{
        const consultarApi = async () =>{
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=25&tsym=USD"

            const respuesta = await fetch(url)
            const resultado = await respuesta.json()

            const arrayCriptos = resultado.Data.map( cripto =>{

                const objeto={
                    id:cripto.CoinInfo.Name,
                    nombre:cripto.CoinInfo.FullName
                }
                return objeto 
             
            })

            setCriptos(arrayCriptos)

          
        }
        consultarApi();
    },[])

   const handleSubmit = e =>{
    e.preventDefault()

    if([moneda,criptoMoneda].includes('')){
        setError(true)
        return
    }
    setError(false)
    setMonedas({moneda,
    criptoMoneda})

   }

  return (
    <>
    {error && <Error>Todos los Campos son obligatorios</Error>}
    <form
    onSubmit={handleSubmit}>
        <SelectMonedas/>
        <SelectCriptoMoneda/>
       
        <InputSubmit 
        type='submit' value="Cotizar"
        />

    </form>
    </>
  )
}

export default Formulario