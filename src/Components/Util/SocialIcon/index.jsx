import Classes from './social.module.scss';

export default function SocialIcons(props) {
    return (
        <div className={`${Classes.SocialIcons}`}>
            <ul className={`list-unstyled ${Classes.SocialIcons_list}`}>
                {props.children}
            </ul>
        </div>
        )
};
