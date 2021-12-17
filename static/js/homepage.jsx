'use strict';

function Homepage() {
  return (
  <div>
    <p>Welcome to the page!</p>
    <p><a href="/cards">Go to the Cards!!</a></p>
    <p><img src='/static/img/balloonicorn.jpg'/></p>
    <p><a href="/about">About Me</a></p>
   </div>);
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
