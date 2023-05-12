
export default function RequestCard({ req }) {

  return (
    <>
      <h2>{req.email}</h2>
      <p>{req.createdAt}</p>
    </>
  )
}