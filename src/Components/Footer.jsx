import { Facebook, Instagram, MailOutline, Pinterest,Room,Phone, Twitter } from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div`display:flex`
const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction: column;
    padding:20px;
`
const Logo =styled.h1``
const Description =styled.p`
   margin:20px 0px;
`
const Socialcontainer =styled.div`
   display:flex;
`
const SocialIcon =styled.div`
   width:40px;
   height:40px;
   border-radius:50%;
   color:white;
   background-color: #${props=>props.color};
   display:flex;
   align-items: center;
   justify-content: center;
   margin-right:20px;
`

const Center = styled.div`
    flex:1; 
    padding:20px;
`
const Title = styled.h3`
    margin-bottom: 20px;
`

const List = styled.ul`
    margin:0;
    padding:0;
    list-style: none;
    display:flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
   width:50%;
   margin-bottom: 10px;
`


const Right = styled.div`
    flex:1;  
    padding:20px;
`
const ContactItem = styled.div`
     margin-bottom: 20px;
     display:flex;
     align-items: center;

`



const Footer = () => {
  return (
    <Container>
        <Left>
           <Logo>SAH.</Logo>
           <Description>
              There are many variations of passages of Lorem Ipsum available,but the majority have suffered alteration in some form ,by injected humour, or randomised words which don't look even slightly believable.
           </Description>
           <Socialcontainer>
              <SocialIcon color="3B5999">
                  <Facebook />
              </SocialIcon>
              <SocialIcon color="E4405F">
                  <Instagram/>
              </SocialIcon>
              <SocialIcon color="55ACEE">
                  <Twitter/>
              </SocialIcon>
              <SocialIcon color="E60023">
                  <Pinterest/>
              </SocialIcon>
           </Socialcontainer>
        </Left>
        <Center>
           <Title>Useful Links</Title>
           <List>
              <ListItem>HOme</ListItem>
              <ListItem>Cart</ListItem>
              <ListItem>Man Fashion</ListItem>
              <ListItem>Accessories</ListItem>
              <ListItem>Woman Fashion</ListItem>
              <ListItem>My Account</ListItem>
              <ListItem>Order Tracking</ListItem>
              <ListItem>Whishlist</ListItem>
              <ListItem>Terms</ListItem>
           </List>
        </Center>
        <Right>
              <Title>Contact</Title>
              <ContactItem>
                 <Room  style={{marginRight:"10px"}}/> Barahathawa-5,sarlahi Nepal
              </ContactItem>
              <ContactItem>
                 <Phone style={{marginRight:"10px"}}/> +977 9817824080
              </ContactItem>
              <ContactItem>
                 <MailOutline style={{marginRight:"10px"}}/> ksah90210@gmail.com
              </ContactItem>
        </Right>
    </Container>
  )
}

export default Footer