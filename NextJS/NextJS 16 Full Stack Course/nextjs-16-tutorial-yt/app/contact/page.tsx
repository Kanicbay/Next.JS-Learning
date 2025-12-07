import Link from "next/link";

export default function ContactPage() {
    return (
        <div>
            <h1>Hello From the Contact Page</h1>
            <Link href="/contact/email">Go to Email</Link >
        </div>
    );
}