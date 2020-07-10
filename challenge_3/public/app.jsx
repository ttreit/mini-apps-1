//create components

//MainContainer
function MainContainer() {
  return (
  <div>
    <CompanyName companyname='Stuff Mart' />
    <MainButton mainbuttonname='test' />
  </div>
  );
}
// button relies on state

//CompanyName
function CompanyName(props) {
  return <h1>Welcome to {props.companyname}!</h1>
}

//Button
function MainButton(props) {
  function handleClick(e) {
    console.log('The button was clicked!');
  }

  return <button onClick={handleClick}>
    {props.mainbuttonname}
  </button>
}

//Add to Dom

ReactDOM.render(
  <MainContainer />,
  document.getElementById('root')
);