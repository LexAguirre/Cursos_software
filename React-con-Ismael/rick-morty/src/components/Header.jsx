const Header = ({ title, subtitle }) => (
  <div className="text-center">
    <h2 className="text-indigo-600 font-semibold uppercase">{subtitle}</h2>
    <h1 className="font-black text-stone-800 text-6xl">{title}</h1>
  </div>
)

export default Header
