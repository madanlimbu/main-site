export async function getStaticProps() {
    return { props: { name: 'madan' } }
}

function IndexPage({ name }) {
    return (
        <>
        {name}
            <div>Test home page.</div>
        </>);
}

export default IndexPage