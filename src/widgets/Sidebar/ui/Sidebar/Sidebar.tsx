import React, {useState} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import styles from "./Sidebar.module.scss";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const toggleSidebar = () => {
        setCollapsed(prevState => !prevState)
    }
    return (
        <div className={classNames(styles.Sidebar, {[styles.collapsed]: collapsed}, [styles[className]])}>
            <button onClick={toggleSidebar}>toggle</button>
            <div className={styles.switchers}>
                <ThemeSwitcher  />
            </div>
        </div>
    );
};