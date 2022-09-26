import { useForm } from '../../../utils/useForm';
import {
  ButtonBox,
  FormBox,
  FormButton,
  FormContainer,
  InputContainer,
} from './Form.styled';

interface IForm {
  name: string;
  email: string;
  checkbox: boolean;
}

const Form: FC = () => {
  const {
    handleSubmit,
    handleChange,
    data: user,
    errors,
  } = useForm<IForm>({
    validations: {
      name: {
        pattern: {
          value: '^[A-Za-z]*$',
          message: 'Special characters confuse us.',
        },
      },
      email: {
        pattern: {
          value: '^[A-Za-z]*$',
          message: 'Special characters confuse us.',
        },
      },
    },
    onSubmit: () => alert('RSVP sent!'),
  });

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormBox>
          <InputContainer>
            <label htmlFor="name">Name: </label>
            <input
              name="name"
              value={user.name || ''}
              onChange={handleChange('name')}
              required
            />
            {errors.name && <p>{errors.name}</p>}
          </InputContainer>
          <InputContainer>
            <label htmlFor="email">Email: </label>
            <input
              name="email"
              value={user.email || ''}
              onChange={handleChange('email')}
              required
            />
            {errors.email && <p>{errors.email}</p>}
          </InputContainer>
          <InputContainer>
            <label htmlFor="checkbox">Attending? </label>
            <select
              onChange={handleChange('checkbox')}
              name="checkbox"
              required
            >
              <option value="" disabled selected>
                Pick One
              </option>
              <option value="yes" selected={user.checkbox === 'true'}>
                Yes
              </option>
              <option value="no" selected={user.checkbox === 'false'}>
                No
              </option>
            </select>
          </InputContainer>
        </FormBox>
        <ButtonBox>
          <FormButton type="submit">Confirm</FormButton>
        </ButtonBox>
      </form>
    </FormContainer>
  );
};

export default Form;
