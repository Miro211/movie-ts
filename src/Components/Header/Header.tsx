import { useAppSelector } from '../../store/hooks'
import List from '../ui/List'
import Logo from '../../assets/logo.jpg'
import style from './Header.module.css'
export default function Header () {
    const {genres} =  useAppSelector((state) => state.genres)
    return (
        <header>
            <div className={style.head}>
            <img src={Logo} alt="" className={style.img}/>
            <input type="search"/>
            </div>
            <nav>
            {genres.map((genre : any)=> {
                return <List key={genre.id} genre={genre}/>
            } )}
            </nav>
        </header>
    )
}