//create components

//MainContainer
const MainContainer = <CompanyName companyname='Stuff Mart' />;

//CompanyName
function CompanyName(props) {
  return <h1>Welcome to {props.companyname}!</h1>
}



//Add to Dom

ReactDOM.render(
  MainContainer,
  document.getElementById('root')
);