//create components

//MainContainer
function MainContainer() {
  return (
  <div>
    <CompanyName companyname='Stuff Mart' />
    <DataForm />
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

  return (
  <button onClick={handleClick}>
    {props.mainbuttonname}
  </button>
  );
}

//DataForm
function DataForm() {
  return (
  <form action ='/submit' method='get' className='dataform'>
    <div className='dataform'>
      <label>
        Name:
        <input type='text' name='name' id='name'/>
      </label>
    </div>
    <div className='dataform'>
      <label>
        Email:
        <input type='text' email='email' id='email'/>
      </label>
    </div>
    <div className='dataform'>
      <label>
        Password:
        <input type='text' password='password' id='password'/>
      </label>
    </div>
    <div className='dataform'>
      <label>
        Address1:
        <input type='text' address1='address1' id='address1'/>
      </label>
    </div>
    <div className='dataform'>
      <label>
        Address2:
        <input type='text' address2='address2' id='address2'/>
      </label>
    </div>
    <div className='dataform'>
      <label>
        City:
        <input type='text' city='city' id='city' />
      </label>
    </div>
    <div className='dataform'>
      <label>
        State:
        <input type='text' state='state' id='state' />
      </label>
    </div>
    <div className='dataform'>
      <label>
        Zipcode:
        <input type='text' zipcode='zipcode' id='zipcode'/>
      </label>
    </div>
    <div className='dataform'>
      <label>
        Phone:
        <input type='text' phone='phone' id='phone'/>
      </label>
    </div>
    <div className='dataform'>
      <label>
        Credit Card #:
        <input type='text' ccnumber='ccnumber' id='ccnumber'/>
      </label>
    </div>
    <div className='dataform'>
      <label>
        Expiration:
        <input type='text' expirydate='expirydate' id='expirydate'/>
      </label>
    </div>
    <div className='dataform'>
      <label>
        CVV:
        <input type='text' cvv='cvv' id='cvv'/>
      </label>
    </div>
    <div className='dataform'>
    <label>
      Billing Zipcode:
      <input type='text' billingzipcode='billingzipcode' id='billingzipcode'/>
    </label>
    </div>
    <div className='dataform'>
      <input type='submit' value='Submit' />
    </div>
  </form>




  );
}

//Add to Dom

ReactDOM.render(
  <MainContainer />,
  document.getElementById('root')
);