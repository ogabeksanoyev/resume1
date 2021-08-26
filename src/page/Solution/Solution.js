import { Button, IconButton, makeStyles, TextField } from '@material-ui/core'
import { AccountBalanceOutlined, AddShoppingCartOutlined, BrightnessAutoOutlined, ChevronRight, CollectionsBookmarkOutlined, DomainOutlined, EmailOutlined, FilterListOutlined, FilterTiltShiftOutlined, FlipCameraAndroidOutlined, FlipOutlined, FormatPaintOutlined, GroupWorkOutlined, ImageOutlined, KeyboardArrowLeft, MarkunreadOutlined, MessageOutlined, People, PeopleAltOutlined, PollOutlined, ReceiptOutlined, RotateRight, SettingsOutlined, SportsBasketballOutlined } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SolutionWrapper from './SolutionWrapper'

const data = [
  {
    icon: <EmailOutlined />, name: "Email Marketing", to: "/solution/solution/marketing"
  },
  {
    icon: <DomainOutlined />, name: "Website builder", to: "/solution/solution/builder"
  },
  {
    icon: <BrightnessAutoOutlined />, name: "Marketing Automation", to: "/solution/solution/marketingauto"
  },
  {
    icon: <FilterListOutlined />, name: "Conversion Fanes", to: "/solution/solution/cover"
  }
]
const brand = [
  {
    img: "https://us-ws.gr-cdn.com/images/pages/homepage/brands/ikea.svg"
  },
  {
    img: "https://us-ws.gr-cdn.com/images/pages/homepage/brands/survicate.svg"
  },
  {
    img: "https://us-ws.gr-cdn.com/images/pages/homepage/brands/cdprojekt.svg"
  },
  {
    img: "https://us-ws.gr-cdn.com/images/pages/homepage/brands/zendesk.svg"
  },
  {
    img: "https://us-ws.gr-cdn.com/images/pages/homepage/brands/revolut.svg"
  },
  {
    img: "https://us-ws.gr-cdn.com/images/pages/homepage/brands/nottingham.svg"
  },
  {
    img: "https://us-ws.gr-cdn.com/images/pages/homepage/brands/stripe.svg"
  },
  {
    img: "https://us-ws.gr-cdn.com/images/pages/homepage/brands/carrefour.svg"
  },
  {
    img: "https://us-ws.gr-cdn.com/images/pages/homepage/brands/shaw.svg"
  },
]

const card = [
  {
    icon: <PeopleAltOutlined className="need_icon" />, text: "Find new customers and build your email list with lead generation tools that turn anonymous connections into loyal fans.", title: "Grow your audience", small1: "Over", smallm: "1,000,000 leads", small: "generated monthly"
  },
  {
    icon: <MarkunreadOutlined className="need_icon" />, text: "Stay in touch with your customers and potential clients with targeted online communication that converts.", title: "Engage with customers", small1: "Over", smallm: "764,556,063 emails", small: " delivered weekly"
  },
  {
    icon: <AddShoppingCartOutlined className="need_icon" />, text: "Build a following, engage them with your content, and turn your expertise into a profitable business.", title: "Sell your knowledge", small1: "", smallm: "950+ webinars", small: " hosted daily"
  },
  {
    icon: <CollectionsBookmarkOutlined className="need_icon" />, text: "Market your ecommerce business and deliver experiences that convert store visitors into returning customers.", title: "Boost online sales", small1: "", smallm: "Thousands of transactions", small: "  processed daily"
  },

]
const card_people = [
  {
    img: "	https://us-ws.gr-cdn.com/images/pages/homepage/entrepreneur@2x.webp",
    title: "Entrepreneur", text: "Market your business online with features that help you reach out to potential clients and build relationships.", icon1: <MessageOutlined />, icon2: <AccountBalanceOutlined />, icon3: <FormatPaintOutlined />, linl: "/solution/solution/online-marketing-tools", link1: "/solution/features/email-marketing", link2: "/solution/features/website-builder", link3: "/solution/features/paid-asd", span1: "Email marketing", span2: "Website builder", span3: "Paid asd"
  },
  {
    img: "	https://us-ws.gr-cdn.com/images/pages/homepage/marketer@2x.webp",
    title: "Online marketer", text: "Make money from anywhere, with the flexibility to generate and convert leads from the comfort of your own home.", icon1: <ReceiptOutlined />, icon2: <PollOutlined />, icon3: <SportsBasketballOutlined />, linl: "/solution/solution/online-marketing-tools", link1: "/solution/features/email-marketing", link2: "/solution/features/website-builder", link3: "/solution/features/paid-asd", span1: "Sales funnels", span2: "Popup forms", span3: "Autoresponders"
  },
  {
    img: "https://us-ws.gr-cdn.com/images/pages/homepage/manager@2x.webp",
    title: "Marketing manager", text: "Reach your customer segments with automated, personalized messaging through different channels customer journey.", icon1: <SettingsOutlined />, icon2: <FilterTiltShiftOutlined />, icon3: <ImageOutlined />, linl: "/solution/solution/online-marketing-tools", link1: "/solution/features/email-marketing", link2: "/solution/features/website-builder", link3: "/solution/features/paid-asd", span1: "Marketing automation", span2: "Website tracking", span3: "Live and on-demand"
  },
  {
    img: "	https://us-ws.gr-cdn.com/images/pages/homepage/enterprise@2x.webp",
    title: "Large companies", text: "Increase ROI with tools tailored and scaled to your business for better results across the entire customer journey.", icon1: <FlipCameraAndroidOutlined />, icon2: <FlipOutlined />, icon3: <GroupWorkOutlined />, linl: "/solution/solution/online-marketing-tools", link1: "/solution/features/email-marketing", link2: "/solution/features/website-builder", link3: "/solution/features/paid-asd", span1: "Dedicated IP address", span2: "Transactional emails", span3: "Dedicated support"
  },

]
const carusel = [
  {
    img: "https://us-ws.gr-cdn.com/images/pages/homepage/slide-6.png", title: "I can reach my goals faster", text: "GetResponse helps me to increase my revenues, improve my customer experience and sell more products and services. I really love it.", name: "Manuel Flaugnacco", full: "Vendere Energia"
  },
  {
    img: "https://us-ws.gr-cdn.com/images/pages/homepage/slide-7.png", title: "Keep my business connected with clients", text: "GetResponse helps my business to connect with its audience in a clear and concise way. It’s easy and straightforward and if I get stuck, I can reach out.", name: "Nicola Lucie", full: "The Feminine Principle"
  },
  {
    img: "https://us-ws.gr-cdn.com/images/pages/homepage/slide-3.png", title: "I love GetResponse interface", text: "GetResponse is a must-try email marketing tool. It offers a lot of features in one, well-designed platform.", name: "Maxime Hamelin", full: "Fondation de la Géosophie"
  },
  {
    img: "https://us-ws.gr-cdn.com/images/pages/homepage/slide-1.png", title: "Excellent customer service!", text: "GetResponse gives me the ability to follow up with fresh leads and keep them engaged with my brand.", name: "Robert Waver", full: "Infusion Marketing"
  },
  {
    img: "https://us-ws.gr-cdn.com/images/pages/homepage/slide-2.png", title: "Autoresponder emails are much simpler to use", text: "GetResponse's Autoresponders are so much simpler to use than the other tools with faster and truly available 24/7 customer support team.", name: "Seth Mosley", full: "Full Circle Music"
  },
  {
    img: "https://us-ws.gr-cdn.com/images/pages/homepage/slide-3.png", title: "Better and cheaper than the competitors", text: "Great platform, easy to make high-quality emails, landing pages, ARs, forms, funnels.", name: "Pamela Moss", full: "The Soul Guide Inc"
  },
  {
    img: "https://us-ws.gr-cdn.com/images/pages/homepage/slide-4.png", title: "GetResponse helps me run my business", text: "I've been with them for a long time and I'm not going anywhere. I love GetResponse's tracking, stats and features.", name: "Nick Nilsson", full: "BetterU, Inc."
  },
  {
    img: "https://us-ws.gr-cdn.com/images/pages/homepage/slide-5.png", title: "The best user-friendly email automation", text: "GetResponse provides the best automation and landing pages, which helps me focus more on our business rather than spending time on designing webpages.", name: "Dibyajyoti Saikia", full: "Hiedenberg Inc"
  },
]



const Solution = () => {
  //slider
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = carusel.length - 1
    if (index < 0) setIndex(lastIndex)
    if (index > lastIndex) setIndex(0)
  }, [index, carusel])

  return (
    <SolutionWrapper>
      <section className="info_f">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-sm-10 col-12">
              <h1>Get <mark className="styled"> growing!</mark> </h1>
              <p className="motto">Powerful, simplified tool to send emails,create pages, and automate your marketing.</p>
              <form className="" noValidate autoComplete="off">
                <TextField label="Email Address" variant="filled" fullWidth />
              </form>
              <p className="small_m">No credit card required  |  30 days free  |  Cancel anytime</p>
            </div>
            <div className="col-md-6 col-sm-10 col-12 flex-end">
              <div className="info_f_r d-flex justify-content-end">
                <ul className="d-flex flex-md-column flex-row flex-wrap  justify-content-center justify-content-md-between">
                  {
                    data.map((v, i) => {
                      return (
                        <li className="m-3"><Link to={v.to} className="nav_item">
                          {v.icon}
                          <span>{v.name}</span>
                        </Link></li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="brands">
            <p className="title_p ">Trusted by big and small brands</p>
            <ul className="d-flex flex-wrap justify-content-between flex-row my-5">
              {
                brand.map(v => <li className="mb-5 me-5"><img class="ikea" width="62" height="25" src={v.img} alt="IKEA"></img> </li>)
              }
            </ul>
            <h2 className="title_h2 mb-5">Inbound marketing solutions for <mark class="styled">what you need to do</mark></h2>
            <div className="need mt-5">
              <div className="row">
                {
                  card.map((v, i) => {
                    return (
                      <div className="col-md-6">
                        <div className="need_card d-lg-flex mb-5 bg-light rounded py-2 px-1">
                          <div style={{ flex: "0 0 auto", width: "95px" }}>{v.icon}</div>
                          <div>
                            <h3>{v.title}</h3>
                            <p>{v.text}</p>
                            <a href="https://www.getresponse.com/solutions/lead-generation-software" className="text-link">LEARN MORE</a>
                            <small>{v.small1} <mark>{v.smallm}</mark>{v.small}</small>
                          </div>
                        </div>
                      </div>

                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tools">
        <div className="container">
          <h2 className="title_h2">Personalized tools for <mark class="styled">who you are</mark></h2>
          <div className="row mt-5">
            {
              card_people.map((v, i) => {
                return (
                  <div className="col-lg-3 col-md-6">
                    <div className="people mb-5">
                      <div className="people_img">
                        <img src={v.img} alt="people"></img>
                      </div>
                      <div className="people_art">
                        <h3>{v.title}</h3>
                        <p>{v.text}</p>
                        <Link to={v.linl} className="text-link">Learn More </Link>

                        <ul className="sublist pt-4">
                          <li className="mb-3">
                            <Link to={v.link1} className="sublist_link">
                              {v.icon1}
                              <span>{v.span1}</span>
                            </Link>
                          </li>
                          <li className="mb-3">
                            <Link to={v.link2} className="sublist_link">
                              {v.icon2}
                              <span>{v.span2}</span>
                            </Link>
                          </li>
                          <li className="mb-3">
                            <Link to={v.link3} className="sublist_link">
                              {v.icon3}
                              <span>{v.span3}</span>
                            </Link>
                          </li>
                        </ul>

                      </div>
                    </div>
                  </div>

                )
              })
            }
          </div>
          <div className="text-center">
            <small style={{ color: "#7990a1", fontSize: "15px" }}>+ 23 more features to run your campaigns</small>
          </div>
        </div>
      </section>
      <section className="pricing">
        <div className="container">
          <h2>Unbeatable price for all-in-one marketing software</h2>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              <div className="pricing_card mb-5">
                <h3>BASIC</h3>
                <p class="price">starts from<strong><em>$</em>10.50<small>/mo</small></strong></p>
                <p className="text_p">Send emails and build an engaged contact base.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="pricing_card mb-5">
                <h3>PLUS</h3>
                <p class="price">starts from<strong><em>$</em>34.30<small>/mo</small></strong></p>
                <p className="text_p">Deliver personalized experiences with custom automation and live webinars.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="pricing_card mb-5">
                <h3>Professional</h3>
                <p class="price">starts from    <strong><em>$</em>69.30<small>/mo</small></strong></p>
                <p className="text_p">Do more with no-limits automation, funnels, and paid webinars.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="pricing_card mb-5">
                <h3>MAX</h3>
                <p class="price mt-4"><strong>Custom pricing</strong></p>
                <p className="text_p">Generate higher profits with dedicated support and solutions tailored to your needs.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className="customer">
        <h2 className="container text-center">Join the <mark class="styled">100,000+ businesses</mark> already growing with us</h2>
        <p className="container text-center">We are a global marketing software company, empowering you to run your business with the online marketing tools that you need. Take the next step forward and join the thousands of businesses growing by engaging audiences online everywhere.</p>
        <div className="carusel_container">

          {
            carusel.map((person, personIndex) => {
              const { img, title, text, name, full } = person
              //
              let position = "nextSlide";
              if (personIndex === index) {
                position = "activeSlide"
              }
              if (personIndex === index - 1 || (index === 0 && personIndex === carusel.length - 1)) {
                position = "lastSlide"
              }


              return (
                <article className={position}>
                  <div className="card_x">
                    <div className="card_img"><img src={img} alt="people" className="person-img" /></div>
                    <div className="card_info">
                      <h3>{title}</h3>
                      <p>{text}</p>
                      <small>{name} <span>{full}</span></small>
                    </div>
                  </div>
                </article>
              )

            })
          }
          <IconButton className="bg-light prev" onClick={() => setIndex(index - 1)}><KeyboardArrowLeft /></IconButton>
          <IconButton className="bg-light next" onClick={() => setIndex(index + 1)}><ChevronRight /></IconButton>
        </div>

      </section>
      <section className="livechat">
        <div className="container">
          <div className="iner">

            <article className="">
              <h2><mark class="styled">When you need us,we're here.</mark> Our Customer Success Team  is always there for you.</h2>
              <p>Contact our team anytime –</p>
              <ul className="mb-5 mt-1">
                <li>we're fully remote</li>
                <li>we speak 8 languages</li>
                <li>we're 100% committed to your success</li>
              </ul>
              <h3><mark>24 HOURS A DAY, 7 DAYS A WEEK</mark></h3>
              <p class="btn-wrap">
                <a class="text-link" href="#" title="CHAT NOW ">CHAT NOW</a>
              </p>
            </article>
            <div className="iner_img">
              <img style={{ width: "100%", height: "auto" }} src="https://us-ws.gr-cdn.com/images/pages/homepage/mobile/chat.webp" />
            </div>

          </div>
        </div>
      </section>
      <section className="gdpr">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <article>
                <h2>GDPR compliant</h2>
                <p>Be completely transparent and GDPR compliant with GetResponse consent fields. Allow your contacts to provide their proper consent right when they sign up. Arm yourself with a detailed information log related to each consent field you need to manage.</p>
                <ul>
                  <li>All EU Countries and California</li>
                  <li>Track changes</li>
                  <li>Multiple fields creation</li>
                  <li>Fully integrated</li>
                </ul>
                <p><a class="text-link" href="#">LEARN MORE</a></p>
              </article>
            </div>
            <div className="col-md-6">
              <div>
                <img src="	https://us-ws.gr-cdn.com/images/pages/homepage/gdpr.webp" className="w-100"></img>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SolutionWrapper >
  )
}

export default Solution
