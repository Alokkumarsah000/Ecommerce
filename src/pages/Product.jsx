import styled from "styled-components"
import Navbar from '../Components/Navbar'
import Announcement from '../Components/Announcement'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'
import { Add, Remove } from "@material-ui/icons"


const Container = styled.div``
const Wrapper = styled.div`
    padding:50px;
    display:flex;
`
const ImgContainer = styled.div`
   flex:1;
`
const Image = styled.img`
   width:100%;
   height:90vh;
   object-fit: cover;
`
const InfoContainer = styled.div`
   flex:1;
   padding:0px 50px;
`
const Title = styled.h1`
   font-weight: 300;
`
const Desc = styled.p`
   margin:20px 0px;
`
const Price = styled.span`
   font-weight: 100;
   font-size: 40px;
`

const Filtercontainer = styled.div`
    display:flex;
    width:50%;
    margin:30px 0px;
    justify-content: space-between;
`
const Filter = styled.div`
     display:flex;
     align-items: center;
`
const Filtertitle = styled.span`
    font-size:20px;
    font-weight: 300;
`
const Filtercolor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color: ${props=>props.color};
    margin:10px;
    cursor:pointer;
`
const Filtersize = styled.select`
    margin-left: 10px;
    padding:5px;
`
const FiltersizeOption = styled.option``
const Addcontainer = styled.div`
    width: 50%;
    display:flex;
    align-items: center;
    justify-content: space-between;
`
const Amountcontainer = styled.div`
    display:flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.span`
    width:30px;
    height:30px;
    border-radius:10px;
    border:1px solid teal;
    display:flex;
    align-items: center;
    justify-content: center;
    margin:0px 5px;
`
const Button = styled.button`
    padding:15px;
    background-color: white;
    font-weight: 600;
    border:2px solid teal;
    cursor: pointer;
    &:hover{
        background-color: #f8f4f4;
    }
`

const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
          <Wrapper>
            <ImgContainer>
                <Image src="https://images.pexels.com/photos/7988718/pexels-photo-7988718.jpeg?auto=compress&cs=tinysrgb&w=600"/>
            </ImgContainer>
            <InfoContainer>
                <Title>Denim Jumpsuit</Title>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus veniam deserunt ab quis necessitatibus ea, ducimus placeat odit nobis tempora, voluptatibus repellendus exercitationem, deleniti rerum.</Desc>
                <Price>$ 10</Price>
            <Filtercontainer>
               <Filter> 
                <Filtertitle>Color</Filtertitle>
                <Filtercolor color="black" />
                <Filtercolor color="darkblue" />
                <Filtercolor color="gray" />
               </Filter>
               <Filter>
                  <Filtertitle>Size</Filtertitle>
                  <Filtersize>
                    <FiltersizeOption>XS</FiltersizeOption>
                    <FiltersizeOption>S</FiltersizeOption>
                    <FiltersizeOption>M</FiltersizeOption>
                    <FiltersizeOption>L</FiltersizeOption>
                    <FiltersizeOption>XL</FiltersizeOption>
                  </Filtersize>
                </Filter> 
            </Filtercontainer>
            <Addcontainer>
                <Amountcontainer>
                    <Remove/>
                        <Amount>1</Amount>
                    <Add />
                </Amountcontainer>
                <Button>Add to cart</Button>
            </Addcontainer>
            </InfoContainer>
          </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product