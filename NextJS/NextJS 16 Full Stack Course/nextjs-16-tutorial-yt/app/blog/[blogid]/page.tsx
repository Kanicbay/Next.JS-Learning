interface BlogIdPageProps {
    params: {
        blogid: string;
    }
}

export default async function BlogidPage({ params }: BlogIdPageProps) {
    const { blogid } = await params;
    return (
        <div>
            <h1>
                Hello from the blog id page
                <p>Blog id: {blogid}</p>
            </h1>
        </div>
    );
}