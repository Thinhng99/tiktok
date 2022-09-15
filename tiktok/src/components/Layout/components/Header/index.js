import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faEarthAsia,
    faQuestionCircle,
    faKeyboard,
    faCloudUpload,
    faUser,
    faCoins,
    faGear,
    faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';

import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import Menu from '../../Popper/Menu';
import { MailboxIcon, MessageIcon } from '~/components/Icons';
import Search from '../Search';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Languages',
            data: [
                { type: 'language', code: 'en', title: 'English' },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'VietNamese',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faQuestionCircle} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View Profile',
        to: '@aaa',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/setting',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOutAlt} />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];
function Header() {
    const currentUser = true;
    const handleOnchangeMenu = () => {};
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="error" />
                </div>
                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload Video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudUpload} />
                                </button>
                            </Tippy>
                            <Tippy content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon className={cx('svg-icon')} />
                                </button>
                            </Tippy>
                            <Tippy content="Mailbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MailboxIcon className={cx('svg-icon')} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Up load</Button>
                            <Button
                                primary
                                // rounded
                                // rightIcon={<FontAwesomeIcon icon={faSignIn} />}
                            >
                                Log in
                            </Button>
                        </>
                    )}
                    <Menu
                        items={currentUser ? userMenu : MENU_ITEMS}
                        onChange={handleOnchangeMenu}
                    >
                        {currentUser ? (
                            <img
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1663032433476609.jpeg?x-expires=1663250400&x-signature=PnWMtrMZD4k1eHUD7QuiVtcK8hs%3D"
                                className={cx('user-avatar')}
                                alt="User"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}
export default Header;
