import styled from '@emotion/styled'

const Contenedor = styled.div`
color: white;
font-family: 'Lato',sans-serif;
display: flex;
align-items: center;
gap: 1 rem;
margin-top: 30px;

`
const Texto = styled.p`
font-size: 20px;
span{
    font-weight: 700;
    
}
`

const Precio = styled.p`
font-size: 25px;
span{
    font-weight: 700;

}
`

const Imagen = styled.img`
display: block;
width: 130px;

`

const Resultado = ({resultado}) => {
    const {PRICE, HIGHDAY,LOWDAY,CHANGEPCT24HOU,IMAGEURL,LASTUPDATE}
     =resultado
  return (
    <Contenedor>
        <Imagen 
        src={`https://cryptocompare.com/${IMAGEURL}`} 
        alt='imagen cripto'/>
            <div>
                <Precio>El precio es de <span>{PRICE}</span></Precio>
                <Texto>El precio Mas Alto es de <span>{HIGHDAY}</span></Texto>
                <Texto>El precio Mas Bajo es de  <span>{LOWDAY}</span></Texto>
                <Texto>El porcentaje de cambio del dia <span>{CHANGEPCT24HOU}</span></Texto>
                <Texto>Ultima Actualizacion<span>{LASTUPDATE}</span></Texto>
            </div>  
    </Contenedor>
  )
}

export default Resultado