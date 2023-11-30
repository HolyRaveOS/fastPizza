import { Link } from 'react-router-dom'
export default function Button({ children, disabled, to, type, onClick }) {
  const base =
    'focus:ring:yellow-300 inline-block rounded-full bg-yellow-400 font-medium uppercase tracking-wide text-stone-800 outline-none transition-colors duration-300 hover:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed text-sm'

  const styles = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4',
    small: base + ' py-2 px-4 md:px-5 md:py-2.5 text-xs',
    secondary:
      'focus:ring:stone-300 inline-block rounded-full bg-transparent border-2 font-medium uppercase tracking-wide text-stone-400 outline-none transition-colors duration-300 hover:bg-stone-300 focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed border-stone-300 px-4 py-2.5 md:px-6 md:py-3.5 hover:text-stone-800 focus:text-stone-800 text-sm',
    round: base + ' py-2 px-2.5 md:px-3.5 md:py-2 text-sm',
  }

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    )

  if (onClick)
    return (
      <button disabled={disabled} className={styles[type]} onClick={onClick}>
        {children}
      </button>
    )

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  )
}
