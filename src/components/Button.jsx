

function Button({operador, fn}) {
  return (
    <button
          type='button'
          className='h-10 w-10 flex items-center justify-center rounded-full bg-indigo-400 hover:bg-indigo-700 text-white font-bold hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-indigo-500'
          onClick={fn}
    >{operador}</button>
  )
}

export default Button