import style from './List.module.css'

type ListPropsType = {
    genre: any
}
export default function List({ genre }: ListPropsType) {

    return (
        <div className={style.button}>
            <ul>
            <li>{genre.name}</li>
            </ul>
        </div>
    )
}