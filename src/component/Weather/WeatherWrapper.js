import styled from "styled-components";

const WeatherWeapper = styled.div`
margin-top: 100px;
.search{
  display: flex;
  justify-content: center;
input{
  width: 60%;
  border: none;
  border-bottom: 1px solid #d6d6d6;
  padding: 10px;
  
}
  input:focus{
    border: none;
    border-bottom: 1px solid #d6d6d6;
    box-shadow:none;
    outline: none;
  }
}
/* background-color: #f2f9eb; */
`
export default WeatherWeapper