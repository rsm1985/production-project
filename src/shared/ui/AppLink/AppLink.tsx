import React, {FC} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {Link, LinkProps} from 'react-router-dom';
import styles from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}
interface AppLinkProps extends  LinkProps {
    to: string;
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (
	{
		className,
		children,
		to,
		theme= AppLinkTheme.PRIMARY ,
		...restProps}) => {
	return (
  <Link
  to={to}
  className={classNames(styles.AppLink, {theme}, [className, styles[theme]])}
  {...restProps}
		>
  {children}
		</Link>
	);
};