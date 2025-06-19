export default async function Page({params}: {params: {id: string}}) {
    const parameters = await params
    return (
        <p>Dynamic Page: {parameters.id}</p>
    );
}