import Link from 'next/link'
import Header from 'component/block/header'

export default function IndexPage() {
  return (
    <div>
      <Header />
      <h4
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        Please move to&nbsp;
        <Link href='/profile/!1NMGhCcD3!'>/profile/!1NMGhCcD3!</Link>
      </h4>
    </div>
  )
}
