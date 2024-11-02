import Input from '../../atoms/Input/Input';
import Label from '../../atoms/Label/Label';
import Button from '../../atoms/Button/Button'
import './form.css';

const Form = () => {
  return (
    <form action="" className='form-section'>
      <Label text="Name:"/>
      <Input type="text"/>
      <Label text="Email:"/>
      <Input type="email"/>
      <Label text="Password:"/>
      <Input type="password"/>
      <Button title="Join Now" className="button-form"/>
    </form>
  )
}

export default Form