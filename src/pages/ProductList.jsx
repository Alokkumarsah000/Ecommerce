import styled from "styled-components"
import Announcement from "../Components/Announcement"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import Newsletter from "../Components/Newsletter"
import Products from "../Components/Products"

 
const Container = styled.div``
const Title = styled.h1`
   margin:20px;
`
const FilterContainer = styled.div`
    display:flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin:20px;
`
const Filtertext = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;

`
const Select = styled.select`
    padding:10px;
    margin-right: 20px;
`
const Option = styled.option``

const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter><Filtertext>Filter products:</Filtertext>
                <Select>
                    <Option disabled selected>Color</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option>Green</Option>
                    <Option>Yellow</Option>
                    <Option>Orange</Option>
                    <Option>sky</Option>
                </Select>
                <Select>
                    <Option disabled selected>Size</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
            </Filter>
            <Filter><Filtertext>Sort products:</Filtertext>
               <Select>
                <Option selected>Newest</Option>
                <Option>Price (asc)</Option>
                <Option>Price (desc)</Option>
               </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList