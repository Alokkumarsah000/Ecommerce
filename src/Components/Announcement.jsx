import styled from "styled-components"

const Container = styled.div`
    height:30px;
    background-color:teal;
    color:gold;
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
`

const Announcement = () => {
  return (
    <Container>
        Super Deal! Free Shipping on Order Over $50
    </Container>
  )
}

export default Announcement