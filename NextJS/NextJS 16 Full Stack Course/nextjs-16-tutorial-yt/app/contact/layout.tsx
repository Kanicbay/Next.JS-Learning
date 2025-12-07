export default function ContactLayout({children}: {children: React.ReactNode}){
    return (
        <div>
            <h1>
                Hello from the Contact layout
                {children}
            </h1>
        </div>
    );
}