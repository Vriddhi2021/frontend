import Footer from "../../components/footer";
import Navbar from "../../components/Navbar";
import { useRouter } from "next/router";

const event = () => {
    const router = useRouter();
    const eventId = router.query.event;
  return (
    <>
        <Navbar/>
        <section className="display-1 text-center text-danger p-5">
            This is event page of id {eventId}
        </section>
        <Footer/>
    </>
  )
}

export default event