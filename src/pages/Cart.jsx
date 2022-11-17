import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcement from "../Components/Announcement"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"

const Container = styled.div`
`
const Wrapper = styled.div`
    padding: 20px;
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding:20px;
`
const Topbutton = styled.button`
    padding: 10px;
    font-weight: 300;
    cursor:pointer;
    border:${(props)=>props.type === "filled" && "none"};
    background-color: ${(props)=>props.type === "filled" ? "black" : "transparent"};
    color:${(props)=>props.type ==="filled" && "white"};
`
const Toptexts = styled.div``
const Toptext  = styled.span`
    text-decoration: underline;
    cursor:pointer;
    margin:0 10px;
`

const  Bottom = styled.div`
    display:flex;
    justify-content: space-between;
`
const  Info = styled.div`
    flex:3;
`
const Product = styled.div`
    display:flex;
    justify-content: space-between;
`
const ProductDetail = styled.div`
    flex:2;
    display:flex;
`
const Image = styled.img`
    width:300px;
    height:300px;
`
const Details = styled.div`
    padding:20px;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.span``
const ProductId = styled.span``
const Productcolor = styled.div`
    width:20px;
    height:20px;
    border-radius: 50%;
    background-color:${props=>props.color}
`
const Productsize = styled.span`
     
`
const PriceDetail = styled.div`
    flex:1;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ProductAmountContainer = styled.div`
    display:flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount = styled.div`
    font-size: 24px;
    margin:5px;
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 300;
`
const Hr = styled.hr`
     background-color: #eee ;
     border:none;
     height:1px;

`

const  Summary = styled.div`
    flex:1;
    border:0.5px solid lightgray;
    border-radius: 10px;
    padding:20px;
    height:40vh;
`
const SummaryTitle = styled.h1`
   font-weight: 200;
`
const SummaryItem = styled.div`
   margin:20px 0;
   display:flex;
   justify-content: space-between;
   font-weight: ${props=>props.type  === "total" && "500"};
   font-size: ${props=>props.type === "total" && "24px"};
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
   width:100%;
   background-color:black;
   padding:10px;
   color:white;
   font-weight: 600;
`
const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
          <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <Topbutton>CONTINUE SHOPPING</Topbutton>
                <Toptexts>
                    <Toptext>Shopping Bag(2)</Toptext>
                    <Toptext>Your Wishlist (0)</Toptext>
                </Toptexts>
                <Topbutton type="filled">CHECKOUT NOW</Topbutton>
            </Top>
            <Bottom>
             <Info>
              <Product>
               <ProductDetail>
                <Image src="https://images.pexels.com/photos/13580544/pexels-photo-13580544.jpeg?auto=compress&cs=tinysrgb&w=600" />
                <Details>
                    <ProductName><b>product: </b>NIKE SHOES</ProductName>
                    <ProductId><b>ID: </b>112</ProductId>
                    <Productcolor color="blue"/>
                    <Productsize><b>Size </b>38</Productsize>
                </Details>
               </ProductDetail>
               <PriceDetail>
                 <ProductAmountContainer>
                    <Add/>
                      <ProductAmount>3</ProductAmount>
                    <Remove/>
                 </ProductAmountContainer>
                 <ProductPrice> $ 50</ProductPrice>
               </PriceDetail>
              </Product><br/>
                <Hr/>  
                 <Product>
                       <ProductDetail>
                        <Image src="https://images.pexels.com/photos/13316724/pexels-photo-13316724.jpeg?auto=compress&cs=tinysrgb&w=600" />
                        <Details>
                            <ProductName><b>product: </b>T-Shirt</ProductName>
                            <ProductId><b>ID: </b>113</ProductId>
                            <Productcolor color="lightgray"/>
                            <Productsize><b>Size </b>M</Productsize>
                        </Details>
                       </ProductDetail>
                       <PriceDetail>
                         <ProductAmountContainer>
                            <Add/>
                              <ProductAmount>4</ProductAmount>
                            <Remove/>
                         </ProductAmountContainer>
                         <ProductPrice> $ 40</ProductPrice>
                       </PriceDetail>
                    </Product>
                  
                    </Info>
                <Summary>
                  <SummaryTitle>ORDER SUMMARY</SummaryTitle>  
                  <SummaryItem>
                  <SummaryItemText>Subtotal:</SummaryItemText>
                  <SummaryItemPrice>$ 90</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem>
                  <SummaryItemText>Estimated Shipping:</SummaryItemText>
                  <SummaryItemPrice>$ 5</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem>
                  <SummaryItemText>Shipping Discount:</SummaryItemText>
                  <SummaryItemPrice>$ -5</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem type="total">
                  <SummaryItemText >Total:</SummaryItemText>
                  <SummaryItemPrice>$ 90</SummaryItemPrice>
                  </SummaryItem>
                  <Button>CHECKOUT NOW</Button>
                </Summary>
            </Bottom>
          </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart