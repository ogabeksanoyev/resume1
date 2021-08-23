import styled from "styled-components";

const ContainerWrapper = styled.div`
.sidebar{
position: fixed;
top: 0vh;
left:0px;
width:250px;
height: 100vh;
overflow-y: auto;
background-color: white;
transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
transform: translateX(-100%);
z-index:1001;
&.show{
  transform: translateX(0);
}


}
.right-side{
.header_r{
  display: flex;
  align-items: center;

}
  .rheader{
    min-height: 8vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: left 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    color: #fff;
    background-color: #1976d2;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index:1100;
    &.show_h{
      left: 250px;
    }

    .r_input{  
    position: relative;

    input::placeholder{
      color: white;
    }
    
    input{
    position: relative;
    margin-right: 16px;
    border-radius: 4px;
    width: 120px;
    transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    background-color: rgba(255, 255, 255, 0.15);
    color: white;
    padding: 8px 8px 8px 40px;
    outline: none;
    border: none;
  }
  .r_search{
    height: 100%;
    display: flex;
    position: absolute;
    align-items: center;
    position: absolute;
    top: 0;
    left: 10px;
  }
  input:focus{
    width: 170px;
  }
    }


    .MuiSvgIcon-root {
    fill: white;
  }



  }
  
.content{
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  margin-top: 8vh;
  overflow-x: hidden;
 
}


}


 
`
export default ContainerWrapper