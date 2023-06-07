import Banner from "@/components/Banner";
import Cartmenu from "@/components/Cartmenu";
import CategoriesItems from "@/components/CategoriesItems";
import Header from "@/components/Header";
import MainBanner from "@/components/MainBanner";
import Products from "@/components/Products";

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <Cartmenu/>
        <div className="container mx-auto px-2 md:px-0">
          <div>
            <MainBanner/>
          </div>
          <div className="pt-10">
            <CategoriesItems/>
          </div>
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
