import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Products from "@/components/Products";

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <div className="container mx-auto px-2 md:px-0">
          <div className="pt-10">
            <Products />
          </div>
          <div>
            <Banner/>
          </div>
        </div>
      </main>
    </>
  )
}
