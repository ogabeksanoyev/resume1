import styled from "styled-components";

const SolutionWrapper = styled.div`
.info_f{
  background-image:url("https://us-ws.gr-cdn.com/images/pages/homepage/top_v7.webp");
  background-position: bottom right;
  background-repeat: no-repeat;
  .motto {
    font-size: 26px;
    color: #202730;
    letter-spacing: .015em;
    margin-top: 20px;
    margin-bottom: 44px;
    font-weight: 400;
    line-height: 1.33;
}
.small_m{
  color: #7990a1;
  font-size: 14px;
  margin-top: 20px !important;
}


.info_f_r{
  ul li .nav_item{
    display: flex;
    align-items: center;
    justify-content: center;
    color: #4d555e;
    background: #fff;
    border-radius: 6px;
    padding: 4px 10px 6px;
    box-shadow: 0 5px 20px 0 rgb(32 39 48 / 10%);
    width: 180px;
    height: 75px;
    position: relative;

    &:after{
      content: ">";
    border-radius: 50%;
    background-color: #fff;
    width: 20px;
    height: 20px;
    box-sizing: border-box;
    padding-left: 2px;
    font-weight: 900;
    position: absolute;
    right: -10px;
    color: #00baff;
    font-size: 18px;
    line-height: 1;
    text-align: center;
    box-shadow: 0 1px 5px 0 rgb(32 39 48 / 10%);
    
    }
    
   svg{
    width: 50px;
    height: 50px;
    color: #00baff;
    margin-right: 5px;
   }
    span{
    font-size: 16px;
    color: #4d555e;
    text-transform: none;
    font-weight: 900;
    letter-spacing: .01em;
    line-height: 1;
    
    }
  }
  
}

}

.brand{
  background-color: #f5f8fb;
  .brands{
    
    .title_p{
    font-weight: 400;
    font-size: 15px;
    line-height: 1.2;
    color: #a7a7a7;
    text-transform: uppercase;
    letter-spacing: .12em;
    margin-bottom: 30px;
    text-align: left;
    }
  .need{
    .need_icon{
      width: 60px;
      height: 60px;
      color: #7990a1;
    }
    h3{
    color: #1f262f;
    margin-bottom: 22px;
    font-weight: 900;
    font-size: 25px;
    line-height: 1.2;
    letter-spacing: .04em;
    }
    p{
      font-size: 18px;
    line-height: 1.56;
    color: #999;
    letter-spacing: .02em;
    margin-bottom: 20px;
    }
    
  small{
    display: block;
    color: #202730;
    font-size: 17px;
    font-weight: 700;
    padding-top: 25px;
    letter-spacing: .035em;
    mark {
    background: #ffea00;
    padding: 3px;
    color: inherit;
}
}
  }
  }

}


.tools{
background-image: radial-gradient(ellipse at center 0,#f5f8fb 0,#fff 800px);
position: relative;

.people_img{
  height: 155px;
    display: flex;
    align-items: flex-end;
    background: #00baff;
    border-radius: 7px 7px 0 0;
    justify-content: center;
    margin-bottom: 20px;
    img{
     width:190px;
     height:190px;
    }
}

.people{
 .people_art{
  h3{
    color: #1f262f;
    font-size: 26px;
    letter-spacing: normal;
    margin-bottom: 26px;
    font-weight: 700;
    line-height: normal;
  }
  p{
    color: #51565e;
    font-size: 18px;
    line-height: 1.45;
    margin-bottom: 18px;
    letter-spacing: .02em;
}
 }

 .sublist{
   .sublist_link{
    display: flex;
    color: #333;
    svg{
    width: 30px;
    height: 30px;
    margin-right: 5px;
  }
  span{
    font-weight: 500;
    line-height: 1.6;
    padding-top: 3px;
  }
   }
 }
}
}

.pricing {
    padding: 143px 0 220px;
    background: #0b212a url("https://us-ws.gr-cdn.com/images/pages/homepage/line2.svg") no-repeat;
    background-position: calc(50% + 630px) calc(100% - 110px);
    background-size: 1320px 703px;
    .pricing_card{
      display: flex;
      flex-direction: column;
     justify-content: center;
      min-height: 255px;
      padding: 15px;
    border: 1px solid #eee;
    border-radius: 10px;
    transition: box-shadow 0.1s ease-in-out;
    &:hover{
    box-shadow: 0 10px 20px 0px rgba(225, 225, 225, 0.1);
    cursor: pointer;
    }
    }
    h2{
      color: white;
      text-align: center;
      font-size: 35px;
      letter-spacing: .02em;
      margin-bottom: 40px;
    }
    h3{
      color: #f8fafc;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: .01em;
    font-size: 28px;
    margin-bottom: 13px;
    position: relative;
    &:before{
      position: absolute;
      content: "";
      bottom: -3px;
      left: 0;
      height: 3px;
      width: 50px;
      background-color: #7990a1;
    }
    }
    .text_p{
      color: #f5f8fb;
      font-size: 18px;
    }
    
    .price{
    color: #7990a1;
    margin: 0 0 20px;
    text-align: left;
    line-height: 1.4;
    font-size: 14px;
    letter-spacing:.02em;
    strong{
    font-weight: 700;
    color: #00baff;
    display: block;
    line-height: 1.2;
    font-size: 36px;
    em{
      font-size: 25px;
      vertical-align: super;
    }
    small{
      font-weight: 400;
    font-size: 15px;
    padding-left: 3px;
    }
    }
    }
}

`
export default SolutionWrapper