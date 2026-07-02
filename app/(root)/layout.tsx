import MobileNavbar from "@/components/MobileNavbar";
import SideBar from "@/components/SideBar"
import Image from "next/image";

//Este layout siempre se va a mostrar en las paginas de esta carpeta
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  const loggedIn = { firstName: 'Adrian'};

  return (
    //El main significa que aqui va el contenido principal y el children pues es el contenido dinamico
    <main className="flex h-screen w-full front-inter">
        <SideBar user = {loggedIn}/> 

        <div className="flex size-full flex-col">
          <div className="root-layout">
                <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
                <div>
                  <MobileNavbar user = {loggedIn} />
                </div>
          </div>
          {children}
        </div>
    </main>
  )
}
