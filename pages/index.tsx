import Image from 'next/image'

export default function Home() {
  return (
    <div className="container">
      <figure>
        <Image src="/sample.jpg" width={1920} height={2880} alt="" />
        <figcaption>A local image / original aspect ratio.</figcaption>
      </figure>
      <div style={{ height: 120 }} />
      <figure>
        <Image src="/sample.jpg" width={1920} height={1920} alt="" />
        <figcaption>A local image / custom aspect ratio.</figcaption>
      </figure>
      <div style={{ height: 120 }} />
      <figure>
        <Image src="https://images.dog.ceo/breeds/buhund-norwegian/hakon2.jpg" width={366} height={366} alt="" />
        <figcaption>A remote image / original aspect ratio</figcaption>
      </figure>
      <div style={{ height: 120 }} />
      <figure>
        <Image src="https://images.dog.ceo/breeds/buhund-norwegian/hakon2.jpg" width={366} height={120} alt="" />
        <figcaption>A remote image / custom aspect ratio</figcaption>
      </figure>
    </div>
  )
}
