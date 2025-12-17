import React from "react";
import Layout from '@theme/Layout';

export default function HelloReact() {
    return (
        <Layout title="Hello React" description="A simple React page in Docusaurus">
            <main style={{ padding: '2rem', textAlign: 'center' }}>
                <h1>Hello, React!</h1>
                <p>This is a simple React component rendered within a Docusaurus page.</p>
            </main>
        </Layout>
    );
}