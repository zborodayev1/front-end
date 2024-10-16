import { Link } from "react-router-dom"
import { Header } from "../../components/Header/Header"

export const NotFoundError = () => {
  return (
    <div>
        <Header/>
        <Link to='/'>
            <span to='/' className="text-2xl font-bold flex justify-center mt-2">Страница не найдена</span>
        </Link>
    </div>
  )
}
