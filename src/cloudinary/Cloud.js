export async function getStaticProps() {
  const results = await fetch (`https://api.cloudinary.com/v1_1/{process.env.CLOUDINARY_CLOUD_NAME}/resources/image`, headers: {

  })
  return (
    props: {

    }
  )
}