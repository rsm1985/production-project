import React from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from './PageError.module.scss';
import {useTranslation} from 'react-i18next';
import {Button} from 'shared/ui';

interface PageErrorProps {
    className?: string;
}


export const PageError = ({className}: PageErrorProps) => {
	const {t} = useTranslation();

	const reloadPage = () => {
		location.reload();
	};

	return (
  <div className={classNames(styles.PageError, {}, [styles[className]])}>
  <p>{t('pageError')}</p>
			<Button onClick={reloadPage}> {t('reloadPage')}</Button>
		</div>
	);
};