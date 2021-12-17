
function About(props) {
    return (
    <div>
      <p>About the Author</p>
      <h2>{props.name}</h2>
      <p>{props.bio}</p>
      <p><img src={props.picture}/></p>
     </div>);
  }
  
  ReactDOM.render(<About name="Baloonicorn" bio="BIO: I'm fab.💅" picture='/static/img/balloonicorn.jpg' />, document.querySelector('#about-me'));
  