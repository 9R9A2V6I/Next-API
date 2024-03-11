import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>Hello</h1>
      <Link href="/product"> Product</Link>
      <Link href="/productadded">Add Product</Link>
    </main>
  );
}
