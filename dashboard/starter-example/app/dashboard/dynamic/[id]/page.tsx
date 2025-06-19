type PageProps = {
    params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
    const resolvedParams = await params;
    return (
        <div>
            <h1>Dynamic ID: {resolvedParams.id}</h1>
        </div>
    );
}