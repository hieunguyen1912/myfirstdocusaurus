import React from "react";
import DocsVersionDropdownNavbarItem from '@theme-original/NavbarItem/DocsVersionDropdownNavbarItem';
import { useLocation } from '@docusaurus/router';

export default function DocsVersionDropdownNavbarItemWrapper(props) {
    const { pathname } = useLocation();
    const { docsPluginId } = props;

    const basePath =
        docsPluginId === 'default' ? '/myfirstdocusaurus/docs' : `/myfirstdocusaurus/${docsPluginId}`;
    const isCurrentInstance = pathname.startsWith(basePath);
    console.log('basePath:', basePath, 'pathname:', pathname, 'isCurrentInstance:', isCurrentInstance);

    if (!isCurrentInstance) {
        return null;
    }

    return <DocsVersionDropdownNavbarItem {...props} />;
}
