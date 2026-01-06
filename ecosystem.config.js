module.exports = {
    apps: [
        {
            name: 'docusaurus',
            cwd: 'C:/WorkSpace/Spring/DocumentManagement/docusaurus',
            script: 'node',
            args: 'node_modules/@docusaurus/core/bin/docusaurus.mjs start',
            autorestart: true,
            watch: false,
            max_memory_restart: '1G',
        },
    ],
};
