'use strict';

function TradingCard(props) {
  return (
    <div className="card">
      <h2>Name: {props.name}</h2>
      <img src={props.imgUrl} alt="profile" />
      <h2>Skill: {props.skill}</h2>
    </div>
  );
}

// ReactDOM.render(
//   <TradingCard name="Balloonicorn" skill="video games" imgUrl="/static/img/balloonicorn.jpg" />,
//   document.querySelector('#balloonicorn')
// );

// ReactDOM.render(
//   <TradingCard name="Float" skill="baking pretzels" imgUrl="/static/img/float.jpg" />,
//   document.querySelector('#float')
// );

// ReactDOM.render(
//   <TradingCard name="Llambda" skill="knitting socks" imgUrl="/static/img/llambda.jpg" />,
//   document.querySelector('#llambda')
// );

// ReactDOM.render(
//   <TradingCard name="Emily" skill="slinging 'spro" imgUrl="/static/img/emily.jpg" />,
//   document.querySelector('#emily')
// );

// ReactDOM.render(
//   <TradingCard name="Jerry" skill="catching thrown items" imgUrl="https://live.staticflickr.com/8167/7333205650_3b42821d17_b.jpg" />,
//   document.querySelector('#jerry')
// );

const tradingCardData = [
  {
    name: "Balloonicorn",
    skill: "video games",
    imgUrl: "/static/img/balloonicorn.jpg",
    cardId: 1,
  },
  {
    name: "Float",
    skill: "baking pretzels",
    imgUrl: "/static/img/float.jpg",
    cardId: 2,
  },
  {
    name: "Llambda",
    skill: "knitting scarves",
    imgUrl: "/static/img/llambda.jpg",
    cardId: 3,
  },
  {
    name: "Off-By-One",
    skill: "climbing mountains",
    imgUrl: "/static/img/off-by-one.jpeg",
    cardId: 4,
  },
  {
    name: "Seed.py",
    skill: "making curry dishes",
    imgUrl: "/static/img/seedpy.jpeg",
    cardId: 5,
  },
  {
    name: "Polymorphism",
    skill: "costumes",
    imgUrl: "/static/img/polymorphism.jpeg",
    cardId: 6,
  },
  {
    name: "Jerry",
    skill: "catching thrown items",
    imgUrl: "https://live.staticflickr.com/8167/7333205650_3b42821d17_b.jpg",
    cardId: 7,
  },
  {
    name: "Emily",
    skill: "slinging 'spro",
    imgUrl: "/static/img/emily.jpg",
    cardId: 8,
  },
];


function TradingCardContainer() {
  const paragraphs = [];

  for (const aCard of tradingCardData) {
    //console.log(aCard);
    paragraphs.push(
      <TradingCard name={aCard.name} skill={aCard.skill} imgUrl={aCard.imgUrl} />
      );
  }

  return (
    <React.Fragment>
      {paragraphs}
    </React.Fragment>
  );
}

ReactDOM.render(<TradingCardContainer />, document.querySelector("#all-cards"));

