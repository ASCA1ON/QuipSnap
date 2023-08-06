import Feed from "@/components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center" >Discover & Share 
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center">Amazing Tales</span>
        </h1>
        <p className="desc text-center">Script is a online tool for reading and sharing you stories</p>

        <Feed/>
    </section>
  )
}

export default Home