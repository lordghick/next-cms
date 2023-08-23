// import { useRouter } from 'next/navigation'

// export default function GetRouter(){
//     const router = useRouter();
//     let data = router.query
//     return data;
// }

export default async function getServerSideProps(context) {
    console.log(context.query);
    return {
      props: {}, // will be passed to the page component as props
    }
  }