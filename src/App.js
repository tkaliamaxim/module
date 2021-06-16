import './App.css';

const Header = () =>
<header>
    <div class="top">
        <a href="#" class="logo">
            <img src="images/logo.png" alt="flower" />
        </a>
        <nav class="navigation">
            <input id="opener" type="checkbox" />
            <label for="opener" class="burger">
                <span>menu</span>
            </label>
            <ul class="menu">
                <li><a class="item" href="#">About us</a></li>
                <li><a class="item" href="#">Reservation</a></li>
                <li><a class="item" href="#">Gallery</a></li>
                <li><a class="item" href="#">Blog</a></li>
                <li><a class="item" href="#">Elements</a></li>
                <li><a class="item" href="#">Shop</a></li>
            </ul>
        </nav>
    </div>
</header>

const Main = () =>
    <div class="main">
        <Container1 />
        <Container2 />
        <Container3 />
        <Container4 />
        <Container5 />
    </div>

const Footer = () =>
<footer>
    <div class="footer">
        <div class="contacts">
            <div class="about">
                <h3>ABOUT</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad m inim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div class="us">
                <div class="contact1">
                    <h3>CONTACT US</h3>
                    <div class="adress">
                        <address>5491 Joseph Mountains <br/> Apt. 716</address> 
                    </div>
                    <div class="tel">
                        <a href="tel:+123456789" target="_blank">+1 234 567 89</a><br/>
                        <a href="tel:+123456789" target="_blank">+1 234 678 90</a>
                    </div>
                </div>
                <div class="contact2">
                    <div class="mailto">
                        <a href="mailto:joga.info@example.com" target="_blank">joga.info@example.com</a>
                    </div>
                    <div class="example">
                        <a href="https://www.example.com" target="_blank">www.example.com</a>
                    </div>                           
                </div>
            </div>
            <div class="socialdiv">
                <ul class="social">
                    <li><a href="#" target="_blank"><span class="icon-pinterest2"></span></a></li>
                    <li><a href="#" target="_blank"><span class="icon-twitter"></span></a></li>
                    <li><a href="#" target="_blank"><span class="icon-facebook"></span></a></li>
                    <li><a href="#" target="_blank"><span class="icon-google-plus"></span></a></li>
                    <li><a href="#" target="_blank"><span class="icon-instagram"></span></a></li>
                </ul>
            </div>
        </div>
        <div class="copyright">
            <p>Copyright © 2016-2017 Yoga classes</p>
        </div>
    </div>
</footer>

const Container1 = () =>
<div class="section1">
    <div class="form1">
        <form action="#" class="trial">
            <h2>Trial Class</h2>
            <input class="input1" type="text" placeholder="Enter your name" />
            <input class="input1" type="tel" placeholder="Enter your phone" />
            <select class="select1">
                <option value disabled selected>Chose your class</option>
                <option>Class1</option>
            </select>
            <div class="try">
                <a href="">Try it</a>
            </div>
        </form>
    </div>                   
    <div class="just">
        <h1>JUST BALANCE YOUR MIND & BODY</h1>
        <p>Create the healthy living <br /> for yourself</p>
    </div>
</div>

const Yogacard = ({img="images/img-01.jpg",
                    url1="#",
                    url1text="YOGA FOR HEALTH",
                    yogatext="Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aiquip ex ea commodo consequat consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
                    url2="#",
                    urltext2="Ashtanga - Hatha"   }) =>
    <div class="yoga">
        <div class="yogaimg">
            <img src={img} alt="" />
        </div>
        <div class="yogatext">
            <a class="for" href={url1}>{url1text}</a>
            <p>{yogatext}</p>
            <a href={url2}>{urltext2}</a>
        </div> 
    </div>

const Container2 = () =>
<div class="section2">
    <h2>YOGA FEATURE PROGRAM</h2>
    <p>Our Classes</p>
<div class="classes">
    <Yogacard />
    <Yogacard img="images/img-02.jpg" url1text="YOGA FOR LOSE WEIGHT" />
    <Yogacard img="images/img-03.jpg" url1text="YOGA FOR CHILDREN" />
    <Yogacard img="images/img-04.jpg" url1text="YOGA FOR ELDERLY" />
</div>
</div>

const Container3 = () =>
<div class="section3">
    <ul class="pictures">
        <li><img src="images/img-05.jpg" alt="" /></li>
        <li><img src="images/img-06.jpg" alt="" /></li>
        <li><img src="images/img-07.jpg" alt="" /></li>
        <li><img src="images/img-08.jpg" alt="" /></li>
        <li><img src="images/img-09.jpg" alt="" /></li>
        <li><img src="images/img-10.jpg" alt="" /></li>
        <li><img src="images/img-11.jpg" alt="" /></li>
        <li><img src="images/img-12.jpg" alt="" /></li>
    </ul>
</div>

const Boxes = ({boxsrc="images/ico-01.png",
                boxtitle="IMPROVED OVERALLHEALT",
                boxtext="Enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut allquip ex ea com."}) =>
<li>
    <div class="box">
        <div class="ico">
            <img src={boxsrc} alt="" />
        </div>
        <div>
            <h3>{boxtitle}</h3>
            <p>{boxtext}</p>
        </div>
    </div>
</li>

const Container4 = () =>
<div class="section5">
    <ul class="list">
        <Boxes />
        <Boxes boxsrc="images/ico-02.png" boxtitle="INCREASED CONCENTRATION" />
        <Boxes boxsrc="images/ico-03.png" boxtitle="BALANCE YOUR MIND" />
        <Boxes boxsrc="images/ico-04.png" boxtitle="SLEEP BETTER" />
        <Boxes boxsrc="images/ico-05.png" boxtitle="WEIGHT LOSS" />
        <Boxes boxsrc="images/ico-06.png" boxtitle="STRENGTHENS YOUR BONES" />
        <Boxes boxsrc="images/ico-07.png" boxtitle="INCREASED FLEXIBILITY" />
        <Boxes boxsrc="images/ico-08.png" boxtitle="LOWER BLOOD PRESSURE" />
    </ul>
</div>

const Boxpayment = ({number="49", value="NUTRITION ADVICER: NO"}) =>
<div class="payment">
    <div class="money">
        <span class="dollar"> $ </span>
        <span class="number"> {number} </span>
        <span class="month"> / MONTH</span>
    </div>
    <div class="form2">
        <form action="#" class="trial2">
            <input class="input2" type="text" placeholder="ENTRY DATE: MON – FRI"
        onfocus="(this.type='date')" />
            <input class="input2" type="text" placeholder="ENTRY TIME: 8A.M – 8P.M"
        onfocus="(this.type='time')" />
            <select class="select2">
                <option value disabled selected>{value}</option>
                <option>NUTRITION ADVICER: YES</option>
                <option>NUTRITION ADVICER: NO</option>
            </select>
            <div class="buynow">
                <a href="">Buy now</a>
            </div>
        </form>
    </div>    
</div>

const Container5 = () =>
<div class="section6">
    <Boxpayment />
    <Boxpayment number="69" value="NUTRITION ADVICER: YES" />
    <Boxpayment number="99" value="NUTRITION ADVICER: YES" />
</div>

function App() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }

export default App;
