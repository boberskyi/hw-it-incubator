import s from './Loader.module.css';
import loaderImg from './loader.png';

export const Loader = () => <div className={s.loader}>
    <img src={loaderImg} alt="Loader"/>
</div>
