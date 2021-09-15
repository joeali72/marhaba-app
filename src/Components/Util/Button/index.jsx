import { Link } from 'react-router-dom';
import Classes from './button.module.scss';

export default function Button(props) {
    return (
        <Link className={`${Classes.Button} ${props.className}`} to={props.to}>
            {props.children}
        </Link>
    )
};
