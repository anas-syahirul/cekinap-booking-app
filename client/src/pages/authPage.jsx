import { Link } from 'react-router-dom';

const AuthPage = (props) => {
  const { type } = props;
  return (
    <div className='mt-4 grow flex items-center justify-around'>
      <div className='mb-64'>
        <h1 className='text-4xl text-center mb-4'>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </h1>
        <form className='max-w-md mx-auto'>
          {type === 'register' && <input type='text' placeholder='John Doe' />}
          <input type='email' placeholder='your@email.com' />
          <input type='password' placeholder='password' />
          <button className='primary'>Login</button>
          <div className='text-center py-2 text-gray-500'>
            {type === 'login'
              ? `Don't have an account yet? `
              : `Already a member? `}
            <Link
              to={type === 'login' ? '/register' : '/login'}
              className='underline text-black'
            >
              {type === 'login' ? 'Register now' : 'Login'}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
