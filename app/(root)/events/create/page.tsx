import EventForm from '@/components/shared/EventForm'
import { auth, currentUser } from '@clerk/nextjs/server'

const CreateEvent = async () => {
  const { publicMetadata } = await currentUser()

  const userId = publicMetadata.userId

  // const userId = sessionClaims?.userId as string

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">
          Create Event
        </h3>
      </section>

      {userId && (
        <div className="wrapper my-8">
          <EventForm userId={userId} type="Create" />
        </div>
      )}
    </>
  )
}

export default CreateEvent
