import logo from '../assets/hay_day_logo.png'

export default function Header() {
  return (
    <div class="flex pb-1 w-screen text-3xl border-b-1 font-bold">
        <img src={logo} class="flex-none w-30" alt="Hayday Logo" />
        <div class="flex-auto px-5 text-center self-center">
          Hayday Assets Database
        </div>
      </div>
  )
}
