import React from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from 'shared/ui';

interface NavbarProps {
    classname?: string;
}

export const Navbar = ({classname}: NavbarProps) => {
	return (
  <div className={classNames(styles.Navbar, {}, [classname])}>
  <div className={classNames(styles.logo)}>Logo
			</div>
  <div className={classNames(styles.links)}>
  <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={styles.link}>Main</AppLink>
  <AppLink theme={AppLinkTheme.SECONDARY} to="/about" className={styles.link}>About</AppLink>
			</div>
		</div>
	);
};

