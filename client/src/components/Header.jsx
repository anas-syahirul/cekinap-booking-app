import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='pb-3 flex justify-between'>
      <Link to={'/'} className='flex items-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='#125e26'
          className='size-8 mr-1'
        >
          <path d='M19.006 3.705a.75.75 0 1 0-.512-1.41L6 6.838V3a.75.75 0 0 0-.75-.75h-1.5A.75.75 0 0 0 3 3v4.93l-1.006.365a.75.75 0 0 0 .512 1.41l16.5-6Z' />
          <path
            fillRule='evenodd'
            d='M3.019 11.114 18 5.667v3.421l4.006 1.457a.75.75 0 1 1-.512 1.41l-.494-.18v8.475h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3v-9.129l.019-.007ZM18 20.25v-9.566l1.5.546v9.02H18Zm-9-6a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75H9Z'
            clipRule='evenodd'
          />
        </svg>

        <span className='text-xl font-bold text-primary'>CekInap</span>
      </Link>
      <div className='flex gap-2 border py-2 px-4 rounded-full border-gray-300 shadow-md shadow-gray-300'>
        <div>Anywhere</div>
        <div className='border-l border-gray-500'></div>
        <div>Any week</div>
        <div className='border-l border-gray-500'></div>
        <div>Add guests</div>
        <button className='bg-primary p-1 text-white rounded-full'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-4'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
            />
          </svg>
        </button>
      </div>
      <Link
        to={'/login'}
        className='flex gap-2 border py-2 px-4 rounded-full border-gray-300'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='size-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
          />
        </svg>
        <div className='bg-gray-500 text-white rounded-full border-gray-500 overflow-hidden items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='size-6 relative top-1'
          >
            <path
              fillRule='evenodd'
              d='M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z'
              clipRule='evenodd'
            />
          </svg>
        </div>
      </Link>
    </header>
  );
};

export default Header;
