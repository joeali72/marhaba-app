import Subtitle from '../subTitle';
import Classes from './contactBox.module.scss';

export default function ContactBox(props) {
    return (
        <div className={`${Classes.ContactBox} ${props.contactBoxClassName}`} >
            <div className={`${Classes.ContactBox_icon}`}>
                {props.icon}
            </div>
            <div className={`${Classes.ContactBox_info}`}>
                <Subtitle className={`whtColor mb-1 mdTitle`}>
                    {props.subtitle}
                </Subtitle>
                <a href={props.href} className={`whtColor`}>{props.link}</a>
            </div>
        </div>
    )
};
