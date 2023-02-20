import React from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from './PageLoader.module.scss';
import Loader from 'shared/assets/icons/PageLoader.svg';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({className}: PageLoaderProps) => {
	return (
  <div className={classNames(styles.PageLoader, {}, [styles[className]])}>
  <Loader />
		</div>
	);
};